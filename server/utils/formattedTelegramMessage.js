const getBrowserInfo = require("./getBrowserInfo");

// Функция для форматирования сообщения для Telegram
function formatTelegramMessage(data) {
  if (!data) {
    return "❌ <b>Ошибка:</b> Нет данных для отображения";
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Не указано";
    try {
      return new Date(dateString).toLocaleString("ru-RU", {
        timeZone: "Europe/Minsk",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "Неверный формат даты";
    }
  };

  // Определяем тип заявки по наличию специфических полей
  const isExcursionRequest = data.excursionTitle;

  const requestDate = formatDate(data.timestamp);
  const browserInfo = data.userAgent ? getBrowserInfo(data.userAgent) : "Не определено";

  // Обработка экскурсионных заявок
  if (isExcursionRequest) {
    const tripDateTime = data.tripDateTime ? `${formatDate(data.tripDateTime)}` : "Не указана";
    const excursionTitle = data.excursionTitle || "Не указана";
    const peopleCount = data.peopleCount || "Не указано";
    const message = data.message || "Не указан";

    return `
🎯 <b>НОВАЯ ЗАЯВКА НА ЭКСКУРСИЮ</b>

👤 <b>Клиент:</b> ${data.name || "Не указано"}
📞 <b>Телефон:</b> <code>${data.phone || "Не указан"}</code>
🎪 <b>Экскурсия:</b> ${excursionTitle}

📅 <b>Дата и время экскурсии:</b> ${tripDateTime}
👥 <b>Количество человек:</b> ${peopleCount}
💬 <b>Комментарий:</b> ${message}

⏰ <b>Заявка подана:</b> ${requestDate}
🌐 <b>Источник:</b> ${data.referrer || "Не указан"}
📱 <b>Устройство:</b> ${browserInfo}
    `.trim();
  }

  if (data.type && data.message === "Заявка с контактной формы") {
    return `
📩 <b>НОВАЯ ЗАЯВКА С КОНТАКТНОЙ ФОРМЫ</b>

👤 <b>Клиент:</b> ${data.name || "Не указано"}
📞 <b>Телефон:</b> <code>${data.phone || "Не указан"}</code>
💬 <b>Сообщение:</b> ${data.message || "Не указано"}
🪪 <b>Категория услуги:</b> ${data.type || "Не указана"}

🗓 <b>Дата заявки:</b> ${requestDate}
🌐 <b>Источник:</b> ${data.referrer || "Не указан"}
📱 <b>Устройство:</b> ${browserInfo}
    `.trim();
  }

  // Обработка обычных заявок на поездки
  const tripDate = formatDate(data.tripDateTime);

  const route = data.route || {};
  const distance = route.distance ? route.distance.toFixed(2) : "Не указано";
  const duration = route.duration ? Math.round(route.duration / 60) : "Не указано";
  const cost = route.cost || "Не указано";
  const coefficient = route.coefficient || "Не указано";

  const getCoords = (coords) => {
    if (!coords || !Array.isArray(coords) || coords.length < 2) {
      return "Не указаны";
    }
    return `${coords[0]}, ${coords[1]}`;
  };

  const startCoords = getCoords(route.startCoords);
  const endCoords = getCoords(route.endCoords);

  let paymentText = "Не указан";
  if (data.paymentMethod === "cash") paymentText = "Наличный расчет";
  if (data.paymentMethod === "card") paymentText = "Безналичный";

  let contactText = "Не указан";
  if (data.contactMethod === "phone") contactText = "Позвонить по телефону";
  if (data.contactMethod === "telegram") contactText = "Написать в Telegram";
  if (data.contactMethod === "whatsapp") contactText = "Написать в WhatsApp";
  if (data.contactMethod === "viber") contactText = "Написать в Viber";

  let categoryText = "Не указан";
  if (data.category === "basic") categoryText = "Базовый";
  if (data.category === "premium") categoryText = "Премиум";
  if (data.category === "vip") categoryText = "VIP";

  let carTypeText = "Не указана";
  if (data.selectedCarType === "sedan") carTypeText = "Седан";
  if (data.selectedCarType === "universal") carTypeText = "Универсал";
  if (data.selectedCarType === "minivan") carTypeText = "Минивэн";
  if (data.selectedCarType === "business") carTypeText = "Бизнес";
  if (data.selectedCarType === "bus") carTypeText = "Бус";

  return `
🚗 <b>НОВАЯ ЗАЯВКА НА ПОЕЗДКУ</b>

👤 <b>Клиент:</b> ${data.name || "Не указано"}
📞 <b>Телефон:</b> <code>${data.phone || "Не указан"}</code>
💬 <b>Сообщение:</b> ${data.message || "Не указано"}
💳 <b>Способ оплаты:</b> ${paymentText}
📬 <b>Предпочтительный контакт:</b> ${contactText}
🪪 <b>Категория услуги:</b> ${categoryText}

🗓 <b>Дата поездки:</b> ${tripDate}
⏰ <b>Заявка подана:</b> ${requestDate}

🛣 <b>МАРШРУТ:</b>
📍 <b>Автомобиль:</b> ${carTypeText}
📍 <b>Откуда:</b> ${route.startAddress || "Не указано"}
📍 <b>Куда:</b> ${route.endAddress || "Не указано"}

📊 <b>ДЕТАЛИ ПОЕЗДКИ:</b>
📏 <b>Расстояние:</b> ${distance} км
⏱ <b>Время в пути:</b> ${duration} мин
💰 <b>Стоимость:</b> ${cost} BYN
📈 <b>Коэффициент:</b> ${coefficient}

🌐 <b>Источник:</b> ${data.referrer || "Не указан"}
📱 <b>Устройство:</b> ${browserInfo}

📍 <b>Координаты:</b>
• Начало: ${startCoords}
• Конец: ${endCoords}
    `.trim();
}

module.exports = formatTelegramMessage;
