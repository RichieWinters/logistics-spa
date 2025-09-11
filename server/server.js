require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Telegraf } = require("telegraf");
const axios = require("axios");
const formatTelegramMessage = require("./utils/formattedTelegramMessage");

const users = new Map();
// введите ваше имя пользователя Telegram без @ на которое надо получать данные с формы
const TELEGRAM_USERNAME = process.env.TG_USER;
// введите токен вашего бота, который вы получили от BotFather
const TELEGRAM_BOT_API = process.env.TG_BOT;
// введите ваш API ключ от Yandex GeoSuggest API https://yandex.ru/maps-api/docs/suggest-api/response.html
const YANDEX_SUGGEST_API = process.env.YANDEX_API;
const bot = new Telegraf(TELEGRAM_BOT_API);
bot.start((ctx) => {
  const username = ctx.from.username;
  const chatId = ctx.chat.id;
  if (username === TELEGRAM_USERNAME) {
    users.set(username, chatId);
    ctx.reply("Вы успешно подписались на уведомления.");
  }
});
bot.launch();

const app = express();
app.use(cors());
app.use(express.json());

// Обработчик для получения уведомлений из формы
app.post("/telegram/notify", async (req, res) => {
  if (!users.has(TELEGRAM_USERNAME)) {
    res.status(400).json({ message: "Пользователь не найден" });
    return;
  }

  const chatId = users.get(TELEGRAM_USERNAME);
  const formattedMessage = formatTelegramMessage(req.body);

  try {
    await bot.telegram.sendMessage(chatId, formattedMessage, { parse_mode: "HTML" });
    res.status(200).json({ message: "Заявка отправлена" });
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    if (error.code === 403) {
      users.delete(TELEGRAM_USERNAME);
      res.status(403).json({ message: "Бот заблокирован пользователем" });
      return;
    }
    res.status(500).json({ message: "Ошибка отправки сообщения" });
  }
});

// Обработчик для получения похожих маршрутов
app.get("/suggest", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    res.status(400).json({ message: "Запрос не может быть пустым" });
    return;
  }

  try {
    const response = await axios.get(
      `https://suggest-maps.yandex.ru/v1/suggest?apikey=${YANDEX_SUGGEST_API}&text=${text}&print_address=1&attrs=uri&lang=ru_RU`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Ошибка при обращении к Yandex Suggest API:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Запуск сервера на 3000 порту
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Обработчик который срабатывает после остановки сервера
process.on("SIGINT", async () => {
  console.log("\nПолучен сигнал завершения...");

  if (users.has(TELEGRAM_USERNAME)) {
    console.log(`Отправка уведомления пользователю ${TELEGRAM_USERNAME}...`);
    try {
      await bot.telegram.sendMessage(
        users.get(TELEGRAM_USERNAME),
        "🔴 Сервер завершает работу. Вы удалены из списка уведомлений.",
      );
      console.log("Уведомление отправлено");
    } catch (error) {
      console.error("Ошибка отправки уведомления:", error);
    }
    users.delete(TELEGRAM_USERNAME);
  }

  try {
    await bot.stop("SIGINT");
    console.log("Telegram бот остановлен");
  } catch (error) {
    console.error("Ошибка остановки бота:", error);
  }

  process.exit(0);
});
