import { useState } from "react"
import { content } from "../constants/copyright"
import Picture from "./Picture"

function Cases() {
    const [current, setCurrent] = useState(content.casesScreen.at(0))
    return (
        <article className="cases">
            <div className="cases__content">
                <section>
                    <nav className="cases__tags">
                        {content.casesScreen.map((item, index)=>
                        ( <div className={(item.id === current.id) ? 'tag tag--focused' : 
                            (item.disabled ? 'tag tag--disabled' : 'tag tag--case')
                        }>{item.button}</div>)
                    )}
                    </nav>
                    <h3>
                        {current.header}
                    </h3>
                    <p>
                        {current.text}
                    </p>
                </section>
                <Picture {...current.image}/>
            </div>
        </article>
    )
}

export default Cases
