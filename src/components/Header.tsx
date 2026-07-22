import Picture from "./Picture"
import logoText from '../constants/images/logo-text.svg'
import logo from '../constants/images/logo.svg'
function Header (){
    return (
        <header className="header">
            <div>
                <div className="header__logo">
                    <div className="header__image">
                        <img src={logo} alt="" />
                    </div>
                    <img src={logoText} className = "header__logo-text" alt="" />
                    <nav>
                        <a href="">О нас</a>
                        <a href="">Кейсы</a>
                        <a href="">Обратная связь</a>
                    </nav>
                </div>
                <button>
                    Войти
                </button>
            </div>
        </header>
    )
}

export default Header