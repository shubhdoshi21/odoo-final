import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../module/mybooks.module.css";

const Mybooks = () => {
  const [bookHistory, setBookHistory] = useState([]);

  useEffect(() => {
    const fetchBookHistory = async () => {
      try {
        const response = await axios.get("/users/api/v1/getHistory", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (response.data.success) {
          setBookHistory(response.data.data);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching book history:", error);
      }
    };

    fetchBookHistory();
  }, []);

  return (
    <div className={style.body}>
      <div className={style.listContainer}>
        {bookHistory.map((item, index) => (
          <div key={index} className={style.element}>
            <div className={style.set}>
              <img src={item.thumbnail} className={style.imgs} alt="PDF Icon" />
              <div className={style.texts}>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mybooks;
