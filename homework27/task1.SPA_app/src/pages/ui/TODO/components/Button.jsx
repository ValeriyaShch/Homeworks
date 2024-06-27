
function Button(props) {
    const { text, type = 'button', className = 'btn-primary', onClick } = props;
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>{text}</button>
    )
}

export default Button
