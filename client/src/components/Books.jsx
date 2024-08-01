import { React, useState, useEffect } from "react";
import style from "../module/books.module.css";
import { IoSearch } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";
import axios from "axios";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    // Fetch books from the backend
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/books/api/v1/getAllBooks");
        console.log(response);
        if (response.data.success) {
          setBooks(response.data.data);
          setFilteredItems(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const newFilteredItems = books.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.post("books/api/v1/searchBookByTitle", {
        title: searchQuery,
      });
      if (response.data.success) {
        setFilteredItems(response.data.data);
      } else {
        setFilteredItems([]);
        console.log("No books found");
      }
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const handleFilterChange = (filterType, filterValue) => {
    setFilterType(filterType);
    setFilterValue(filterValue);
    applyFilter(filterType, filterValue);
  };

  const applyFilter = async (filterType, filterValue) => {
    try {
      const response = await axios.post("books/api/v1/filter", {
        type: filterType,
        value: filterValue,
      });
      if (response.data.success) {
        setFilteredItems(response.data.data);
      } else {
        setFilteredItems([]);
      }
    } catch (error) {
      console.error("Error applying filter:", error);
    }
  };

  return (
    <div className={style.outermost}>
      <div className={style.sec1}>
        <h2 className={style.mainHead}>Welcome to the world of BOOKS</h2>
      </div>
      <div className={style.sec2}>
        <div>
          <DropdownMenu onFilterChange={handleFilterChange} />
        </div>
        <input
          type="text"
          className={style.searchBar}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className={style.sec3}>
        <h2 className={style.header}>All arrivals</h2>
        <div className={style.galleryConatiner}>
          {filteredItems.map((book, index) => (
            <div>
              <div key={index} className={style.row}>
                <div
                  className={style.booki}
                  style={{ "--book-image": `url(${book.bookiImg})` }}
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
              <div className={style.info}>
                <button className={style.btn}>{book.title}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
