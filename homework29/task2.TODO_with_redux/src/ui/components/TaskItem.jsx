function TaskItem({task}) {
    return (
        <li
            className={`todo-item`}
        >
            <span className="todo-item__description">{task.text}</span>
        </li>
    );
}

export default TaskItem;