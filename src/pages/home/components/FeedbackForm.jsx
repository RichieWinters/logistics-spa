import { useState, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import {
  DISTANCE_COEFFICIENT,
  validateName,
  validatePhone,
  validateMessage,
  validateDate,
  validateTime,
  formatPhone,
  debounce,
  getSimilarRoutes,
  initMap,
  updateRouteInfo,
  buildRoute,
  prepareFormData,
  submitForm,
} from "./feedbackFormUtils";
import { PhoneInput } from "@/components/ui/phone-input";
import CarTypes from "./CarTypes";

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCarType, setSelectedCarType] = useState("sedan");
  const [routeData, setRouteData] = useState({
    distance: 0,
    duration: 0,
    startAddress: "",
    endAddress: "",
    startCoords: null,
    endCoords: null,
  });
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [showStartSuggestions, setShowStartSuggestions] = useState(false);
  const [showEndSuggestions, setShowEndSuggestions] = useState(false);

  // Refs for map and autocomplete
  const mapRef = useRef(null);
  const multiRouteRef = useRef(null);
  const myMapRef = useRef(null);
  const balloonRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    setError,
    control,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      tripDate: "",
      tripTime: "",
      message: "",
      startAddress: "",
      endAddress: "",
    },
  });

  const watchedStartAddress = watch("startAddress");
  const watchedEndAddress = watch("endAddress");

  // Handle start address autocomplete (debounced)
  // Memoize debounced autocomplete handlers with useRef to avoid useCallback dependency issues
  const handleStartAutocompleteRef = useRef(
    debounce(async (value) => {
      if (!value.trim()) {
        setStartSuggestions([]);
        setShowStartSuggestions(false);
        return;
      }
      const suggestions = await getSimilarRoutes(value);
      setStartSuggestions(suggestions);
      setShowStartSuggestions(suggestions.length > 0);
    }, 700),
  );

  const handleEndAutocompleteRef = useRef(
    debounce(async (value) => {
      if (!value.trim()) {
        setEndSuggestions([]);
        setShowEndSuggestions(false);
        return;
      }
      const suggestions = await getSimilarRoutes(value);
      setEndSuggestions(suggestions);
      setShowEndSuggestions(suggestions.length > 0);
    }, 700),
  );

  // Build route handler
  const handleBuildRoute = async () => {
    await buildRoute(watchedStartAddress, watchedEndAddress, multiRouteRef, routeData, setRouteData);
  };

  // Handle form submission
  const onSubmit = async (data) => {
    // Validate route
    if (routeData.distance === 0) {
      alert("Пожалуйста, постройте маршрут перед отправкой формы");
      return;
    }

    setIsLoading(true);

    try {
      const formData = {
        ...prepareFormData(data, routeData, selectedCarType),
        paymentMethod: data.paymentMethod,
        contactMethod: data.contactMethod,
      };
      await submitForm(formData);

      setShowSuccess(true);
      reset();
      setRouteData({
        distance: 0,
        duration: 0,
        startAddress: "",
        endAddress: "",
        startCoords: null,
        endCoords: null,
      });

      if (multiRouteRef.current) {
        multiRouteRef.current.model.setReferencePoints([]);
      }

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  // Set minimum date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setValue("tripDate", today);
  }, [setValue]);

  // Initialize map ТОЛЬКО ОДИН РАЗ
  useEffect(() => {
    if (typeof window.ymaps !== "undefined") {
      window.ymaps.ready(() => {
        // Создаем карту только если она еще не создана
        if (!myMapRef.current) {
          initMap(mapRef, multiRouteRef, myMapRef, balloonRef, () => {
            // В этом колбэке мы не передаем selectedCarType, чтобы не создавать зависимость
            // Обновление цены будет происходить через отдельный useEffect
            updateRouteInfo(multiRouteRef, myMapRef, balloonRef, setRouteData);
          });
        }
      });
    } else {
      console.error("Yandex Maps API не загружен");
    }
  }, []); // Пустой массив зависимостей - карта создается только один раз

  // Handle autocomplete
  useEffect(() => {
    handleStartAutocompleteRef.current(watchedStartAddress);
  }, [watchedStartAddress]);

  useEffect(() => {
    handleEndAutocompleteRef.current(watchedEndAddress);
  }, [watchedEndAddress]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".autocomplete-container")) {
        setShowStartSuggestions(false);
        setShowEndSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Update route info when car type changes
  useEffect(() => {
    if (multiRouteRef.current && routeData.distance > 0) {
      updateRouteInfo(multiRouteRef, myMapRef, balloonRef, setRouteData, selectedCarType);
    }
  }, [selectedCarType, routeData.distance]);

  return (
    <div className="pb-16" id="form">
      <div className="container mx-auto px-4 max-w-8xl">
        <Card className="p-8 shadow-lg bg-black/90 backdrop-blur-sm border-white/20 text-white rounded-4xl">
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-green-400 mb-2">Легко и удобно</span>
            <h2 className="text-white text-3xl font-bold">ЗАКАЗАТЬ ТРАНСФЕР</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Label htmlFor="name" className="text-sm font-medium text-white/80 mb-2 block">
                  Имя{" "}
                  {watch("name") && validateName(watch("name")) === null && (
                    <span className="text-green-500 font-bold">✓</span>
                  )}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  {...register("name", {
                    validate: validateName,
                  })}
                  className={
                    errors.name
                      ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                      : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                  }
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="flex-1">
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: validatePhone,
                  }}
                  render={({ field }) => (
                    <>
                      <Label htmlFor="phone" className="text-sm font-medium text-white/80 mb-2 block">
                        Номер телефона{" "}
                        {watch("phone") && validatePhone(watch("phone")) === null && (
                          <span className="text-green-500 font-bold">✓</span>
                        )}
                      </Label>
                      <PhoneInput
                        id="phone"
                        {...field}
                        placeholder="Введите ваш номер телефона"
                        className={
                          errors.phone
                            ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                            : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                        }
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                    </>
                  )}
                />
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Label htmlFor="tripDate" className="text-sm font-medium text-white/80 mb-2 block">
                  Дата поездки{" "}
                  {watch("tripDate") && validateDate(watch("tripDate")) === null && (
                    <span className="text-green-500 font-bold">✓</span>
                  )}
                </Label>
                <Input
                  id="tripDate"
                  type="date"
                  {...register("tripDate", {
                    validate: validateDate,
                  })}
                  className={
                    errors.tripDate
                      ? "border-red-500 bg-white text-gray-900 focus:border-green-400 focus:ring-green-400/20"
                      : "bg-white text-gray-900 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                  }
                  style={{
                    fontSize: "16px",
                    minWidth: "0",
                    width: "100%",
                  }}
                />
                {errors.tripDate && <p className="text-red-400 text-sm mt-1">{errors.tripDate.message}</p>}
              </div>

              <div className="flex-1">
                <Label htmlFor="tripTime" className="text-sm font-medium text-white/80 mb-2 block">
                  Ориентировочное время{" "}
                  {watch("tripTime") && validateTime(watch("tripTime")) === null && (
                    <span className="text-green-500 font-bold">✓</span>
                  )}
                </Label>
                <Input
                  id="tripTime"
                  type="time"
                  {...register("tripTime", {
                    validate: validateTime,
                  })}
                  className={
                    errors.tripTime
                      ? "border-red-500 bg-white text-gray-900 focus:border-green-400 focus:ring-green-400/20"
                      : "bg-white text-gray-900 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                  }
                  style={{
                    fontSize: "16px",
                    minWidth: "0",
                    width: "100%",
                  }}
                />
                {errors.tripTime && <p className="text-red-400 text-sm mt-1">{errors.tripTime.message}</p>}
              </div>
            </div>

            {/* Car Selection Section */}
            <CarTypes selectedCarType={selectedCarType} onCarTypeChange={setSelectedCarType} />

            {/* Map and Route Selection */}
            <div>
              <Label className="text-sm font-medium text-white/80 mb-2 block">Выбор маршрута</Label>
              <div
                ref={mapRef}
                className="w-full h-96 rounded-lg border border-white/20 mb-4"
                style={{ minHeight: "400px" }}
              />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 autocomplete-container relative">
                    <Input
                      placeholder="Введите адрес отправления"
                      {...register("startAddress")}
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                    />
                    {showStartSuggestions && startSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                        {startSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                            onClick={() => {
                              setValue("startAddress", suggestion.text || suggestion?.address?.formatted_address);
                              setShowStartSuggestions(false);
                              setStartSuggestions([]);
                            }}
                          >
                            <div className="font-medium text-gray-900">
                              {suggestion.text || suggestion?.address?.formatted_address}
                            </div>
                            {suggestion?.address?.formatted_address &&
                              suggestion?.address?.formatted_address !==
                                (suggestion.text || suggestion?.address?.formatted_address) && (
                                <div className="text-sm text-gray-500">{suggestion?.address?.formatted_address}</div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 autocomplete-container relative">
                    <Input
                      placeholder="Введите адрес назначения"
                      {...register("endAddress")}
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                    />
                    {showEndSuggestions && endSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                        {endSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                            onClick={() => {
                              setValue("endAddress", suggestion.text || suggestion?.address?.formatted_address);
                              setShowEndSuggestions(false);
                              setEndSuggestions([]);
                            }}
                          >
                            <div className="font-medium text-gray-900">
                              {suggestion.text || suggestion?.address?.formatted_address}
                            </div>
                            {suggestion?.address?.formatted_address &&
                              suggestion?.address?.formatted_address !==
                                (suggestion.text || suggestion?.address?.formatted_address) && (
                                <div className="text-sm text-gray-500">{suggestion?.address?.formatted_address}</div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleBuildRoute}
                  className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-6 py-2 transition-colors cursor-pointer"
                >
                  Построить маршрут
                </Button>
              </div>
            </div>

            {/* Message */}
            <div>
              {/* Preferred contact method dropdown */}
              <div className="mb-4">
                <Label htmlFor="contactMethod" className="text-sm font-medium text-white/80 mb-2 block">
                  Как с вами лучше связаться?
                </Label>
                <div className="relative">
                  <select
                    id="contactMethod"
                    {...register("contactMethod")}
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-3 py-2 focus:border-green-400 focus:ring-green-400/20 appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">Выберите способ связи (не обязательно)</option>
                    <option value="phone">Позвонить по телефону</option>
                    <option value="telegram">Написать в Telegram</option>
                    <option value="whatsapp">Написать в WhatsApp</option>
                    <option value="viber">Написать в Viber</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
                </div>
              </div>

              <Label htmlFor="message" className="text-sm lg:text-base font-medium text-white/80 mb-2 block">
                Сообщение
              </Label>
              <Textarea
                id="message"
                placeholder="Опишите ваши требования или вопросы"
                rows={4}
                {...register("message", {
                  validate: validateMessage,
                })}
                className={
                  errors.message
                    ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                    : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-green-400 focus:ring-green-400/20"
                }
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Payment method radio buttons */}
            <div className="mb-4 flex gap-6 items-center">
              <span className="text-sm font-medium text-white/80">Способ оплаты:</span>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="cash"
                  {...register("paymentMethod", { required: true })}
                  className="accent-green-400"
                />
                <span className="text-white">Наличный расчет</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="card"
                  {...register("paymentMethod", { required: true })}
                  className="accent-green-400"
                />
                <span className="text-white">Безналичный</span>
              </label>
            </div>
            {errors.paymentMethod && <p className="text-red-400 text-sm mb-2">Пожалуйста, выберите способ оплаты</p>}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="w-full text-center text-xs text-gray-300 mb-2">
                * Цена примерная, окончательная стоимость обсуждается после оформления заявки с менеджером.
              </div>
              <Button
                type="button"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 min-w-[200px] transition-colors"
                disabled
              >
                Стоимость: {(routeData.distance * DISTANCE_COEFFICIENT).toFixed(2)} BYN
              </Button>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-6 py-3 min-w-[150px] transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </Button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-500/20 border border-green-400/50 text-green-300 px-4 py-3 rounded-lg backdrop-blur-sm">
                <p className="text-center font-medium">
                  Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}
