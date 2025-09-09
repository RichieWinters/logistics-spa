
export default function Hero() {
  return (
    <div className="relative min-h-[77vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Content */}
        <div className="relative flex flex-col items-start justify-center text-start">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl shadow-black/50">
            ПРЕМИУМ-ТРАНСФЕР В БЕЛАРУСИ
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed drop-shadow-2xl shadow-black/50">
            Наша служба трансфера обеспечивает премиум-перевозки по всей
            территории Беларуси. Мы соединяем города, аэропорты и популярные
            туристические направления современным автопарком разного уровня
            комфорта. Заблаговременное резервирование гарантирует экономию времени
            и максимально приятное путешествие для каждого клиента.
          </p>
        </div>
      </div>
    </div>
  );
}
