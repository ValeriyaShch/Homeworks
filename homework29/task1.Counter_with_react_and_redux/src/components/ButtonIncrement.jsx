import {useDispatch} from "react-redux";
import {counter} from "../core/slice/counterSlice.js";

function ButtonIncrement() {
    const dispatcher = useDispatch();
    const onClick = () => {
        dispatcher(counter.actions.increment())
    }
    return <button onClick={onClick}>+</button>
}

export default ButtonIncrement