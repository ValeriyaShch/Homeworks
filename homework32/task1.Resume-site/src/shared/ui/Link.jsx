import {NavLink} from "react-router-dom";
function Link(props) {
    const {to, children, href} = props;
    if (to) {
        return (
            <NavLink to={to} style={{color: 'white', textDecoration: 'none'}}>
                {children}
            </NavLink>
        )
    } else {
        return (
            <a href={href} style={{color:'white'}}>
                {children}
            </a>
        )
    }
}

export default Link;