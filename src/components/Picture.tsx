import type React from "react"

interface sourceItem {
    media: string,
    srcset: string
}

interface pictureProps{
    sources: sourceItem[], 
    imgAttrs: React.ImgHTMLAttributes<HTMLImageElement>
}

function Picture({sources, imgAttrs}: pictureProps){
    return (
        <picture>
            {sources && sources.map((source, index)=>(
                <source 
                    key={index}
                    media={source.media}
                    srcSet={source.srcset}
                />
            ))}
            {imgAttrs && <img {...imgAttrs} />}
        </picture>
    )
}

export default Picture