import React, { useState, useEffect, useRef } from "react";
import style from "../module/topbar.module.css";
import images from "../assets";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import Profile from "./Profile";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/logo-pink.png"

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(null);
  const menuToggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    axios
      .get("/users/api/v1/getUser", { withCredentials: true })
      .then((response) => {
        if (response.data.status === 200) {
          setIsLoggedIn(true);
          setIsProfile(response.data.data.profilePicture);
        }
        // console.log(response);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        toast.error("Failed to fetch user details");
      });
  }, []);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const nav = navRef.current;

    if (menuToggle && nav) {
      const toggleNav = () => {
        nav.classList.toggle(style.active);
        setIsOpen((prevIsOpen) => !prevIsOpen);
      };

      menuToggle.addEventListener("click", toggleNav);
      return () => {
        menuToggle.removeEventListener("click", toggleNav);
      };
    }
  }, []);

  const closeNav = () => {
    if (navRef.current.classList.contains(style.active)) {
      navRef.current.classList.remove(style.active);
      setIsOpen(false);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "light") setLightMode();
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const navItems = [
     { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/history", label: "My history" },
    { path: "/faqs", label: "FAQs" },
    {path: "/aboutus", label: "About Us"}
  ];

  const resourcesItems = [
    { path: "/resources/link", label: "Links" },
    { path: "/resources/pdf", label: "PDFs" },
  ];

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === style.modalOverlay) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className={`${style.topbarContainer} ${
        window.innerWidth <= 1024 && isOpen ? style.bg : ""
      }`}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className={style.webLogo} />
      </Link>
      {location.pathname !== "/auth/login" &&
        location.pathname !== "/admin/books" &&
        location.pathname !== "/admin/librarian" &&
        location.pathname !== "/auth/register" && <Navbar />}
      {window.innerWidth > 1024 ? (
        <div className={style.rightComponent}>
          <label className={style.uiswitch}>
            <input
              type="checkbox"
              defaultChecked={selectedTheme === "dark"}
              onChange={toggleTheme}
            />
            <div className={style.slider}>
              <div className={style.circle}></div>
            </div>
          </label>

          {isLoggedIn ? (
            <div onClick={handleProfileClick}>
              {!isProfile ? (
                <FaCircleUser className={style.profile} />
              ) : (
                <img src={isProfile} className={style.profile}></img>
              )}
            </div>
          ) : (
            <Link to="/auth/login">
              <MdLogin className={style.profile} />
            </Link>
          )}
        </div>
      ) : (
        <div className={style.rightComponent}>
          <label className={style.uiswitch}>
            <input
              type="checkbox"
              defaultChecked={selectedTheme === "dark"}
              onChange={toggleTheme}
            />
            <div className={style.slider}>
              <div className={style.circle}></div>
            </div>
          </label>

          <div className={style.outer}>
            <nav ref={navRef}>
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.path}
                    onClick={closeNav}
                    className={
                      location.pathname === item.path ? style.activeNavItem : ""
                    }
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <div className={style.tab}>
                    <input
                      type="checkbox"
                      name="accordion"
                      id="chck1"
                      className={style.accordianInput}
                    />
                    
                    <div className={style.tabContent}>
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeNav}
                          className={
                            location.pathname === item.path
                              ? style.activeNavItem
                              : ""
                          }
                        >
                          <p>{item.label}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li onClick={closeNav}>
                  {isLoggedIn ? (
                    <Link onClick={handleProfileClick}>Profile</Link>
                  ) : (
                    <Link to="/auth/login">Login</Link>
                  )}
                </li>
              </ul>
            </nav>
            <div ref={menuToggleRef} className={style.menuToggle}>
              {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={style.modalOverlay} onClick={handleOutsideClick}>
          <div className={style.modalContainer}>
            <Profile onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;