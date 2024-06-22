import {Component} from "react";

class Button extends Component {
    render() {
        const {  text, type = 'button', className = 'btn-primary', onClick } = this.props
        return (
            <button  type={type} className={`btn ${className}`} onClick={onClick}>{text}</button>
        )
    }
}

export default Button