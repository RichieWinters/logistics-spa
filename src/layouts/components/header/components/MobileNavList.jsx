import MobileNavItem from "@/layouts/components/header/components/MobileNavItem";

const MobileNavList = ({ items, isActive, toggleDropdown, activeDropdown, setActiveDropdown, setIsMenuOpen }) => {
  return (
    <>
      {items.map((item) => (
        <MobileNavItem
          key={item.path}
          item={item}
          isActive={isActive}
          toggleDropdown={toggleDropdown}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}
    </>
  );
};

export default MobileNavList;
