"use client";
import { PiCaretLeftBold ,PiCaretRightBold } from "react-icons/pi";

import { useSwiper } from "swiper/react";

const WorkSliderButton = ({containStyles,btnStyles,iconsStyles}:any) => {
    const swiper= useSwiper();
  return (
    <div className={containStyles}>
       <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
       <PiCaretLeftBold  className={iconsStyles}/>
        
        </button> 
       <button className={btnStyles} onClick={()=> swiper.slideNext()}>
       
       <PiCaretRightBold  className={iconsStyles} />
        
        </button> 
        
        
        </div>
  )
}

export default WorkSliderButton