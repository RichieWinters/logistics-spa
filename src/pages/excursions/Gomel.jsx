import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/rumyantsevs-and-paskeviches/1.jpg";
import image2 from "@/../public/rumyantsevs-and-paskeviches/2.jpg";
import image3 from "@/../public/rumyantsevs-and-paskeviches/3.webp";
import image4 from "@/../public/rumyantsevs-and-paskeviches/4.jpg";
import image5 from "@/../public/rumyantsevs-and-paskeviches/5.jpg";
import image6 from "@/../public/rumyantsevs-and-paskeviches/6.jpg";
import image7 from "@/../public/rumyantsevs-and-paskeviches/7.jpg";

export const GomelPage = () => {
  return (
    <ExcursionTemplate
      title={"Гомель"}
      description={
        "Гомель — это город с богатой историей и культурным наследием. Здесь можно посетить множество музеев, театров и исторических памятников, а также насладиться живописными видами на реки и парки. Экскурсия включает посещение основных достопримечательностей города, таких как Софийский собор, Дом-музей Марка Шагала и другие интересные места. Это отличная возможность познакомиться с историей и культурой Беларуси. Дворец Румянцевых и Паскевичей — памятник архитектуры XVIII—XIX веков, главная достопримечательность города Гомеля, композиционный центр Гомельского дворцово-паркового ансамбля, включающего, помимо дворца, городской парк, Петропавловский собор, часовню-усыпальницу и др."
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"3 ч 35 мин от Минска"}
      distance={"316 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C,+%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@52.4251088,30.7861018,11z/data=!3m1!4b1!4m6!3m5!1s0x46d4699b50faf1a5:0x5ecca30fd2361396!8m2!3d52.4313388!4d30.99367!16zL20vMDE1OWR6?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Гомель, Гомельская область, Беларусь
        </a>
      }
      price={<>690 BYN / 19000 RUB / 230 USD</>}
      customPriceCondition={<span>* Гид оплачивается отдельно, по запросу</span>}
    />
  );
};
