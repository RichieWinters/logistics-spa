import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Users, Camera, CheckCircle, TreePine, Home, Music, Utensils } from "lucide-react";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import Service1 from "@/assets/images/Service1.jpg";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export const DudutkaMuseumTourPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Service1})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Экскурсия в Дудутки</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Музей народных ремёсел и технологий: погружение в белорусскую старину
                </p>
              </div>
              <HeaderButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Музейный комплекс древних технологий и ремёсел</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Окунитесь в атмосферу белорусской деревни XIX века в уникальном музее народных ремёсел "Дудутки". Здесь
                вы увидите, как жили и работали наши предки, познакомитесь с традиционными ремёслами и попробуете
                национальную кухню.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что вас ждёт в Дудутках:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Традиционные ремёсла</span>
                    <p className="text-gray-600 text-sm">Гончарная, кузнечная, ткацкая мастерские</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <TreePine className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Природа и животные</span>
                    <p className="text-gray-600 text-sm">Контактный зоопарк, конные прогулки</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Utensils className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Дегустация</span>
                    <p className="text-gray-600 text-sm">Самогон, мёд, домашний хлеб и сыр</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Music className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Фольклорная программа</span>
                    <p className="text-gray-600 text-sm">Народные песни и танцы (по сезону)</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что включено в экскурсию:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Трансфер в комфортном автомобиле</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Экскурсовод-этнограф</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Входные билеты в музей</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Дегустация национальных продуктов</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Мастер-класс по ремеслу (на выбор)</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🏡 Особенности музея</h4>
                <p className="text-gray-600">
                  "Дудутки" - это единственнй в Беларуси музей, где все экспонаты находятся в рабочем состоянии. Здесь
                  можно не только посмотреть, но и поучаствовать в традиционных ремёслах.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service1}
                alt="Музей народных ремёсел Дудутки"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Длительность</h4>
                  <p className="text-sm text-gray-600">6-8 часов</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Группа</h4>
                  <p className="text-sm text-gray-600">1-7 человек</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Расстояние</h4>
                  <p className="text-sm text-gray-600">40 км от Минска</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Camera className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Активности</h4>
                  <p className="text-sm text-gray-600">Интерактивные</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость экскурсии:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1-2 человека:</span>
                    <span className="font-semibold">160 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-4 человека:</span>
                    <span className="font-semibold">200 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">5-7 человек:</span>
                    <span className="font-semibold">280 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    * В стоимость включены: транспорт, гид, билеты, дегустация, мастер-класс
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">🎨 Мастер-классы</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Гончарное дело - лепка из глины</li>
                  <li>• Ткачество - работа на старинном станке</li>
                  <li>• Хлебопечение - выпечка в русской печи</li>
                  <li>• Кузнечное дело - ковка подковы</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
