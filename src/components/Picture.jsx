
function Picture({sources, imgAttrs}){
    return (
        <picture>
            {sources && sources.map((source, index)=>(
                <source 
                    key={index}
                    {...source}
                />
            ))}
            {imgAttrs && <img {...imgAttrs} alt={imgAttrs.alt ?? 'картинка'}/>}
        </picture>
    )
}

export default Picture