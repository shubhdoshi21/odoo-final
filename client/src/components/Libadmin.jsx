import React, { useRef, useState } from "react";
import styles from "../module/libadmin.module.css";
import { IoChevronBackCircle } from "react-icons/io5";
import axios from "axios";

const Libadmin = ({ setShowNewComponent1 }) => {
    const [type, setType] = useState("text");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef("");
  const descriptionRef = useRef("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleBlankCardClick = () => {
    setShowNewComponent1((showNewComponent1) => !showNewComponent1);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    const formData = new FormData();
    formData.append("title", name);
    formData.append("description", description);
    formData.append("category", type);

    if (type === "link") {
      formData.append("link", link);
    } else if (type === "pdf" && file) {
      formData.append("file", file);
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}resources/api/v1/postResource`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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

  return (
    <div className={styles.wrapper}>
      
      <form
        id="contact-form"
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <input
            type="text"
            className={styles.formControl}
            id="name"
            placeholder="EMAIL"
            name="name"
            ref={nameRef}
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
            ref={nameRef}
            required
          />
        </div>
        <div className={styles.formGroup}>
        <input
            type="date"
            className={styles.formControl}
            id="date"
            placeholder="ISBN"
            name="date"
            ref={nameRef}
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
  )
}

export default Libadmin