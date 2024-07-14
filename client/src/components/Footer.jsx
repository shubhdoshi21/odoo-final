import React from 'react'
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs"; // Assuming this is where your CSS module is located
import style from "../module/footer.module.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${style.bgfooter}`}>
      {/* Logo and social links section */}
      <div className={`${style.sec1} `}>
        <div>
          Elite Reads
        </div>
      </div>
      <div className={`${style.divider}`}></div>
      {/* Links section */}
      <div className={`${style.sec2}`}>
        <ul className={`${style.company}`}>
          <li><Link to="/aboutus">About Us</Link></li>
          <li>Home</li>
          <li>My history</li>
          <li>FAQs</li>
          <li>Books</li>
        </ul>
      </div>
      <div className={`${style.divider}`}></div>
      {/* Social media links section */}
      <div className={`${style.sec3}`}>
        <span className={`${style.follow}`}>FOLLOW US AT:</span>
        <div className={`${style.sociality}`}>
          <span className={style.icons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram color="white" fontSize={25} className={style.ico} />
            </a>
          </span>
          <span className={style.icons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter color="white" fontSize={27} className={style.ico} />
            </a>
          </span>
          <span className={style.icons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsYoutube color="white" size={26} className={style.ico} />
            </a>
          </span>
          <span className={style.icons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn color="white" size={26} className={style.ico} />
            </a>
          </span>
          <span className={style.icons}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF color="white" size={26} className={style.ico} />
            </a>
          </span>
        </div>
      </div>
      <div className={`${style.divider}`}></div>
      {/* Copyright section */}
      <div className={`${style.sec4} `}>
        © Elite Reads Ltd. {currentYear}, All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
