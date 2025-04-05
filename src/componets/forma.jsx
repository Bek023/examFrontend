
import style from './style/Forma.module.css';

export default function Forma({ }) {
    const handleSubmit = (event) => {
        event.preventDefault();}
    return (
        <>
            <div className={style.block}>
                <div className={style.form_block}>
                    <h1>Остались вопросы?</h1>
                    <h2>Оставь заявку и мы ответим</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='имя' className={style.inp}/>
                        <input type="phone" placeholder='Телефон' className={style.inp}/>
                        <input type="email" placeholder='Почта' className={style.inp}/>
                        <button type="submit" className={style.btn}>Оставить заявку</button>
                    </form>
                </div>
            </div>
        </>
    )
}