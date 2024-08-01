import React, { useRef, useState } from "react";
import styles from "../module/libadmin.module.css";
import { IoChevronBackCircle } from "react-icons/io5";
import axios from "axios";

const Libadmin = () => {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const isbnRef = useRef("");
  const dateRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    const isbn = isbnRef.current.value;
    const endDate = dateRef.current.value;

    const formData = {
      ISBN: isbn,
      endDate: endDate,
      email: email,
    };

    axios
      .post("/lending/api/v1/lendBook", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    console.log(formData);
  };

  return (
    <div className={styles.wrapper}>
      <form
        id="contact-form"
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <input
            type="email"
            className={styles.formControl}
            id="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={styles.formControl}
            id="isbn"
            placeholder="ISBN"
            name="isbn"
            ref={isbnRef}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="date"
            className={styles.formControl}
            id="date"
            placeholder="End Date"
            name="date"
            ref={dateRef}
            required
          />
        </div>
        <button
          className={styles.sendButton}
          id="submit"
          type="submit"
          value="SAVE"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Libadmin;
