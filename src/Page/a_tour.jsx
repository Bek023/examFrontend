import style from './style/A_tour.module.css';
import Header from '../componets/Header'
import { Link, useParams } from 'react-router-dom';
import data from '../store/data';
import Footer from '../componets/footer'
import Rate from '../componets/rate';
import Forma from '../componets/forma';
import Gallary from '../componets/gallary';
import image from '../image/pasport.png';
import Calendar_block from '../componets/calendar';
import Calendarrr from '../componets/calendarrr';
import A_scroll from '../componets/a_tour_scroll';

export default function A_tour({ }) {
    const params = useParams();
    let id = params.id;
    const tour = data[id - 1];
    return (
        <>
            <div className={style.main_block}>
                <div className={style.block}>
                    <Header />
                    <p>{tour.category}</p>
                    <h1>{tour.title}</h1>
                    <button><Link to="/Экскурсии">К  другим экскурсиям</Link></button>
                </div>
                <div className={style.about}>
                    <h2>Описание экскурсии</h2>
                    <div className={style.price_block}>
                        <p className={style.dec}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolorum pariatur deserunt delectus, ducimus quisquam provident et officiis laboriosam cupiditate illo inventore soluta aperiam laudantium ab itaque. Eveniet, eos dignissimos.</p>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceAdult}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceChild}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.duration}</p></div>
                        </div>
                    </div>
                    <Calendarrr/>
                    <A_scroll/>

                </div>
                <div className={style.about}>
                    <h2>Дополнительные расходы (по желанию)</h2>
                    <div className={style.price_block}>

                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceAdult}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceChild}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceAdult}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} ><p>{tour.priceChild}</p>Взрослый билет</div>
                        </div>
                        <div className={style.price1}>
                            <div className={style.price__count} ></div>
                            <div className={style.price__text} >Обед</div>
                        </div>
                    </div>
                    <div className={style.info_block}>
                        <h2 className={style.title}>Важная информация</h2>
                        <div className={style.info_content_block}>
                            <div className={style.block1}>
                                <p>При пересечении границы (Россия-Абхазия) при себе иметь:</p>
                                <div>
                                    <img src={image} />
                                    <p className={style.title}>Паспорт гражданина РФ</p>
                                </div>
                                <div>
                                    <img src={image} />
                                    <p className={style.title}>Гражданам до 14 лет свидетельство о рождении
                                        <br /> <br />
                                        <span>
                                            Несовершеннолетние дети пересекают границу в сопровождении родителей, в сопровождении законного представителя (нотариально заверенная доверенность с указанием страны вывоза ребенка).
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className={style.block2}>
                                <p>Иностранным гражданам въезд в Абхазию ограничен, кроме граждан Украины, республик ДНР и ЛНР.</p>
                                <p>Иностранным гражданам въезд в Абхазию ограничен, кроме граждан Украины, республик ДНР и ЛНР.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <Gallary />
                <Rate />
                <Forma />
                <Footer />
            </div>
        </>
    )
}