import React, { useState } from "react";
import style from "../module/librarian.module.css";
import { IoSearch } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
const Librarian = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const newFilteredLinks = links.filter(
      (link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLinks(newFilteredLinks);
    setIsSearching(true);
  };

  const links = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 7",
    },
  ];

  const displayedLinks = isSearching ? filteredLinks : links;

  return (
    <div className={style.body}>
      <div className={style.header}>
        <div className={style.inside}>
          <div className={style.search}>
            <input
              type="text"
              className={style.searchBar}
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IoSearch
              className={style.searchIcon}
              onClick={handleSearchClick}
            />
          </div>
        </div>
      </div>
      <div className={style.parent}>
        {displayedLinks.map((link, index) => (
          <div key={index} className={style.element}>
            <h3>
              {link.title} <FaMinus className={style.icon} />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Librarian;
