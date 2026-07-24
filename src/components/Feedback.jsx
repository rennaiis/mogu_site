import { content } from "../constants/copyright"
import Button from "./Button"

function Feedback() {
    return (
        <article className="feedback" id="feedback">
            <form className="form feedback__form">
                <h2 className="feedback__header">{content.feedbackForm.header}</h2>
                {content.feedbackForm.fields.map((item, map)=>(
                    <item.type {...item.attr}></item.type>
                ))}
                <Button {...content.feedbackForm.button}/>
            </form>
            <div className="feedback__logo">
                <div className="cat">
                    <img className='cat__body' src={content.feedbackForm.logo.image} alt="" />
                    <img className='cat__eyes' src={content.feedbackForm.logo.eyes} alt="" />
                </div>
            </div>
            
            
        </article>

    )
}

export default Feedback