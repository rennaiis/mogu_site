import { useState } from "react"
import { content } from "../constants/copyright"

function Header (){
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className={`header ${isOpen ? "header--opened" : ""}`}>
            <div className="header__wrapper">
                <div className="header__content">
                    <div className="header__logo">
                        <a  href={content.header.logo.href}>
                            <img className="header__logo-img" src={content.header.logo.img} alt=""/>
                        </a>
                        <div className="header__burger" onClick={()=> setIsOpen(!isOpen)}>
                            <img src={isOpen ? content.header.mobile_menu.cross : content.header.mobile_menu.menu} alt="" />
                        </div>
                    </div>
                    
                    <nav>
                        {content.header.navlinks.map((link, index)=>(
                            <a key={index} href={link.href}>{link.name}</a>
                        ))}
                    </nav>
                </div>
                <button className={`button button--${content.header.enter_button.className}`}> Войти </button>
            </div>
        </header>
    )
}

export default Header