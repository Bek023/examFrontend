import Header from '../componets/Header';
import Scroll from '../componets/scroll';
import icon from '../image/icon.png';
import { scroll } from '../image/image_store';
import style from "./style/home.module.css";


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
                        <button className={style.title_btn}>К экскурсиям</button>
                    </div>
                    <div className={style.icon}>
                        <img src={icon} />
                    </div>
                </div>
            </div>
            {/* <div className={style.items_scroll}>
                <div className={style.inner}>
                {scroll.map((i) => {
                    return (
                        <img src={i.img} key={i.id} className={style.scrollItem}></img>
                    )
                })}
                </div>
                <div className={style.fade}></div>
            </div> */}
            <Scroll/>
        </div>
    )
}

export default Home;