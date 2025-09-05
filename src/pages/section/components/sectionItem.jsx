import { Link } from "react-router-dom";

export const SectionItem = ({ title, path, image, imageAlt }) => {
  return (
    <div>
      <img src={image} alt={imageAlt} className="w-[70vw] md:w-[30vw]" />
      <div className="p-5 bg-white">
        <Link to={path} className="pt-0 pl-0">
          <span className="text-xl font-bold hover:text-yellow-400 transition-all duration-300 ease-in-out">
            {title}
          </span>
        </Link>
      </div>
    </div>
  );
};
