import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/vitebsk/1.jpg";
import image2 from "@/../public/vitebsk/2.webp";
import image3 from "@/../public/vitebsk/3.webp";
import image4 from "@/../public/vitebsk/4.jpg";
import image5 from "@/../public/vitebsk/5.jpg";
import image6 from "@/../public/vitebsk/6.jpg";
import image7 from "@/../public/vitebsk/7.jpg";

export const VitebskPage = () => {
  return (
    <ExcursionTemplate
      title={"Витебск | экскурсия по достопримечательностям города"}
      description={
        "Витебск — это город с богатой историей и культурным наследием. Здесь можно посетить множество музеев, театров и исторических памятников, а также насладиться живописными видами на реки и парки. Экскурсия включает посещение основных достопримечательностей города, таких как Софийский собор, Дом-музей Марка Шагала и другие интересные места. Это отличная возможность познакомиться с историей и культурой Беларуси."
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"3 ч от Минска"}
      distance={"274 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA,+%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@55.1940486,30.1124936,12z/data=!3m1!4b1!4m6!3m5!1s0x46c573e3fc7c7be7:0x430637d0624afff4!8m2!3d55.1926809!4d30.206359!16zL20vMDE1OWc5?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Витебск, Витебская область, Беларусь
        </a>
      }
      price={<>600 BYN / 16800 RUB / 200 USD</>}
    />
  );
};
