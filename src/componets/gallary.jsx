import image from '../image/scroll.jpg';
import Style from './style/Galary.module.css';

export default function Gallary({ }) {
    return (
        <>
            <div className={Style.block}>
                <div className={Style.title_block}>
                    <p>Галерея</p>
                    <span>Смотреть все</span>
                </div>
                <div className={Style.img_block}>
                    <img src={image} className={Style.img1} />
                    <img src={image} className={Style.img2} />
                    <img src={image} className={Style.img3} />
                    <img src={image} className={Style.img4} />
                    <img src={image} className={Style.img5} />
                    <img src={image} className={Style.img6} />
                    <img src={image} className={Style.img7} />
                    <img src={image} className={Style.img8} />
                </div>
            </div>
        </>
    )
}