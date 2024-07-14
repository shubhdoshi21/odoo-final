import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "../module/navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const [activeMainIndex, setActiveMainIndex] = useState(null);
  const [activeResourceIndex, setActiveResourceIndex] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/history", label: "My history" },
    { path: "/faqs", label: "FAQs" },
    {path: "/aboutus", label: "About Us"}
  ];

  const resourcesItems = [
    { path: "/resources/link", label: "My books" },
    { path: "/resources/pdf", label: "Books" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const mainIndex = navItems.findIndex((item) => item.path === currentPath);
    const resourceIndex = resourcesItems.findIndex(
      (item) => item.path === currentPath
    );

    if (mainIndex !== -1) {
      setActiveMainIndex(mainIndex);
      setActiveResourceIndex(null);
    } else if (resourceIndex !== -1) {
      setActiveResourceIndex(resourceIndex);
      setActiveMainIndex(null);
      setIsChecked(true);
    } else {
      setActiveMainIndex(null);
      setActiveResourceIndex(null);
    }
  }, [location.pathname, navItems, resourcesItems]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={style.container}>
    
      <ul className={style.navlinks}>
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path}>
            <li
              className={`${style.element} ${
                activeMainIndex === index ? style.active : ""
              }`}
              onClick={() => setActiveMainIndex(index)}
            >
              {item.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;