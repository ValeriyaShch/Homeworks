function TaskItem({task, onToggleTask, onDeleteTask}) {
    return (
        <li
            className={`todo-item ${task.isDone ? 'todo-item--checked' : ''}`}
        >
            <input
                type="checkbox"
                name="done"
                checked={task.isDone}
                onChange={() => onToggleTask(task.id)}
                className="js--checkbox"
            />
            <span className="todo-item__description">{task.text}</span>
            <button
                onClick={() => onDeleteTask(task.id)}
                className="todo-item__delete js--todo-item__delete"
            >
                Видалити
            </button>
        </li>
    );
}

export default TaskItem;