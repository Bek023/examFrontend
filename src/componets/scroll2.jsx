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
    let i = 99;
    return (
        <>
            <div className={style.block} key={9000}>
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
                        
                        i=i+1;
                        return(
                            <>
                            <SwiperSlide className={style.swiper_slide} key={i}>
                                <div className={style.blog} style={{backgroundImage: `url(${card.image})` } }>
                                    <p className={style.transport}>{card.transport}</p>
                                    <h2>{card.title}</h2>
                                    <p>
                                    <span>{card.duration}</span>
                                    <span>{card.priceChild} $</span>
                                    </p>
                                    <p>{card.description}</p>
                                    <button className={style.title_btn}>Подробнее</button>

                                {/* <img src={card.image}  /> */}
                                </div>
                            </SwiperSlide>
                            </>
                        )
                    })}
                    
 
                </Swiper>
            </div>
        </>
    );
}



