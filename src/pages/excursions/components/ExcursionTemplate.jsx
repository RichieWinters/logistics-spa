import { CheckCircle } from "lucide-react";
import ExcursionsCarousel from "@/components/ExcursionsCarousel";

export const RUB_RATE = 27.48;
export const USD_RATE = 0.32;

export const ExcursionTemplate = ({ title, description, images, time, distance, location, price }) => {
  const rendertCurrencies = (price) => {
    if (!Number.isNaN(Number(price))) {
      return (
        <>{`${Number(price).toFixed(0)} BYN / ${(Number(price) * RUB_RATE).toFixed(0)} RUB / ${(
          Number(price) * USD_RATE
        ).toFixed(0)} USD`}</>
      );
    } else {
      return <>{price}</>;
    }
  };

  return (
    <>
      <div className="pt-15">
        <ExcursionsCarousel excursions={images} />
      </div>

      {/* Content Section */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 mt-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Детали поездки:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-semibold">Время в пути до точки</span>
                    <p className="text-gray-600 text-sm">{time}</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-semibold">Километров в пути до точки</span>
                    <p className="text-gray-600 text-sm">{distance}</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-800 font-semibold">Местоположение</span>
                    <p className="text-gray-600 text-sm">{location}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Цена:</h4>
              <div className="space-y-2">
                {rendertCurrencies(price)}
                <div className="text-xs text-gray-500 mt-2">* В стоимость включены: транспорт, гид, входные билеты</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
