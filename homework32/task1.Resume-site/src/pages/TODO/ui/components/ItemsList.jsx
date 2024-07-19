import TaskItem from "./TaskItem.jsx";
import {useSelector} from "react-redux";
import selectors from "../../core/selectors.js";
import {List} from "@mui/material";


function ItemsList() {
    const items = useSelector(selectors.items);
    return (
        <List sx={{}}>
            {items.map((task) => (
                <TaskItem task={task}/>
            ))}
        </List>
    )
}

export default ItemsList