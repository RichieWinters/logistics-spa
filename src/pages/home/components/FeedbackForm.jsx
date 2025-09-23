import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
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

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  // Handle start address autocomplete
  const handleStartAutocomplete = debounce(async (value) => {
    if (!value.trim()) {
      setStartSuggestions([]);
      setShowStartSuggestions(false);
      return;
    }

    const suggestions = await getSimilarRoutes(value);
    setStartSuggestions(suggestions);
    setShowStartSuggestions(suggestions.length > 0);
  });

  // Handle end address autocomplete
  const handleEndAutocomplete = debounce(async (value) => {
    if (!value.trim()) {
      setEndSuggestions([]);
      setShowEndSuggestions(false);
      return;
    }

    const suggestions = await getSimilarRoutes(value);
    setEndSuggestions(suggestions);
    setShowEndSuggestions(suggestions.length > 0);
  });

  // Map update handler
  const handleUpdateRouteInfo = () => {
    updateRouteInfo(multiRouteRef, myMapRef, balloonRef, setRouteData);
  };

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
      const formData = prepareFormData(data, routeData);
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

  // Initialize map
  useEffect(() => {
    if (typeof window.ymaps !== "undefined") {
      window.ymaps.ready(() => {
        initMap(mapRef, multiRouteRef, myMapRef, balloonRef, handleUpdateRouteInfo);
      });
    } else {
      console.error("Yandex Maps API не загружен");
    }
  }, []);

  // Handle autocomplete
  useEffect(() => {
    handleStartAutocomplete(watchedStartAddress);
  }, [watchedStartAddress]);

  useEffect(() => {
    handleEndAutocomplete(watchedEndAddress);
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

  return (
    <div className="pb-16" id="form">
      <div className="container mx-auto px-4 max-w-8xl">
        <Card className="p-8 shadow-lg bg-black/90 backdrop-blur-sm border-white/20 text-white rounded-4xl">
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-yellow-400 mb-2">Легко и удобно</span>
            <h2 className="text-white text-3xl font-bold">ЗАКАЗАТЬ ТРАНСФЕР</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Label htmlFor="name" className="text-sm font-medium text-white/80 mb-2 block">
                  Имя <span className="text-red-500">*</span>
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
                      ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20"
                      : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                  }
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="flex-1">
                <Label htmlFor="phone" className="text-sm font-medium text-white/80 mb-2 block">
                  Номер телефона <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+375 29 123 45 67"
                  {...register("phone", {
                    validate: validatePhone,
                  })}
                  className={
                    errors.phone
                      ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20"
                      : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                  }
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Label htmlFor="tripDate" className="text-sm font-medium text-white/80 mb-2 block">
                  Дата поездки <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="tripDate"
                  type="date"
                  {...register("tripDate", {
                    validate: validateDate,
                  })}
                  className={
                    errors.tripDate
                      ? "border-red-500 bg-white text-gray-900 focus:border-yellow-400 focus:ring-yellow-400/20"
                      : "bg-white text-gray-900 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                  }
                />
                {errors.tripDate && <p className="text-red-400 text-sm mt-1">{errors.tripDate.message}</p>}
              </div>

              <div className="flex-1">
                <Label htmlFor="tripTime" className="text-sm font-medium text-white/80 mb-2 block">
                  Ориентировочное время <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="tripTime"
                  type="time"
                  {...register("tripTime", {
                    validate: validateTime,
                  })}
                  className={
                    errors.tripTime
                      ? "border-red-500 bg-white text-gray-900 focus:border-yellow-400 focus:ring-yellow-400/20"
                      : "bg-white text-gray-900 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                  }
                />
                {errors.tripTime && <p className="text-red-400 text-sm mt-1">{errors.tripTime.message}</p>}
              </div>
            </div>

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
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
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
                      className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
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
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 transition-colors cursor-pointer"
                >
                  Построить маршрут
                </Button>
              </div>
            </div>

            {/* Message */}
            <div>
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
                    ? "border-red-500 bg-white text-gray-900 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20"
                    : "bg-white text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400/20"
                }
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 min-w-[150px] transition-colors disabled:opacity-50 cursor-pointer"
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
