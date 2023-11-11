
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
        <h1 className={style.title}>Calculadora IMC</h1>
        <span className={style.saudacao}>Ola Thalles</span>
        </div>
    )
}

export default Header