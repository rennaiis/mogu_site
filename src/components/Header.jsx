import logo from '../../public/logo.svg'
function Header (){
    return (
        <header className="header">
            <div>
                <div className="header__logo">
                    <img src={logo} alt="" />
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