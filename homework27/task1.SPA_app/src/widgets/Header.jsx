import Link from "../shared/ui/Link.jsx";
import ChangeTheme from "../feature/ui/ChangeTheme.jsx";
import Error from "../feature/Error/ui/index.jsx";

function Header() {
    return (
        <header className='header'>
            <div className='list'>
                <Link to="/" type="NavLink">Головна</Link>
                <Link to="/contact" type="NavLink">Контакти</Link>
                <Link to="/about" type="NavLink">Про мене</Link>
            </div>
            <ChangeTheme />
            <Error />
        </header>
    )
}

export default Header;