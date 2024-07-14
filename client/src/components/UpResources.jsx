import React, { useRef, useState } from "react";
import styles from "../module/upresources.module.css";
import { IoChevronBackCircle } from "react-icons/io5";
import axios from "axios";
import Loader from "./Loader";

const UpResources = ({ setShowNewComponent1 }) => {
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
          <input
            type="text"
            className={styles.formControl}
            id="name"
            placeholder="NAME"
            name="name"
            ref={nameRef}
            required
          />
        </div>
        <textarea
          className={styles.formControl}
          rows={10}
          placeholder="DESCRIPTION"
          name="description"
          required
          ref={descriptionRef}
        />
        <label className={styles.label}>
          Type:
          <label className={styles.radioLabel}>
            <input
              type="radio"
              className={styles.radioInput}
              value="link"
              checked={type === "link"}
              onChange={handleTypeChange}
            />
            Link
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              className={styles.radioInput}
              value="pdf"
              checked={type === "pdf"}
              onChange={handleTypeChange}
              required
            />
            PDF
          </label>
        </label>
        {type === "link" && (
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formControl}
              id="link"
              placeholder="LINK"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
        )}
        {type === "pdf" && (
          <div className={styles.formGroup}>
            <input
              type="file"
              className={styles.fileInput}
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>
        )}
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

export default UpResources;
