import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/minsk/1.jpg";
import image2 from "@/../public/minsk/2.jpg";
import image3 from "@/../public/minsk/3.jpg";
import image4 from "@/../public/minsk/4.jpg";
import image5 from "@/../public/minsk/5.jpg";
import image6 from "@/../public/minsk/6.jpg";
import image7 from "@/../public/minsk/7.png";

export const MinskPage = () => {
  return (
    <ExcursionTemplate
      title={"Минск"}
      description={
        "Экскурсия по Минску – это уникальная возможность узнать больше о столице Беларуси, ее истории и культуре. Вы сможете увидеть такие достопримечательности, как площадь Независимости, Национальную библиотеку, а также множество музеев и галерей. Экскурсия включает в себя посещение исторического центра города, где вы сможете насладиться архитектурой и атмосферой Минска. Вы также узнаете о традициях и обычаях белорусов, а также о современных тенденциях в жизни города."
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"в Минске"}
      distance={"по Минску"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.90454,27.55924,12z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfb5c5c5c5c5:0x5c5c5c5c5c5c5c5c!8m2!3d53.90454!4d27.55924!16s%2Fg%2F1hm4w19m2?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Минск, Минская область, Беларусь
        </a>
      }
      price={300}
    />
  );
};
