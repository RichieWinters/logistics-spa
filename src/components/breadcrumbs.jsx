import { cn } from "@/lib/utils";
import { PAGES } from "@/routes/pageNames";
import { Link, useLocation } from "react-router-dom";

function findPageName(pageObj, value) {
  if (typeof pageObj !== "object") return "";

  for (const key in pageObj) {
    if (pageObj[key] === value) {
      return pageObj.title;
    } else if (typeof pageObj[key] === "object") {
      const result = findPageName(pageObj[key], value);
      if (result !== "") {
        return result;
      }
    }
  }
  return "";
}

export const Breadcrumbs = ({ className = "" }) => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return {
        name: findPageName(PAGES, currentLink),
        path: currentLink,
      };
    });

  return (
    <nav className={cn("text-white text-xl", className)}>
      <Link to="/">Главная</Link>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <span> | </span>
          <Link to={crumb.path}>{crumb.name}</Link>
        </span>
      ))}
    </nav>
  );
};
