import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image5 from "@/../public/mir-nesvizh/5.jpg";
import image6 from "@/../public/mir-nesvizh/6.jpg";
import image7 from "@/../public/mir-nesvizh/7.jpeg";
import image8 from "@/../public/mir-nesvizh/8.jpg";
import image9 from "@/../public/mir-nesvizh/9.png";
import image1 from "@/../public/sula/1.jpeg";
import image2 from "@/../public/sula/2.webp";
import image3 from "@/../public/sula/3.jpg";
import image4 from "@/../public/sula/4.jpg";
import MirCastle from "@/../public/mir-nesvizh/1.jpg";
import MirCastle2 from "@/../public/mir-nesvizh/2.jpg";
import NesvizhCastle from "@/../public/mir-nesvizh/3.jpeg";
import NesvizhCastle2 from "@/../public/mir-nesvizh/4.jpg";
import { CheckCircle } from "lucide-react";

export const MirNesvizhSulaPage = () => {
  return (
    <ExcursionTemplate
      title={'Замковый комплекс "Мир" и "Несвиж" + Сула'}
      description={
        'Замковый комплекс "Мир" и "Несвиж" – это два выдающихся памятника архитектуры, которые находятся в Беларуси. Замок в Мире, построенный в XV веке, является ярким примером белорусского ренессанса и включен в список Всемирного наследия ЮНЕСКО. Несвижский замок, в свою очередь, был резиденцией князей Радзивиллов и также славится своей архитектурной красотой и историческим значением. Сула — это живописное место, известное своими природными красотами и историческими памятниками. Здесь можно насладиться прогулками по берегам реки, посетить старинные усадьбы и просто отдохнуть на природе.'
      }
      images={[
        MirCastle,
        MirCastle2,
        NesvizhCastle,
        NesvizhCastle2,
        image5,
        image6,
        image7,
        image8,
        image9,
        image1,
        image2,
        image3,
        image4,
      ]}
      time={"1 ч 20 мин от Минска"}
      distance={"100 км в одну сторону от Минска"}
      customDetails={
        <>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div>
                <span className="text-gray-800 font-semibold">Примерный тайминг</span>
                <ul className="list-disc ml-5 text-gray-600 text-sm mt-1">
                  <li>Время в пути от Минска до Сулы — 1 ч.</li>
                  <li>Время в парке «Сула» — 2–3 ч.</li>
                  <li>Дорога от парка «Сула» до Мирского замка — 40 мин.</li>
                  <li>Время в Мирском замке — 2 ч.</li>
                  <li>Дорога от Мира до Несвижа — 30 мин.</li>
                  <li>Время в Несвиже — 2 ч.</li>
                  <li>Обратный путь — около 1,5 ч.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div>
                <span className="text-gray-800 font-semibold">Дополнительные расходы</span>
                <ul className="list-disc ml-5 text-gray-600 text-sm mt-1">
                  <li>Входные билеты в Мирский замок: 20 BYN — взрослый, 10 BYN — детский</li>
                  <li>Входные билеты в Несвижский замок: 18 BYN — взрослый, 9 BYN — детский</li>
                  <li>Входные билеты в парк истории «Сула»: 40 BYN — взрослый, 15 BYN — детский</li>
                  <li>Обед — по меню</li>
                  <li>Услуги гидов в замках и парке — по желанию и по прейскуранту</li>
                </ul>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div>
                <span className="text-gray-800 font-semibold">Местоположение</span>
                <p className="text-gray-600 text-sm">
                  {" "}
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
                    <a
                      href="https://www.google.com/maps/place/%D0%A1%D1%83%D0%BB%D0%B0,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.7428221,26.8698631,16z/data=!3m1!4b1!4m6!3m5!1s0x46d95c72c3e2cef7:0xc5a9413d3dc61cc0!8m2!3d53.742133!4d26.8738272!16s%2Fg%2F11cjh__kj_?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                      className="text-blue-500 underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Сула, Минская область, Беларусь
                    </a>
                  </div>
                </p>
              </div>
            </li>
          </ul>
        </>
      }
      price={<>435 BYN / 12000 RUB / 140 USD</>}
    />
  );
};
