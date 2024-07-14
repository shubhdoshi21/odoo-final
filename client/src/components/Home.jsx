import React from 'react'
import style from "../module/home.module.css"
import image from "../assets/pink2.png"
const Home = () => {
  return (
    <div className={style.outerConatiner}>
      
      <div className={style.secondMain}>
     <div className={style.textOuter}>
        <div className={style.hf}>Purrfect Stay Boarding</div>
        <div className={style.hs}>Your One stop solution</div>
        <div className={style.ht}>for your PAWS.</div>
     
     </div>
     <div className={style.imageOuter}>
      <img src={image} alt="" className={style.firstImg} />
     </div>
     </div>
    </div>
  )
}

export default Home