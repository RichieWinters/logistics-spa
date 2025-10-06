import { ExcursionTemplate } from "./components/ExcursionTemplate";
import { USD_RATE } from "@/constants";
import image1 from "@/../public/lidskiy-castle/1.jpg";
import image3 from "@/../public/lidskiy-castle/3.jpg";
import image4 from "@/../public/lidskiy-castle/4.jpg";
import image5 from "@/../public/lidskiy-castle/5.jpg";
import image7 from "@/../public/lidskiy-castle/7.jpg";
import image9 from "@/../public/lidskiy-castle/9.jpg";
import image10 from "@/../public/lidskiy-castle/10.jpg";
import image11 from "@/../public/lidskiy-castle/11.webp";
import image12 from "@/../public/lidskiy-castle/12.jpg";
import image13 from "@/../public/lidskiy-castle/13.jpg";

const WithoutGuidePrice = 530;
const WithGuidePrice = 650;

export const GrodnoLidskyCastlePage = () => {
  return (
    <ExcursionTemplate
      title={"Гродно + Лидский замок"}
      description={
        "Гродно - это город с богатой историей, известный своей архитектурой и культурным наследием. Лидский замок - одна из главных исторических достопримечательностей региона. Здесь можно узнать о средневековой истории Беларуси, а также насладиться красивыми видами на окрестности. Экскурсия включает посещение Лидского замка, прогулку по историческому центру Гродно и знакомство с местной культурой и традициями."
      }
      images={[image12, image13, image10, image9, image1, image3, image4, image5, image7, image11]}
      time={"3 ч от Минска"}
      distance={"277 км в одну сторону от Минска"}
      location={
        <div className="flex flex-col gap-2">
          <a
            href="https://www.google.com/maps/place/%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.6841978,23.6860437,11z/data=!4m2!3m1!1s0x46dfd64beac55d1d:0xf013fd26569718c0?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Гродно, Гродненская область
          </a>
          <a
            href="https://www.google.com/maps/place/%D0%9B%D0%B8%D0%B4%D0%B0,+%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@53.9028788,25.2098069,12z/data=!3m1!4b1!4m6!3m5!1s0x46de8af09a06f69b:0xbf80c771f0767f03!8m2!3d53.8904386!4d25.3028153!16zL20vMDRubXZj?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Лида, Гродненская область
          </a>
        </div>
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
