import React, { useState, useEffect } from "react";
import style from "../module/librarian.module.css";
import { FaMinus } from "react-icons/fa";
import axios from "axios";

const Librarian = () => {
  const [librarians, setLibrarians] = useState([]);

  useEffect(() => {
    fetchLibrarians();
  }, []);

  const fetchLibrarians = async () => {
    try {
      const response = await axios.get("/users/api/v1/getLibrarians");
      setLibrarians(response.data.data);
    } catch (error) {
      console.error("Error fetching librarians:", error);
    }
  };

  return (
    <div className={style.body}>
      <div className={style.parent}>
        {librarians.map((librarian, index) => (
          <div key={index} className={style.element}>
            <h3>
              {librarian.name} ({librarian.email}){" "}
              <FaMinus className={style.icon} />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Librarian;
