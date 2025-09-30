import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image5 from "@/../public/mir-nesvizh/5.jpg";
import image6 from "@/../public/mir-nesvizh/6.jpg";
import image7 from "@/../public/mir-nesvizh/7.jpeg";
import image8 from "@/../public/mir-nesvizh/8.jpg";
import image9 from "@/../public/mir-nesvizh/9.png";
import image1 from "@/../public/sula/1.jpeg";
import image2 from "@/../public/sula/2.webp";
import image3 from "@/../public/sula/3.jpg";
import image4 from "@/../public/sula/4.jpg";

export const MirNesvizhSulaPage = () => {
  return (
    <ExcursionTemplate
      title={'Замковый комплекс "Мир" и "Несвиж" + Сула'}
      description={
        'Замковый комплекс "Мир" и "Несвиж" – это два выдающихся памятника архитектуры, которые находятся в Беларуси. Замок в Мире, построенный в XV веке, является ярким примером белорусского ренессанса и включен в список Всемирного наследия ЮНЕСКО. Несвижский замок, в свою очередь, был резиденцией князей Радзивиллов и также славится своей архитектурной красотой и историческим значением. Сула — это живописное место, известное своими природными красотами и историческими памятниками. Здесь можно насладиться прогулками по берегам реки, посетить старинные усадьбы и просто отдохнуть на природе.'
      }
      images={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
      time={"1 ч 20 мин от Минска"}
      distance={"100 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%9C%D0%B8%D1%80,+%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.4533152,26.4484453,14z/data=!3m1!4b1!4m6!3m5!1s0x46d93a53ae4f83ab:0xc784b620c1145804!8m2!3d53.4532454!4d26.4652001!16zL20vMDR4X3h3?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Мир, Гродненская область, Беларусь
        </a>
      }
      price={435}
    />
  );
};
