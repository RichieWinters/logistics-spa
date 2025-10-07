module.exports = {
  apps: [
    {
      name: "bot",
      script: "./server.js",
      instances: "max", // использовать все CPU ядра
      exec_mode: "cluster", // кластерный режим
      env_production: {
        TG_USER: "tf24by",
        TG_BOT: "8046855081:AAGl2C83JfkibWD_2GRZMFz5ODXFq6dqjNc",
        YANDEX_API: "5aab951f-9bfb-4d90-85aa-8f79850f46ac",
      },

      log_type: "json",
      log_file: "./logs/combined.log",
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",

      // Перезагрузка
      watch: false, // в продакшене лучше false
      max_memory_restart: "1G", // перезапуск при превышении памяти

      // Автозапуск при перезагрузке системы
      autorestart: true,

      // Мониторинг
      merge_logs: true,
      time: true,
    },
  ],
};
