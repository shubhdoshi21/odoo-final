import React, { useState } from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import styles from "../module/admin.module.css";
import ResForm from "./UpResources";
import Form from "./AddBooks";
import AdminBooks from "./AdminBooks";
import Librarian from "./Librarian";
import AddLibrarian from "./AddLibrarian";

const Admin = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [showNewComponent1, setShowNewComponent1] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.adminContainer}>
        <div className={styles.sidebar}>
          <button className={styles.dropdownButton} onClick={toggleDropdown}>
            Menu
          </button>
          <ul
            className={`${styles.sidebarList} ${
              isDropdownOpen ? styles.show : ""
            }`}
          >
            <li className={styles.sidebarItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarLink} ${styles.active}`
                    : styles.sidebarLink
                }
                onClick={handleMenuItemClick}
                to="/admin/books"
              >
                Books
              </NavLink>
            </li>
            <li className={styles.sidebarItem}>
              <NavLink
                onClick={handleMenuItemClick}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarLink} ${styles.active}`
                    : styles.sidebarLink
                }
                to="/admin/librarian"
              >
                Librarian
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.mainContent}>
          <Routes>
            <Route
              path="/books"
              element={
                showNewComponent ? (
                  <Form setShowNewComponent={setShowNewComponent} />
                ) : (
                  <>
                    {/* <MyBooks setShowNewComponent={setShowNewComponent} /> */}
                    <button
                      className={styles.btn}
                      onClick={() => {
                        setShowNewComponent(!showNewComponent);
                      }}
                    >
                      ADD NEW RESOURCE
                    </button>
                    <div>
                      <AdminBooks />
                    </div>
                  </>
                )
              }
            />
            <Route
              path="/librarian"
              element={
                showNewComponent1 ? (
                  <AddLibrarian setShowNewComponent1={setShowNewComponent1} />
                ) : (
                  <>
                    <button
                      className={styles.btn}
                      onClick={() => {
                        setShowNewComponent1(!showNewComponent1);
                      }}
                    >
                      ADD NEW LIBRARIAN
                    </button>
                    <Librarian />
                  </>
                )
              }
            />
            <Route path="/" element={<Navigate replace to="/admin/books" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
