import {useDispatch, useSelector} from "react-redux";
import selectors from "../../core/selectors.js";
import {todoActions} from "../../core/saga/actionTypes.js";
import {Button} from "@mui/material";

function ClearSection() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectors.isLoading);

    const onClearTodos = () => {
        dispatch(todoActions.clearTodos())
    }

    return (
        <footer>
            <Button sx={{width: 200}}
                onClick={onClearTodos}
                className="clear-btn"
                disabled={isLoading}
                variant='contained'
            >
                Очистити
            </Button>
        </footer>
    )
}

export default ClearSection