import style from './style/A_tour.module.css';
import Header from '../componets/Header'
import { Link, useParams } from 'react-router-dom';
import data from '../store/data';
import Footer from '../componets/footer'
import Rate from '../componets/rate';
import Forma from '../componets/forma';
import Gallary from '../componets/gallary';

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

                </div>

                <Gallary />
                <Rate />
                <Forma />
                <Footer />
            </div>
        </>
    )
}