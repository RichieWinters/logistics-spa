import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Users, Camera, CheckCircle, Heart, Flame, Book } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Service2 from "@/assets/images/Service2.jpg";

export const KhatynCityTourPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Service2})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Экскурсия в Хатынь</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Мемориал памяти и скорби. Дань уважения героям и жертвам войны
                </p>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Мемориальный комплекс "Хатынь"</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Посетите один из самых значимых мемориальных комплексов Беларуси, посвящённый памяти мирных жителей,
                погибших в годы Великой Отечественной войны. Хатынь стала символом трагедии белорусского народа и силы
                человеческого духа.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Программа экскурсии:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Мемориальный комплекс</span>
                    <p className="text-gray-600 text-sm">Осмотр основных памятников и скульптур</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Flame className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Вечный огонь</span>
                    <p className="text-gray-600 text-sm">Возложение цветов к мемориалу памяти</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Book className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Музейная экспозиция</span>
                    <p className="text-gray-600 text-sm">История трагедии и документальные свидетельства</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">"Кладбище деревень"</span>
                    <p className="text-gray-600 text-sm">Памятник 185 уничтоженным деревням</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что включено в экскурсию:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Трансфер на комфортном автомобиле</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Экскурсовод с историческим образованием</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Входные билеты в музей</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Минута молчания у мемориала</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Свечи памяти в подарок</span>
                </li>
              </ul>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📖 Историческая справка</h4>
                <p className="text-gray-600">
                  22 марта 1943 года деревня Хатынь была полностью уничтожена карательным отрядом. 149 жителей, включая
                  75 детей, погибли в этой трагедии. Мемориал был открыт в 1969 году.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service2}
                alt="Мемориальный комплекс Хатынь"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Длительность</h4>
                  <p className="text-sm text-gray-600">4-5 часов</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Группа</h4>
                  <p className="text-sm text-gray-600">1-7 человек</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Возраст</h4>
                  <p className="text-sm text-gray-600">12+ лет</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Camera className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Фото</h4>
                  <p className="text-sm text-gray-600">С уважением</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость экскурсии:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1-2 человека:</span>
                    <span className="font-semibold">120 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-4 человека:</span>
                    <span className="font-semibold">150 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">5-7 человек:</span>
                    <span className="font-semibold">200 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    * В стоимость включены: транспорт, гид, входные билеты
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">⚠️ Важная информация</h5>
                <p className="text-sm text-gray-600">
                  Экскурсия носит мемориальный характер. Просим соблюдать тишину и уважение во время посещения
                  мемориального комплекса.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Отдать дань памяти героям</h3>
              <p className="text-gray-600">Забронируйте экскурсию в Хатынь - важное историческое путешествие</p>
            </div>
            <ContactForm
              title="Заказать экскурсию в Хатынь"
              description="Прикоснитесь к истории и почтите память погибших"
            />
          </div>
        </div>
      </div>
    </>
  );
};
