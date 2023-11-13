
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
        <h1 className={style.title}>Calculadora IMC</h1>
        <img src="./src/assets/imgcalc.png" alt="" />
        </div>
    )
}

export default Header