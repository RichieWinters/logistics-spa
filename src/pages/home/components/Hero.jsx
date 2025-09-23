import { Button } from "@/components/ui/button";
import CallbackDialog from "@/components/CallbackDialog";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById("form");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative min-h-[77svh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Content */}
        <div className="relative flex flex-col items-start justify-center text-start md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white sm:mb-8 drop-shadow-2xl shadow-black/50">
            ПРЕМИУМ-ТРАНСФЕР В БЕЛАРУСИ
          </h1>
          <p className="text-md sm:text-2xl text-white max-w-3xl leading-relaxed drop-shadow-2xl shadow-black/50">
            Наша служба трансфера обеспечивает премиум-перевозки по всей территории Беларуси. Мы соединяем города,
            аэропорты и популярные туристические направления современным автопарком разного уровня комфорта.
            Заблаговременное резервирование гарантирует экономию времени и максимально приятное путешествие для каждого
            клиента.
          </p>
          <div className="flex w-full flex-col md:flex-row gap-4 sm:gap-8 mt-4">
            {/* First Button - Opens Dialog */}
            <CallbackDialog className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-9 py-6 min-w-[150px] text-lg transition-colors disabled:opacity-50 cursor-pointer rounded-xl" />

            {/* Second Button - Makes Phone Call */}
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-9 py-6 min-w-[150px] text-lg transition-colors disabled:opacity-50 cursor-pointer rounded-xl"
            >
              <a href="tel:+375291234567">+375 29 123 45 67</a>
            </Button>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-9 py-6 min-w-[150px] text-lg transition-colors disabled:opacity-50 cursor-pointer rounded-xl"
            >
              <Link onClick={handleScrollToForm}>Построить маршрут</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
