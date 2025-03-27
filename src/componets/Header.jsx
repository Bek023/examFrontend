import { FaFly } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Links from './Menu'
import style from './style/Header.module.css'


function Header({ }) {
    return (
        <header>
            <div className={style.main_block}>
                <div className={style.logo}><FaFly style={{ color: 'white', width: '4rem', height: '4rem', }} /></div>
                <nav className={style.nav_block}>
                    <NavLink to="/" className={style.links}> Главная</NavLink>
                    <NavLink to="/Экскурсии" className={style.links}>Экскурсии</NavLink>
                    <NavLink to="/Личный-кабинет" className={style.links}>Личный кабинет</NavLink>
                </nav>
                <Links className={style.iconMenu}/>
            </div>
        </header>
    )
}

export default Header;