import { useState } from "react"
import { content } from "../constants/copyright"
import Picture from "./Picture"

function Cases() {
    const [current, setCurrent] = useState(content.casesScreen.at(0))
    const clickButton = function(item){
        if (!item.disabled){
            setCurrent(item);
        }
    }
    return (
        <article className="cases" id="cases">
            <div className="cases__content">
                <section className="cases__info">
                    <nav className="cases__tags">
                        {content.casesScreen.map((item, index)=>
                        ( <div
                            key={index}
                            onClick={()=>clickButton(item)} 
                            className={(item.id === current.id) ? 'tag tag--focused' : 
                            (item.disabled ? 'tag tag--disabled' : 'tag tag--case')
                        }>{item.button}</div>)
                    )}
                    </nav>
                    <h3 key={current.id} className="cases__header animate-fade">
                        {current.header}
                    </h3>
                    <p  className="cases__text animate-fade">
                        {current.text}
                    </p>
                </section>
                <Picture {...current.image}/>
            </div>
        </article>
    )
}

export default Cases
