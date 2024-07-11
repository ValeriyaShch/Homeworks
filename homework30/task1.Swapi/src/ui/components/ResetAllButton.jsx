import {useDispatch} from "react-redux";
import swapiSlice from "../../core/slice/swapiSlice.js";

export function ResetAllButton() {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(swapiSlice.actions.resetAll())
    }

    return (
        <button onClick={onClick}>Reset All</button>
    )
}