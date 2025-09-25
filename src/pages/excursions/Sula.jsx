import { ExcursionTemplate } from "./components/ExcursionTemplate";
import image1 from "@/../public/sula/1.jpeg";
import image2 from "@/../public/sula/2.webp";
import image3 from "@/../public/sula/3.jpg";
import image4 from "@/../public/sula/4.jpg";
import image5 from "@/../public/sula/5.jpg";
import image6 from "@/../public/sula/6.webp";
import image7 from "@/../public/sula/7.jpg";
import image8 from "@/../public/sula/8.jpg";
import image9 from "@/../public/sula/9.jpeg";

export const SulaPage = () => {
  return (
    <ExcursionTemplate
      title={"Сула"}
      description={
        "Сула — это живописное место, известное своими природными красотами и историческими памятниками. Здесь можно насладиться прогулками по берегам реки, посетить старинные усадьбы и просто отдохнуть на природе."
      }
      images={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
      time={"1 ч от Минска"}
      distance={"65 км в одну сторону от Минска"}
      location={
        <a
          href="https://www.google.com/maps/place/%D0%A1%D1%83%D0%BB%D0%B0,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/@53.7428221,26.8698631,16z/data=!3m1!4b1!4m6!3m5!1s0x46d95c72c3e2cef7:0xc5a9413d3dc61cc0!8m2!3d53.742133!4d26.8738272!16s%2Fg%2F11cjh__kj_?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
          className="text-blue-500 underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Сула, Минская область, Беларусь
        </a>
      }
      price={435}
    />
  );
};
