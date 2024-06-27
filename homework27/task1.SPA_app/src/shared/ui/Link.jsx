import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ThemeContext} from "../model/themeContext.js";

function Link(props) {
    const [theme] = useContext(ThemeContext);
    const {to, children, href} = props;
    if (to) {
        return (
            <NavLink className='link' to={to} style={{color: theme.color}}>
                {children}
            </NavLink>
        )
    } else {
        return (
            <a className='link' href={href} style={{color: theme.color}}>
                {children}
            </a>
        )
    }
}

export default Link;