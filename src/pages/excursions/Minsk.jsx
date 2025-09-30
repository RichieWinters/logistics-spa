import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/minsk/1.jpg";
import image2 from "@/../public/minsk/2.jpg";
import image3 from "@/../public/minsk/3.jpg";
import image4 from "@/../public/minsk/4.jpg";
import image5 from "@/../public/minsk/5.jpg";
import image6 from "@/../public/minsk/6.jpg";
import image7 from "@/../public/minsk/7.png";
import { CheckCircle } from "lucide-react";

export const MinskPage = () => {
  return (
    <ExcursionTemplate
      title={"Минск"}
      description={
        <p>
          Экскурсия по Минску – это уникальная возможность узнать больше о столице Беларуси, ее истории и культуре. Вы
          сможете увидеть такие достопримечательности, как площадь Независимости, Национальную библиотеку, а также
          множество музеев и галерей. Экскурсия включает в себя посещение исторического центра города, где вы сможете
          насладиться архитектурой и атмосферой Минска. Вы также узнаете о традициях и обычаях белорусов, а также о
          современных тенденциях в жизни города.
          <p className="pt-4">
            Что вас ожидает
            <ul className="pl-6 ">
              <li className="mb-2">
                -Исторический центр, он же Верхний город, где царит европейский дух. Вы узнаете, почему стоящую тут
                ратушу снесли в 19 веке и заново отстроили в 2003 году.
              </li>
              <li className="mb-2">
                -Троицкое предместье — здесь в Средние века был город с торговой площадью. Мы расскажем, почему раньше
                жители получали письма, где в адресе указан не номер дома, а его цвет.
              </li>
              <li className="mb-2">
                -Остров Мужества и Скорби — искусственный остров на реке Свислочь с мемориалом в память о погибших в
                Афганской войне Проспект Независимости, где расположились архитектурные шедевры, определяющие лицо
                города.
              </li>
              <li className="mb-2">
                -Национальная академия наук, - Дом офицеров — памятники конструктивизма 1930-х годов.
              </li>
              <li className="mb-2">-Национальная библиотека — современное здание, напоминающее блестящий алмаз.</li>
              <li className="mb-2">
                -Ворота Минска — две башни в стиле сталинского ампира. Мы расскажем, как на одной из них появились
                немецкие часы.
              </li>
              <li className="mb-2">
                -Площадь Независимости — главная площадь республики, где находятся административные здания, университеты
                и Красный костёл. Вы узнаете, что находится под площадью.
              </li>
              <li className="mb-2">
                -Большой театр оперы и балета. После войны разбомбленное и разграбленное здание отреставрировали, вокруг
                разбили парк, а на сцене снова стали давать представления.
              </li>
              <li className="mb-2">
                -Музей истории Великой Отечественной войны. Он располагается в здании в стиле хай-тек, а внутри собрана
                самая большая в Беларуси коллекция свидетельств о войне.
              </li>
            </ul>
          </p>
        </p>
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      customDetails={
        <ul className="space-y-4 mb-8">
          <li className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div>
              <span className="text-gray-800 font-semibold">Время экскурсии</span>
              <p className="text-gray-600 text-sm">3 ч</p>
            </div>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div>
              <span className="text-gray-800 font-semibold">Местоположение</span>
              <p className="text-gray-600 text-sm">
                <a
                  href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.90454,27.55924,12z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfb5c5c5c5c5:0x5c5c5c5c5c5c5c5c!8m2!3d53.90454!4d27.55924!16s%2Fg%2F1hm4w19m2?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                  className="text-blue-500 underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Минск, Минская область, Беларусь
                </a>
              </p>
            </div>
          </li>
        </ul>
      }
      price={<>300 BYN / 8500 RUB / 100 USD</>}
      customPriceCondition={<span>* В стоимость включены транспорт, гид.</span>}
    />
  );
};
