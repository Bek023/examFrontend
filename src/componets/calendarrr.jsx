import Calendar_block from './calendar';
import style from './style/Calendarrr.module.css';


export default function Calendarrr({ }) {
    return (
        <>
            <div className={style.block}>
                <div className={style.main}>
                    <p>Календарь путешествий</p>
                    <Calendar_block />
                </div>
            </div>
        </>
    )
}