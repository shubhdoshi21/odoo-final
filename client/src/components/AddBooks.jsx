import React, { useRef, useState } from "react";
import styles from "../module/addbooks.module.css";
import { IoChevronBackCircle } from "react-icons/io5";
import axios from "axios";
import Loader from "./Loader";

const AddBooks = ({ setShowNewComponent }) => {
  const [loading, setLoading] = useState(false);
  const isbnRef = useRef("");
  const genreRef = useRef("current");
  const quantityRef = useRef("");

  const handleBlankCardClick = () => {
    setShowNewComponent((showNewComponent) => !showNewComponent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const ISBN = isbnRef.current.value;
    const genre = genreRef.current.value;
    const quantity = quantityRef.current.value;

    axios
      .post(
        `/books/api/v1/addBook`,
        { ISBN, genre, quantity },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.backButton} onClick={handleBlankCardClick}>
        <IoChevronBackCircle />
      </button>
      <form
        id="contact-form"
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <label className={styles.label}>ISBN</label>
          <input
            type="text"
            className={styles.formControl}
            id="ISBN"
            placeholder="ISBN"
            name="ISBN"
            ref={isbnRef}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Genre</label>
          <select className={styles.formControl} ref={genreRef} required>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Young-Adult">Young-Adult</option>
            <option value="Children-Books">Children-Books</option>
            <option value="Graphic-Novels">Graphic-Novels</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Quantity</label>
          <input
            type="text"
            className={styles.formControl}
            id="quantity"
            placeholder="QUANTITY"
            name="quantity"
            ref={quantityRef}
          />
        </div>
        <div
          className={styles.sendButton}
          id="submit"
          type="submit"
          value="SAVE"
        >
          <button>SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
