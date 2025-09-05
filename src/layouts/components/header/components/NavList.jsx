import NavItem from "@/layouts/components/header/components/NavItem";
import React from "react";

const NavList = ({ items, isActive }) => {
  return (
    <>
      {items.map((item) => (
        <NavItem key={item.path} isActive={isActive} item={item} />
      ))}
    </>
  );
};

export default NavList;
