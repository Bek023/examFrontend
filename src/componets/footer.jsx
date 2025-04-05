
import style from './style/Footer.module.css';
import logo from '../image/logo.png';
import icon from '../image/iconF.png';

export default function Footer({ }) {
    return (
        <>
            <footer>
                <div className={style.block}>
                    <img src={logo} />
                    <div className={style.links}>
                        <p>Главная</p>
                        <p>Экскурсии</p>
                        <p>Личный кабинет</p>
                    </div>
                    <div className={style.phones}>
                        <p>+7 964 944 18 74</p>
                        <p>+7 918 919 98 28</p>
                        <p>Телеграм-бот PeroTravel</p>
                    </div>
                    <div className={style.email}>
                        <p>office@perotravel.ru</p>
                        <img src={icon} />
                    </div>
                </div>
            </footer>
        </>
    )
}