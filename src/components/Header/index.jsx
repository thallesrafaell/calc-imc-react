
import style from './Header.module.css'
import Imagem from '.../assets/imgcalc.png'

const Header = () => {
    return (
        <div className={style.header}>
        <h1 className={style.title}>Calculadora IMC</h1>
        <img src={Imagem} alt="" />
        </div>
    )
}

export default Header