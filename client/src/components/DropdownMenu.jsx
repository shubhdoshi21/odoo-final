import React, { useState } from 'react';
import styles from '../module/dropdownmenu.module.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button
        type="button"
        className={styles.dropdownButton}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <span>Filters</span>
        <svg
          className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={styles.dropdownMenu}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <a href="#option1" className={styles.menuItem} role="menuitem">
            Option 1
          </a>
          <a href="#option2" className={styles.menuItem} role="menuitem">
            Option 2
          </a>
          <a href="#option3" className={styles.menuItem} role="menuitem">
            Option 3
          </a>
          <a href="#option4" className={styles.menuItem} role="menuitem">
            Option 4
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
