import {React,useState,useEffect} from 'react'
import style from '../module/books.module.css'
import { GoSearch } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import img1 from "../assets/trendingbook1.jpg"
import img2 from "../assets/trendingbook2.jpg"
import img3 from "../assets/trendingbook3.jpg"
import img4 from "../assets/trendingbook4.jpg"
import images from "../assets";
import { RiFilter2Fill } from "react-icons/ri";

const Books = () => {
    const BooksAll = [
        {
        imgs:images.img1,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout  Implement the approval hierarchy and user and ",
        "available":["yes","no"]
    },
     {
        imgs:images.img2,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout This Book* Reduce implementation costs and improve major ",
        "available":["yes","no"]
     },
     {
        imgs:images.img3,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout This Book* Reduce implementation costs and improve major",
        "available":["yes","no"]
     },
     {
        imgs:images.img1,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout This Book* Reduce implementation costs and improve major benchmarks ",
        "available":["yes","no"]
     },
     {
        imgs:images.img4,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout This Book* Reduce implementation costs and improve major ",
        "available":["yes","no"]
     },
     {
        imgs:images.img4,
        "Description":"Comprehensive tasks covering Odoo 10 in the right wayAbout This Book* Reduce implementation costs and improve major ",
        "available":["yes","no"]
     },
    
    ]
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
  return (
    <div className={style.outermost}>
        <div className={style.sec1}>
            <h2 className={style.mainHead}>Welcome to the world of BOOKS</h2>
        </div>
        <div className={style.sec2}>
        <input
              type="text"
              className={style.searchBar}
              placeholder="Search..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className={style.ico}>
            <IoSearch className={style.searchIcon}  />
            <RiFilter2Fill className={style.searchIcon}/>
            </div>
        </div>
        <div className={style.sec3}>
            <h2 className={style.header}>New arrivals</h2>
            <div className={style.galleryConatiner}>
                 {
                    BooksAll.map((book,index)=>(
                            <div key={index} className={style.row} >
                            <div className={style.booki} style={{'--book-image':`url(${book.imgs})`}}>
                                <img src={book.imgs} alt={`Book ${index + 1}`} className={style.bookiImg} />
                                <div className={style.content}>
        <p>{book.Description}</p>
    </div>
                            </div>
                        </div>
                    ))
                 }
                </div>

                <div className={style.galleryConatiner}>
                 {
                    BooksAll.map((book,index)=>(
                            <div key={index} className={style.row} >
                            <div className={style.booki} style={{'--book-image':`url(${book.imgs})`}}>
                                <img src={book.imgs} alt={`Book ${index + 1}`} />
                                <div className={style.content}>
        <p>{book.Description}</p>
    </div>
                            </div>
                        </div>
                    ))
                 }
                </div>

                <div className={style.galleryConatiner}>
                 {
                    BooksAll.map((book,index)=>(
                            <div key={index} className={style.row} >
                            <div className={style.booki} style={{'--book-image':`url(${book.imgs})`}}>
                                <img src={book.imgs} alt={`Book ${index + 1}`} />
                                <div className={style.content}>
        <p>{book.Description}</p>
    </div>
                            </div>
                        </div>
                    ))
                 }
                </div>
            </div>
        </div>
    
  )
}

export default Books