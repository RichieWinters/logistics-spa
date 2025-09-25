import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/baranovichi-zoo/1.jpeg";
import image2 from "@/../public/baranovichi-zoo/2.webp";
import image3 from "@/../public/baranovichi-zoo/3.jpg";
import image4 from "@/../public/baranovichi-zoo/4.webp";
import image5 from "@/../public/baranovichi-zoo/5.webp";
import image6 from "@/../public/baranovichi-zoo/6.webp";
import image7 from "@/../public/baranovichi-zoo/7.jpg";

export const BaranovichiPage = () => {
  return (
    <ExcursionTemplate
      title={"Барановичи"}
      description={
        "Барановичи — это город с богатой историей и культурным наследием. Здесь можно посетить множество музеев, театров и исторических памятников, а также насладиться живописными видами на реки и парки. Экскурсия включает посещение основных достопримечательностей города, таких как Софийский собор, Дом-музей Марка Шагала и другие интересные места. Это отличная возможность познакомиться с историей и культурой Беларуси. "
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"1 ч 41 мин от Минска"}
      distance={"146 км в одну сторону от Минска"}
      location={
        <>
          <a
            href="https://www.google.com/maps/place/%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%B8,+%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.127228,25.9195108,12z/data=!3m1!4b1!4m6!3m5!1s0x46d8cfe9b9e4eda3:0xc8878cbb5b9a36e8!8m2!3d53.132139!4d26.0166026!16zL20vMDRyM3d3?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            className="text-blue-500 underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Барановичи, Брестская область
          </a>
        </>
      }
      price={350}
    />
  );
};
