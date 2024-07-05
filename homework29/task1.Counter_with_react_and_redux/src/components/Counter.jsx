import {useSelector} from "react-redux";

function Counter() {
    const value = useSelector((state) => state.counter.value);
    return <p>Value: <span id="value">{value}</span></p>
}

export default Counter