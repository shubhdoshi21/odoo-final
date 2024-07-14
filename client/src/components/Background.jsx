import React,{useState,useEffect,useRef} from 'react'
import style from "../module/background.module.css"
const Background = () => {
//   const circleRef = useRef(null);
//   useEffect(
//     ()=>{
//       const handleMouseMove = (event)=>{
        
//         const {clientX,clientY}=event;
//         if(circleRef.current){
//           circleRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
//         }

//       };

//       window.addEventListener('mousemove', handleMouseMove);
//   return () => {
//     window.removeEventListener('mousemove', handleMouseMove);
//   };
// }, []
  
  return (
    <div className={style.bgOuter}>
        <div className={style.gridBack}></div>
        <div className={style.gridBack2}></div>
    </div>
  )
}
export default Background