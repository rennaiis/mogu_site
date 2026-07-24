import { content } from "../constants/copyright";
import Picture from "./Picture";

function Cards () {
    return (
        <article className="cards" id='about'>
            {content.aboutCards.map((card, index)=>(
                <div className={`card card--${index + 1}`} key='index'>
                    {(card.header && card.text) &&
                        <section className="card__text">
                            <h2 className="card__header">{card.header}</h2>
                            <p className="card__description">{card.text}</p>
                        </section>
                    }
                    {(card.images?.length) &&
                        <section className="card__images">
                            {card.images?.map((image, index)=>(                            
                                <Picture {...image}/>
                                ))
                            }
                        </section>
                    }
                    
                    {(card.actions?.length) && 
                        <section className="card__actions">
                            {card.actions?.map((action, index)=>(
                                <>
                                    <p>{action.text}</p>
                                    {action.icon && <img src={action.icon} alt="" />}
                                </>
                                
                            ))}
                        </section>
                    }
                    
                                       
                </div>
            ))}
        </article>
    )
}

export default Cards