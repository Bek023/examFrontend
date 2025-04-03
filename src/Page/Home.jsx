import Header from '../componets/Header';
import Scroll from '../componets/scroll';
import Scroll2 from '../componets/scroll2';
import icon from '../image/icon.png';
import Car from '../componets/car_type';
import Gallary from '../componets/gallary';
import Rate from '../componets/rate';
import Forma from '../componets/forma';
import style from "./style/home.module.css";
import Footer from '../componets/footer';
import { Link } from 'react-router-dom';




function Home({ }) {
   
    return (
        <div className={style.main_block}>
            <Header />
            <div className={style.header_block}>
                <div className={style.title_block}>
                    <div className={style.title}>
                        <div className={style.text_container}>
                            <span className={style.bold_text}>ПУТЕШЕСТВУЙ</span>
                            <br />
                            <span className={style.italic_text}>вместе с</span>
                            <br />
                            <span className={style.outline_text}>PERO TRAVEL</span>
                        </div>
                        <button className={style.title_btn}>
                            <Link to="/Экскурсии">К экскурсия</Link>
                        </button>
                    </div>
                    <div className={style.icon}>
                        <img src={icon} />
                    </div>
                </div>
            </div>
            <Scroll />
            <div className={style.heading_blog}>
                <span className={style.blog_heading}>Популярные экскурсии</span>
                <span className={style.heading_btn}>Смотреть все</span>
            </div>
            <Scroll2 />
            <div className={style.o_nas}>
                <div className={style.o_nas_text}>
                    <h2>О нас</h2>
                    <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>
            <Car/>
            <Gallary />
            <Rate/>
            <Forma/>
            <Footer/>
        </div>

    )
}

export default Home;