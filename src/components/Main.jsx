import { content } from "../constants/copyright"
import Button from "./Button"
import Picture from "./Picture"

function Main (){   
    return (
        <div className="main" id="main">
            <section className="main__info">
                <div className="main__textblock">
                    <h1 className="main__header">{content.mainScreen.mainHeader}</h1>
                    <p className="main__description">{content.mainScreen.description}</p>
                </div>
                <div className="main__form">
                    <div className="main__features">
                    {content.mainScreen.features.map((item, index)=>(
                        <span key={index}className="tag tag--features">
                            {item.text}
                        </span>
                    ))}
                    </div>
                    <form className="form form--start">
                        <input 
                            type={content.mainScreen.emailForm.input.type} 
                            placeholder={content.mainScreen.emailForm.input.placeholder}
                        />
                        <Button {...content.mainScreen.emailForm.startButton}/>
                    </form>
                </div>
                
            </section>
            <section className="main__card">
                <div className="tag tag--card">
                    {content.mainScreen.coworkCard.tag}
                </div>
                <div className="main__avatars">
                    {content.mainScreen.coworkCard.accounts.map((item, index)=>(
                        <div>
                            {index ==4 ? 
                            <>
                                <div className="main__avatar main__avatar--plus">
                                    <img  src={item.image} alt="" />
                                </div>
                            </> : 
                            <>
                                {item.dialog_tag && (
                                <div className={`tag tag--dialog ${index == 0 ? 'tag--dialog--bottom' : 'tag--dialog--top'}`}>
                                    {item.dialog_tag}
                                </div>
                                )}
                                <div className="main__avatar">
                                    <Picture {...item.image}/>
                                </div>
                            </>
                            }
                        </div>
                    ))}
                    
                </div>
                <Picture {...content.mainScreen.coworkCard.image}/>
            </section>
        </div>
    )
}
export default Main 

