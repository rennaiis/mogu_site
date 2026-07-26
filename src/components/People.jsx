import { content } from "../constants/copyright"

function People(){
    return (
        <article className="people" id="people">
            {content.people.map((item, id)=>(
            <div
                
                className={`people__${item.letter}`}>
                {item.images.map((image, index)=>(
                    <img src={image} alt="" 
                    key={index} 
                    className={`people__${item.letter}-${index}`}/>
                ))}
            </div>
        ))}
        </article>
    )
}

export default People