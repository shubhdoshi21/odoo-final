import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "../module/navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const [activeMainIndex, setActiveMainIndex] = useState(null);
  const [activeResourceIndex, setActiveResourceIndex] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const navItems = [
    { path: "/events", label: "Events" },
    { path: "/about", label: "About" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const resourcesItems = [
    { path: "/resources/link", label: "Links" },
    { path: "/resources/pdf", label: "PDFs" },
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
      <div className={style.tab}>
        <input
          type="checkbox"
          name="acc"
          id="chck"
          className={style.accordianInput}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className={style.tabLabel} htmlFor="chck">
          Resources
        </label>
        <div className={style.tabContent}>
          <ul className={style.navlinks}>
            {resourcesItems.map((item, index) => (
              <NavLink key={index} to={item.path}>
                <li
                  className={`${style.element} ${
                    activeResourceIndex === index ? style.active : ""
                  }`}
                  onClick={() => setActiveResourceIndex(index)}
                >
                  {item.label}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
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
