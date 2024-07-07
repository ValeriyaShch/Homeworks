import TaskItem from "./TaskItem.jsx";
import {useSelector} from "react-redux";
import selectors from "../../core/selectors.js";

function ItemsList() {
    const items = useSelector(selectors.items);
    return (
        <ul className="js--todos-wrapper">
            {items.map((task) => (
                <TaskItem
                    task={task}
                />
            ))}
        </ul>
    )
}

export default ItemsList