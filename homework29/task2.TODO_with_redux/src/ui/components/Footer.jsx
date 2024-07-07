import selectors from "../../core/selectors.js";
import {useSelector} from "react-redux";
function Footer() {
    return (
        <footer>
            <p>Всього: <span>{useSelector(selectors.amount)}</span></p>
        </footer>
    )
}

export default Footer