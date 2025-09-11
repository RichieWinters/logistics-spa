// функция для получения информации о браузере из userAgent
function getBrowserInfo(userAgent) {
    if (!userAgent || typeof userAgent !== "string") {
        return "Неизвестное устройство";
    }
    if (userAgent.includes("Chrome")) return "Chrome 🌐";
    if (userAgent.includes("Firefox")) return "Firefox 🔥";
    if (userAgent.includes("Safari")) return "Safari 🍎";
    if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera 🎭";
    if (userAgent.includes("Edge")) return "Edge 🔷";
    return "Неизвестный браузер";
}

module.exports = getBrowserInfo;
