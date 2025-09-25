import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/belaz/1.jpg";
import image2 from "@/../public/belaz/2.jpg";
import image3 from "@/../public/belaz/3.jpg";
import image4 from "@/../public/belaz/4.jpg";
import image5 from "@/../public/belaz/5.jpg";
import image6 from "@/../public/belaz/6.jpg";
import image7 from "@/../public/belaz/7.jpeg";

export const BelazPage = () => {
  return (
    <ExcursionTemplate
      title={"БелАЗ"}
      description={
        "Экскурсия на завод БелАЗ – это уникальная возможность увидеть процесс производства знаменитых белорусских карьерных самосвалов. Вы сможете узнать о истории компании, ее достижениях и технологиях, используемых в производстве. Экскурсия включает в себя посещение сборочного цеха, где вы сможете увидеть, как собираются гигантские машины, а также испытательный полигон, где проходят тестирование новые модели. Вы также узнаете о применении инновационных технологий и экологических стандартах, которые БелАЗ внедряет в свою работу. Это отличная возможность для всех, кто интересуется инженерией, машиностроением и промышленностью."
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"50 мин от Минска"}
      distance={"55 км от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%9E%D0%90%D0%9E+%22%D0%91%D0%95%D0%9B%D0%90%D0%97%22+-+%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%8E%D1%89%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D1%85%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD%D0%B3%D0%B0+%22%D0%91%D0%95%D0%9B%D0%90%D0%97-%D0%A5%D0%9E%D0%9B%D0%94%D0%98%D0%9D%D0%93%22/@53.8451929,26.8276571,7.58z/data=!4m10!1m2!2m1!1z0LHQtdC70LDQtw!3m6!1s0x46da504b73fe5827:0x1c1d010cc1d45cd4!8m2!3d54.1010124!4d28.3285245!15sCgrQsdC10LvQsNC3WgwiCtCx0LXQu9Cw0LeSAQtjYXJfZmFjdG9yeZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSdE9Ga3lTVU5uRUFFqgFNCgkvbS8wN3ZkczAQASoOIgrQsdC10LvQsNC3KA0yHhABIhpIwGhAXkjma3p7hPF-qS_VCfXesHuARLoJ3DIOEAIiCtCx0LXQu9Cw0LfgAQD6AQUIvQcQMg!16s%2Fg%2F1hc5t3r5m?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          улица 40 лет Октября 4, Жодино, Минская область, Беларусь
        </a>
      }
      price={180}
    />
  );
};
