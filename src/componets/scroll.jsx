

import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { scroll } from '../image/image_store';
import { Carousel } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style/scroll.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Scroll() {
    return (
        <>
            <div className='swipper_block'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {scroll.map((i) => {
                        return (
                            <SwiperSlide key={i.id} style={{width:'30rem'}} >
                                <img src={i.img}  />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    );
}