import { ExcursionTemplate, RUB_RATE, USD_RATE } from "./components/ExcursionTemplate";
import image1 from "@/../public/sula/1.jpeg";
import image2 from "@/../public/sula/2.webp";
import image3 from "@/../public/sula/3.jpg";
import image4 from "@/../public/sula/4.jpg";
import image5 from "@/../public/sula/5.jpg";
import image6 from "@/../public/sula/6.webp";
import image7 from "@/../public/sula/7.jpg";
import image8 from "@/../public/sula/8.jpg";
import image9 from "@/../public/sula/9.jpeg";

const WithoutGuidePrice = 600;
const WithGuidePrice = 750;

export const BrestAndBelovezhskayaPushchaPage = () => {
  return (
    <ExcursionTemplate
      title={"Брест - Брестская крепость и Беловежская Пуща"}
      description={
        "Брест - это город с богатой историей, известный своей крепостью и близостью к Беловежской Пущи. Здесь можно узнать о военной истории Беларуси, а также насладиться уникальной природой заповедника."
      }
      images={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
      time={"3ч 47 мин от Минска"}
      distance={"344 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%91%D1%80%D0%B5%D1%81%D1%82,+%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@52.0877991,23.3910678,11z/data=!3m1!4b1!4m6!3m5!1s0x47210c0223630975:0x4d319ea41f64ae99!8m2!3d52.0996507!4d23.7636662!16zL20vMDE1anNt?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Брест, Брестская область, Беларусь
        </a>
      }
      price={
        <>
          <div>
            {WithoutGuidePrice} BYN / {(WithoutGuidePrice * RUB_RATE).toFixed(0)} RUB /{" "}
            {(WithoutGuidePrice * USD_RATE).toFixed(0)} USD без гида
          </div>
          <div>
            {WithGuidePrice} BYN / {(WithGuidePrice * RUB_RATE).toFixed(0)} RUB /{" "}
            {(WithGuidePrice * USD_RATE).toFixed(0)} USD + гид
          </div>
        </>
      }
    />
  );
};
