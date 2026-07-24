import { useState } from "react"
import { content } from "../constants/copyright"
import Button from "./Button";

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
                            <img 
                            className={isOpen ? 'header__close-btn' : 'header__open-btn'} 
                            src={isOpen ? content.header.mobile_menu.cross : content.header.mobile_menu.menu}
                            alt="" />
                        </div>
                    </div>
                    
                    <nav className="header__navlinks">
                        {content.header.navlinks.map((link, index)=>(
                            <a 
                            key={index} 
                            href={link.href}
                            onClick={()=>setIsOpen(false)}>{link.name}</a>
                        ))}
                    </nav>
                </div>
                <Button {...content.header.enter_button}/>
            </div>
        </header>
    )
}

export default Header