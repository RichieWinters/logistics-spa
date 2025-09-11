// Constants
export const DISTANCE_COEFFICIENT = 2.5; // рублей за километр

// Validation functions
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return "Имя обязательно для заполнения";
  }
  if (name.trim().length < 2) {
    return "Имя должно содержать минимум 2 символа";
  }
  if (name.trim().length > 50) {
    return "Имя не должно превышать 50 символов";
  }
  if (!/^[a-zA-Zа-яёА-ЯЁ\s-]+$/.test(name.trim())) {
    return "Имя должно содержать только буквы, пробелы и дефисы";
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim().length === 0) {
    return "Номер телефона обязателен для заполнения";
  }

  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length < 9) {
    return "Номер телефона должен содержать минимум 9 цифр";
  }
  if (cleanPhone.length > 12) {
    return "Номер телефона не должен превышать 12 цифр";
  }

  if (!cleanPhone.startsWith("375")) {
    return "Номер телефона должен начинаться с 375 (Беларусь)";
  }

  const operatorCode = cleanPhone.substring(3, 5);
  const validOperators = ["25", "29", "33", "44"];

  if (!validOperators.includes(operatorCode)) {
    return "Некорректный код оператора. Допустимые коды: 25, 29, 33, 44";
  }

  return null;
};

export const validateMessage = (message) => {
  if (message && message.trim().length > 1000) {
    return "Сообщение не должно превышать 1000 символов";
  }
  return null;
};

export const validateDate = (date) => {
  if (!date) {
    return "Дата поездки обязательна для заполнения";
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "Дата поездки не может быть в прошлом";
  }

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  if (selectedDate > maxDate) {
    return "Дата поездки не может быть более чем через 1 год";
  }

  return null;
};

export const validateTime = (time) => {
  if (!time) {
    return "Время поездки обязательно для заполнения";
  }

  const [hours, minutes] = time.split(":").map(Number);

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return "Некорректное время";
  }

  return null;
};

// Format phone number
export const formatPhone = (phone) => {
  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length === 10 && cleanPhone.startsWith("8")) {
    return "+375" + cleanPhone.substring(1);
  }

  if (cleanPhone.startsWith("375")) {
    return "+" + cleanPhone;
  }

  if (cleanPhone.length === 9) {
    return "+375" + cleanPhone;
  }

  return phone;
};

// Debounce function
export const debounce = (func, ms = 500) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
};

// Backend API URL from .env
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000";

// Get address suggestions
export const getSimilarRoutes = async (text) => {
  try {
    const response = await fetch(`${BACKEND_API_URL}/suggest?text=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data?.results || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

// Map utilities
export const initMap = (mapRef, multiRouteRef, myMapRef, balloonRef, updateRouteInfo) => {
  if (typeof window.ymaps === "undefined") {
    console.error("Yandex Maps API не загружен");
    return;
  }

  myMapRef.current = new window.ymaps.Map(mapRef.current, {
    center: [53.9006, 27.559], // Минск
    zoom: 12,
    controls: [],
  });

  balloonRef.current = new window.ymaps.Balloon(myMapRef.current);
  balloonRef.current.options.setParent(myMapRef.current.options);

  multiRouteRef.current = new window.ymaps.multiRouter.MultiRoute(
    {
      referencePoints: [],
      params: {
        results: 1,
      },
    },
    {
      boundsAutoApply: true,
    },
  );

  myMapRef.current.geoObjects.add(multiRouteRef.current);
  multiRouteRef.current.model.events.add("requestsuccess", updateRouteInfo);
};

export const updateRouteInfo = (multiRouteRef, myMapRef, balloonRef, routeData, setRouteData) => {
  const routes = multiRouteRef.current.getRoutes();
  const route = routes.get(0);
  const bounds = route.getBounds();

  if (routes.getLength() > 0) {
    myMapRef.current.setBounds(bounds, {
      checkZoomRange: true,
      zoomMargin: 50,
    });
  }

  const referencePoints = multiRouteRef.current.model.getReferencePoints();
  if (referencePoints.length >= 2) {
    const time = route.properties.get("duration");
    const distance = route.properties.get("distance");

    const newRouteData = {
      distance: distance.value / 1000, // в километрах
      duration: time.value, // в секундах
      startCoords: referencePoints[0],
      endCoords: referencePoints[1],
      startAddress: routeData.startAddress,
      endAddress: routeData.endAddress,
    };

    setRouteData(newRouteData);

    const hours = Math.floor(time.value / 3600);
    const minutes = Math.floor((time.value % 3600) / 60);
    const cost = (newRouteData.distance * DISTANCE_COEFFICIENT).toFixed(2);

    const routeInfo = `Время в пути: ${hours} ч ${minutes} мин, Расстояние: ${newRouteData.distance.toFixed(
      2,
    )} км, Стоимость: ${cost} руб`;

    const paths = route.getPaths();
    const coords = paths.get(0).properties.get("coordinates");
    balloonRef.current.open(coords[Math.floor(coords.length / 2)], routeInfo);
  }
};

export const buildRoute = async (startAddress, endAddress, multiRouteRef, routeData, setRouteData) => {
  if (!startAddress || !endAddress) {
    alert("Пожалуйста, введите адреса отправления и назначения");
    return;
  }

  try {
    const startResult = await window.ymaps.geocode(startAddress);
    const endResult = await window.ymaps.geocode(endAddress);

    if (startResult.geoObjects.getLength() === 0 || endResult.geoObjects.getLength() === 0) {
      alert("Не удалось найти один из адресов. Проверьте правильность написания.");
      return;
    }

    const startCoords = startResult.geoObjects.get(0).geometry.getCoordinates();
    const endCoords = endResult.geoObjects.get(0).geometry.getCoordinates();

    setRouteData((prev) => ({
      ...prev,
      startAddress,
      endAddress,
    }));

    multiRouteRef.current.model.setReferencePoints([startCoords, endCoords]);
  } catch (error) {
    console.error("Ошибка геокодирования:", error);
    alert("Произошла ошибка при построении маршрута. Попробуйте еще раз.");
  }
};

// Form submission
export const prepareFormData = (data, routeData) => {
  const tripDateTimeISO =
    data.tripDate && data.tripTime ? new Date(`${data.tripDate}T${data.tripTime}:00`).toISOString() : null;

  return {
    name: data.name.trim(),
    phone: formatPhone(data.phone),
    message: data.message.trim() || "Сообщение не указано",
    tripDateTime: tripDateTimeISO,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer || "Прямой переход",
    route: {
      distance: routeData.distance,
      duration: routeData.duration,
      startAddress: routeData.startAddress,
      endAddress: routeData.endAddress,
      startCoords: routeData.startCoords,
      endCoords: routeData.endCoords,
      cost: (routeData.distance * DISTANCE_COEFFICIENT).toFixed(2),
      coefficient: DISTANCE_COEFFICIENT,
    },
  };
};

export const submitForm = async (formData) => {
  const response = await fetch(`${BACKEND_API_URL}/telegram/notify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
