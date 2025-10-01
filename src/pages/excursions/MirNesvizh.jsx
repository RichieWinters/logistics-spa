import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/mir-nesvizh/1.jpg";
import image2 from "@/../public/mir-nesvizh/2.jpg";
import image3 from "@/../public/mir-nesvizh/3.jpeg";
import image4 from "@/../public/mir-nesvizh/4.jpg";
import image5 from "@/../public/mir-nesvizh/5.jpg";
import image6 from "@/../public/mir-nesvizh/6.jpg";
import image7 from "@/../public/mir-nesvizh/7.jpeg";
import image8 from "@/../public/mir-nesvizh/8.jpg";
import image9 from "@/../public/mir-nesvizh/9.png";

export const MirNesvizhPage = () => {
  return (
    <ExcursionTemplate
      title={'Замковый комплекс "Мир" и "Несвиж"'}
      description={
        'Замковый комплекс "Мир" и "Несвиж" – это два выдающихся памятника архитектуры, которые находятся в Беларуси. Замок в Мире, построенный в XV веке, является ярким примером белорусского ренессанса и включен в список Всемирного наследия ЮНЕСКО. Несвижский замок, в свою очередь, был резиденцией князей Радзивиллов и также славится своей архитектурной красотой и историческим значением.'
      }
      images={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
      time={"1 ч 20 мин от Минска"}
      distance={"100 км в одну сторону от Минска"}
      location={
        <div className="flex flex-col">
          <a
            href="https://www.google.com/maps/place/%D0%9C%D0%B8%D1%80,+%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.4533152,26.4484453,14z/data=!3m1!4b1!4m6!3m5!1s0x46d93a53ae4f83ab:0xc784b620c1145804!8m2!3d53.4532454!4d26.4652001!16zL20vMDR4X3h3?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Мир, Гродненская область, Беларусь
          </a>
          <a
            href="https://www.google.com/maps/place/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96+%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA/@53.2226065,26.6898972,17z/data=!3m1!4b1!4m6!3m5!1s0x46d91c45814655ff:0x9487b0924f4efd93!8m2!3d53.2226033!4d26.6924721!16zL20vMDZ5bm50?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Несвиж, Минская область, Беларусь
          </a>
        </div>
      }
      afterDescription={
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что вас ожидает</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Мы встретим вас в Минске и отправимся в живописный город Несвиж на реке Уша. Вы самостоятельно прогуляетесь
            по городу и посетите Несвижский замок. Наш водитель подскажет, как заказать экскурсионное обслуживание у
            местных экскурсоводов и где можно пообедать. Затем вы отправитесь в посёлок Мир — и тоже совершите променад
            по городу и исследуете Мирский замок.
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Организационные детали</h4>
          <ul className="space-y-2 mb-6 list-disc ml-6">
            <li className="text-gray-700">
              Дорога от Минска до Несвижа занимает 1 час 40 минут. Дорога от Несвижа до Мира занимает 35 минут
            </li>
            <li className="text-gray-700">
              С вами будет профессиональный водитель. По запросу он подскажет, где находятся кассы, парки, кафе и пр.
            </li>
          </ul>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Расходы в Несвиже:</h4>
            <ul className="space-y-2 list-disc ml-6">
              <li className="text-gray-700">
                Входной билет в Несвижский замок:{" "}
                <span className="font-bold">17 белорусских руб./взрослый, 8,5 белорусских руб./детский</span>
              </li>
              <li className="text-gray-700">
                Экскурсионное обслуживание в Несвижском замке (по желанию) —{" "}
                <span className="font-bold">24 белорусских руб./чел.</span>
              </li>
              <li className="text-gray-700">
                Аудиогид (по желанию) — <span className="font-bold">4 белорусских руб./чел.</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Расходы в Мире:</h4>
            <ul className="space-y-2 list-disc ml-6">
              <li className="text-gray-700">
                Входной билет в Мирский замок:{" "}
                <span className="font-bold">18 белорусских руб./взрослый, 9 белорусских руб./детский</span>
              </li>
              <li className="text-gray-700">
                Экскурсионное обслуживание в Мирском замке (по желанию) —{" "}
                <span className="font-bold">24 белорусских руб./чел.</span>
              </li>
              <li className="text-gray-700">
                Аудиогид (по желанию) — <span className="font-bold">6 белорусских руб./чел.</span>
              </li>
            </ul>
          </div>
        </div>
      }
      price={<>370 BYN / 10200 RUB / 120 USD</>}
    />
  );
};
