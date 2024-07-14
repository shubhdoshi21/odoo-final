import React from 'react'
import style from "../module/recomended.module.css"
import images from "../assets";
const Recommended = () => {
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
  return (
    <div>
        <div>
        <h2 className={`${style.h2} ${style.sectionTitle} ${style.hasUnderline}`} id="section-title1">
          Recommended Books
          <span className={style.span} />
         
        </h2>
        <div className={style.galleryConatiner}>
                 {
                    BooksAll.map((book,index)=>(
                     <div>
                            <div key={index} className={style.row} >
                            <div className={style.booki} style={{'--book-image':`url(${book.imgs})`}}>
                                <img src={book.imgs} alt={`Book ${index + 1}`} className={style.bookiImg} />
                                <div className={style.content}>
        <p>{book.Description}</p>
    </div>
                            </div>
                        </div>
                        <div className={style.info}>
                            
                            <span>Borrow Date:</span>
                            <span>Due Date:</span>
                            <button className={style.btn}>Get Book</button>
                        </div>
                     </div>
                    ))
                 }
                </div>  
        </div>
    </div>
  )
}

export default Recommended