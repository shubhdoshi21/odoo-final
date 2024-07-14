import React from 'react'
import style from "../module/home.module.css"
import image from "../assets/logo-nobg.png"
const Home = () => {
  return (
    <div className={style.outerConatiner}>
      
      <div className={style.secondMain}>
     <div className={style.textOuter}>
        <div className={style.hf}>Elite Reads</div>
        <div className={style.hs}> One stop library</div>
        <div className={style.ht}>for all your books</div>
     
     </div>
     <div className={style.imageOuter}>
      <img src={image} alt="" className={style.firstImg} />
     </div>
     </div>
    </div>
  )
}

export default Home