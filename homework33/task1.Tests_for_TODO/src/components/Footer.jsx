import {useDispatch} from "react-redux";
import selectors from "../core/selectors.js";
import {todoActions} from "../core/saga/actionTypes.js";

function Footer() {
    const dispatch = useDispatch()
    const onClearTodos = () => {
        dispatch(todoActions.clearTodos())
    }

    return (
        <footer>
            <button className="clear-btn" onClick={onClearTodos}>Очистити</button>
        </footer>
    )
}

export default Footer