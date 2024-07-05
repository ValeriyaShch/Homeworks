import {useDispatch} from "react-redux";
import {counter} from "../core/slice/counterSlice.js";

function ButtonDecrement() {
    const dispatcher = useDispatch();
    const onClick = () => {
        dispatcher(counter.actions.decrement())
    }
    return <button onClick={onClick}>-</button>
}

export default ButtonDecrement