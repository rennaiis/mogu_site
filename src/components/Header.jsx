import { content } from "../constants/copyright"

function Header (){
    return (
        <header className="header">
            <div>
                <div className="header__logo">
                    <img src={content.header.logo.img} alt=""/>
                    <nav>
                        <a href="">О нас</a>
                        <a href="">Кейсы</a>
                        <a href="">Обратная связь</a>
                    </nav>
                </div>
                <button> Войти </button>
            </div>
        </header>
    )
}

export default Header