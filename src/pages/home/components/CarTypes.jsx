import { CheckCircle } from "lucide-react";
import { carTypes } from "./carTypesConfig";

// Import capacity icons
import bigLuggageIcon from "@/assets/icons/big_lugagge.png";
import littleSuitcaseIcon from "@/assets/icons/little_suitcase.png";
import handBagIcon from "@/assets/icons/hand-bag.png";
import personIcon from "@/assets/icons/person.png";
import { wordCountForms } from "@/lib/wordCountForms";

// Function to render luggage icons with different sizes
const renderLuggageIcons = (luggage) => {
  return (
    <div className="flex flex-col items-start gap-2 text-xs!">
      {luggage?.big > 0 && (
        <p className="flex items-center gap-1">
          <img src={bigLuggageIcon} alt="Big Luggage" className="w-5 h-5" />
          <span>
            {luggage.big} {wordCountForms(luggage.big, "большой чемодан", "больших чемодана", "больших чемоданов")}
          </span>
        </p>
      )}
      {luggage?.medium > 0 && (
        <p className="flex items-center gap-1">
          <img src={littleSuitcaseIcon} alt="Medium Luggage" className="w-4 h-4" />
          <span>
            {luggage.medium}{" "}
            {wordCountForms(luggage.medium, "средний чемодан", "средних чемодана", "средних чемоданов")}
          </span>
        </p>
      )}
      {luggage?.small > 0 && (
        <p className="flex items-center gap-1">
          <img src={littleSuitcaseIcon} alt="Small Luggage" className="w-3 h-3" />
          <span>
            {luggage.small}{" "}
            {wordCountForms(luggage.small, "маленький чемодан", "маленьких чемодана", "маленьких чемоданов")}
          </span>
        </p>
      )}
      {luggage?.hand > 0 && (
        <p className="flex items-center gap-2 ml-1">
          <img src={handBagIcon} alt="Hand Luggage" className="w-2 h-2.5" />
          <span>ручная кладь</span>
        </p>
      )}
    </div>
  );
};

export default function CarTypes({ selectedCarType, onCarTypeChange }) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-white/80 mb-2">Выбор автомобиля</label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {carTypes.map((carType) => (
          <div
            key={carType.id}
            className={`
              relative border rounded-lg p-4 cursor-pointer transition-all duration-200
              ${
                selectedCarType === carType.id
                  ? "border-green-500 bg-green-400/70"
                  : "border-gray-600 hover:border-gray-400 bg-green-400/40"
              }
              ${!carType.active ? "opacity-30 cursor-not-allowed" : ""}
            `}
            onClick={() => {
              if (carType.active && onCarTypeChange) {
                onCarTypeChange(carType.id);
              }
            }}
          >
            {/* Car Icon */}
            <div className="flex justify-center mb-3">
              {carType.id === "universal" ? (
                <img src={carType.icon} alt={carType.name} className="w-35 h-12 object-cover bg-no-repeat" />
              ) : (
                <img src={carType.icon} alt={carType.name} className="w-30 h-12 object-contain" />
              )}
            </div>

            {/* Car Name */}
            <div className="text-center text-white font-medium mb-2">{carType.name}</div>

            {/* Capacity Info */}
            <div className="space-y-3 text-xs flex flex-col items-start text-white h-[65%]">
              {/* People Icons */}
              <div className="flex items-center justify-start gap-1 -ml-[4px]">
                <img src={personIcon} alt="Person" className="w-6 h-6" />
                <span className="text-xs">
                  {carType.people} {wordCountForms(carType.people, "человек", "человека", "человек")}
                </span>
              </div>

              {/* Luggage Icons */}
              <div className="flex items-center justify-center gap-1 flex-wrap">
                {renderLuggageIcons(carType.luggage)}
              </div>

              {/* Price per km */}

              <div className="text-green-400 font-semibold text-sm mt-auto w-full text-center">
                {carType.pricePerKm} byn/км
              </div>
            </div>

            {/* Selected Indicator */}
            {selectedCarType === carType.id && carType.active && (
              <div className="absolute top-2 right-2">
                <CheckCircle size={16} className="text-green-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
