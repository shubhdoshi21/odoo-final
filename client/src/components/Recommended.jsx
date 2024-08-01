import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../module/recommanded.module.css";

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/books/api/v1/getLatests");
        console.log(response.data);
        setBooks(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div>
        <h2
          className={`${style.h2} ${style.sectionTitle} ${style.hasUnderline}`}
          id="section-title1"
        >
          New Arrivals Books
          <span className={style.span} />
        </h2>
        <div className={style.galleryConatiner}>
          {books && books.map((book, index) => (
            <div key={index}>
              <div className={style.row}>
                <div
                  className={style.booki}
                  style={{ "--book-image": `url(${book.imgs})` }}
                >
                  <img
                    src={book.thumbnail}
                    alt={`Book ${index + 1}`}
                    className={style.bookiImg}
                  />
                  <div className={style.content}>
                    <p>{book.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
