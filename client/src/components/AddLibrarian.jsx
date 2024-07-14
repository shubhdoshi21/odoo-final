import React, { useState } from "react";
import axios from "axios";
import style from "../module/upresources.module.css";

const AddLibrarian = ({ setShowNewComponent1 }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/api/v1/createLibrarian", { email });
      alert("Librarian added successfully!");
      setShowNewComponent1(false);
    } catch (error) {
      console.error("Error adding librarian:", error);
      alert("Failed to add librarian.");
    }
  };

  return (
    <div className={style.formContainer} style={{ width: "100%" }}>
      <form onSubmit={handleSubmit} className={style.contactForm}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            className={style.formControl}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <div className={style.btncntr}>
          <button
            type="submit"
            className={style.button}
            style={{ width: "40%" }}
          >
            Add Librarian
          </button>
          <button
            type="button"
            className={style.button}
            style={{ width: "40%" }}
            onClick={() => setShowNewComponent1(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLibrarian;
