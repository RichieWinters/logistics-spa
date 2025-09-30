import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/dudutki/1.jpg";
import image2 from "@/../public/dudutki/2.jpeg";
import image3 from "@/../public/dudutki/3.jpg";
import image4 from "@/../public/dudutki/4.webp";
import image5 from "@/../public/dudutki/5.jpg";
import image6 from "@/../public/dudutki/6.jpg";
import image7 from "@/../public/dudutki/7.jpg";

export const DudutkiPage = () => {
  return (
    <ExcursionTemplate
      title={"Дудутки"}
      description={
        'Музей народной архитектуры и быта "Дудутки" – это уникальный комплекс, который позволяет погрузиться в атмосферу белорусской деревни XIX века. Здесь можно увидеть традиционные дома, мастерские и даже животных, характерных для того времени. Экскурсия включает в себя посещение различных экспозиций, где представлены ремесла, быт и культура белорусов. Это отличная возможность узнать больше о национальных традициях и истории Беларуси. Экскурсия также включает в себя дегустацию традиционных белорусских блюд, приготовленных по старинным рецептам. Посетители могут попробовать такие блюда, как драники, колдуны, квас и многое другое. В музее также проводятся мастер-классы по ремеслам, где можно научиться гончарному делу, ткачеству и другим традиционным ремеслам.'
      }
      images={[image1, image2, image3, image4, image5, image6, image7]}
      time={"45 мин от Минска"}
      distance={"45 км в одну сторону от Минска"}
      location={
        <a
          className="text-blue-500 underline font-bold"
          href="https://www.google.com/maps/place/%D0%94%D1%83%D0%B4%D1%83%D1%82%D0%BA%D0%B8/@53.5950804,26.3768367,8.22z/data=!4m6!3m5!1s0x46d986b66eaaaaab:0xcda7b9c05e8d26de!8m2!3d53.5962212!4d27.6832218!16s%2Fg%2F1hm4w19m2?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          д.Птичь, Птичь, Минская область, Беларусь
        </a>
      }
      price={<>150 BYN / 4200 RUB / 50 USD</>}
    />
  );
};
