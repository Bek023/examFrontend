

import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../store/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './style/rate.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Rate() {
    let i = 99;
    return (
        <> <div className={style.title_block}>
            <h1>Отзывы</h1>
            <span>Смотреть все</span>
        </div>
            <div className={style.block} key={9000}>
                <Swiper

                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={style.swiper}
                >
                    {Data.map((card) => {

                        i = i + 1;
                        return (
                            <>
                                <SwiperSlide className={style.swiper_slide} key={i} >
                                    <div className={style.blog}  >
                                        <img src={card.image} />

                                        <h2>{card.title}</h2>
                                        <p>{card.description}</p>


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



