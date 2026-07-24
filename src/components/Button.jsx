function Button ({text, className, icon}) {
    return (
        <button className={`button button--${className}`}>
            {text}
            {icon ? <img src={icon} alt="" /> : <></>}
        </button>
    )
}

export default Button