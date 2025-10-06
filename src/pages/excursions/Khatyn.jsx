import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/khatyn/1.jpg";
import image2 from "@/../public/khatyn/2.jpg";
import image3 from "@/../public/khatyn/3.jpg";
import image4 from "@/../public/khatyn/4.jpg";
import image5 from "@/../public/khatyn/5.jpg";
import image6 from "@/../public/khatyn/6.jpg";
import image7 from "@/../public/khatyn/7.jpeg";
import image8 from "@/../public/khatyn/8.jpg";

export const KhatynCityTourPage = () => {
  return (
    <ExcursionTemplate
      title={'Мемориальный комплекс "Хатынь"'}
      description={
        'Мемориальный комплекс "Хатынь" – дань памяти всем погибшим во время Великой Отечественной войны и символ неутихающей скорби белорусского народа, трагическое напоминание об ужасах, которые творили нацисты на этой земле. Это один из самых впечатляющих мемориалов Второй мировой войны во всей Европе. Мемориал повторяет планировку погибшей деревни. В центре комплекса расположена 6-метровая бронзовая скульптура "Непокоренный". Образ мужчины с мертвым мальчиком на руках создан в память об Иосифе Каминском и его сыне Адаме. Черная плита-крыша отмечает место, где находился амбар, в котором сожгли жителей Хатыни. Рядом их братская могила, на которой расположен символический венок памяти со словами наказа мертвых к живым.'
      }
      images={[image1, image2, image8, image3, image4, image5, image6, image7]}
      time={"1 час от Минска"}
      distance={"65 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%9C%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%D0%A5%D0%B0%D1%82%D1%8B%D0%BD%D1%8C/@54.3346281,27.9411388,17z/data=!3m1!4b1!4m6!3m5!1s0x46dba793f64be029:0x877bc339de0bb4c2!8m2!3d54.334625!4d27.9437137!16s%2Fg%2F121k2nyw?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Минская область, Беларусь
        </a>
      }
      price={<>170 BYN / 4700 RUB / 55 USD</>}
    />
  );
};
