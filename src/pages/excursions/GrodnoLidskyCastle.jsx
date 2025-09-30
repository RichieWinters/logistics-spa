import { ExcursionTemplate } from "./components/ExcursionTemplate";
import { RUB_RATE, USD_RATE } from "@/constants";
import image1 from "@/../public/lidskiy-castle/1.jpg";
import image2 from "@/../public/lidskiy-castle/2.jpg";
import image3 from "@/../public/lidskiy-castle/3.jpg";
import image4 from "@/../public/lidskiy-castle/4.jpg";
import image5 from "@/../public/lidskiy-castle/5.jpg";
import image6 from "@/../public/lidskiy-castle/6.jpg";
import image7 from "@/../public/lidskiy-castle/7.jpg";
import image8 from "@/../public/lidskiy-castle/8.webp";
import image9 from "@/../public/lidskiy-castle/9.jpg";
import image10 from "@/../public/lidskiy-castle/10.jpg";

const WithoutGuidePrice = 530;
const WithGuidePrice = 650;

export const GrodnoLidskyCastlePage = () => {
  return (
    <ExcursionTemplate
      title={"Гродно + Лидский замок"}
      description={
        "Гродно - это город с богатой историей, известный своей архитектурой и культурным наследием. Лидский замок - одна из главных исторических достопримечательностей региона. Здесь можно узнать о средневековой истории Беларуси, а также насладиться красивыми видами на окрестности. Экскурсия включает посещение Лидского замка, прогулку по историческому центру Гродно и знакомство с местной культурой и традициями."
      }
      images={[image10, image1, image2, image9, image3, image4, image5, image6, image8, image7]}
      time={"3 ч от Минска"}
      distance={"277 км в одну сторону от Минска"}
      location={
        <>
          <a
            href="https://www.google.com/maps/place/%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.6841978,23.6860437,11z/data=!4m2!3m1!1s0x46dfd64beac55d1d:0xf013fd26569718c0?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Гродно, Гродненская область
          </a>
        </>
      }
      price={
        <>
          <div>
            {WithoutGuidePrice} BYN / 14600 RUB / {(WithoutGuidePrice * USD_RATE).toFixed(0)} USD без гида
          </div>
          <div>{WithGuidePrice} BYN / 17900 RUB / 220 USD + гид</div>
        </>
      }
      isFullPrice={true}
    />
  );
};
