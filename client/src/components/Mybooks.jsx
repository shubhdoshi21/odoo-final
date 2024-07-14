import React, { useState } from "react";
import style from "../module/mybooks.module.css";
import pdflogo from "../assets/download.jpeg";
import { IoSearch } from "react-icons/io5";
import DropdownMenu from './DropdownMenu';

const Mybooks = () => {
    const [isGridView, setIsGridView] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
  
    const toggleView = () => {
      setIsGridView(!isGridView);
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchClick = () => {
      const newFilteredItems = pdfItems.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    };
  
    const pdfItems = Array.from({ length: 9 }, (_, index) => `Pdf${index + 1}`);
    const displayedItems = filteredItems.length > 0 ? filteredItems : pdfItems;
  
    return (
      <div className={style.body}>
        <div className={style.header}>
          <div><DropdownMenu /></div>
          <div className={style.inside}>
            <input
              type="text"
              className={style.searchBar}
              placeholder="Search..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IoSearch className={style.searchIcon} onClick={handleSearchClick} />
          </div>
          <button className={style.toggleButton} onClick={toggleView}>
            {isGridView ? "List View" : "Grid View"}
          </button>
        </div>
        <div className={isGridView ? style.gridContainer : style.listContainer}>
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className={isGridView ? style.gridElement : style.element}
            >
              <div className={isGridView ? style.gridSet : style.set}>
                <img
                  src={pdflogo}
                  className={isGridView ? style.gridImgs : style.imgs}
                  alt="PDF Icon"
                />
                <div className={style.texts}>{item}</div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    );
}

export default Mybooks