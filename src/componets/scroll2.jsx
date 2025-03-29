import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../store/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './style/scroll.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Scroll2() {
    return (
        <>
            <div className={style.block}>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={style.swiper}
                >
                    {Data.map((card)=>{
                        return(
                            <>
                            <SwiperSlide className={style.swiper_slide} key={card.id}>
                            
                            </SwiperSlide>
                            </>
                        )
                    })}
                    
 
                </Swiper>
            </div>
        </>
    );
}



