import {useItem} from "./useItem.js";

function TaskItem({task}) {
    const {
        onDeleteTask,
        isLoading,
        onToggleTask,
        onEditTask,
        onUpdateTask,
        inputValue,
        onChangeInput
    } = useItem(task.id, task.text, task.isDone);
    return (
        <li
            className={`todo-item ${task.isDone ? 'todo-item--checked' : ''}`}
        >
            <input
                type="checkbox"
                name="done"
                checked={task.isDone}
                onChange={onToggleTask}
                className="js--checkbox"
            />
            {task.isEditing
                ? (
                    <div className="task-item">
                        <input className="form__input" type='text' onInput={onChangeInput} defaultValue={inputValue}/>
                        <button className="todo-item__button" disabled={isLoading} onClick={onUpdateTask}>Зберегти
                        </button>
                    </div>

                ) : (
                    <div className="task-item">
                        <span className="todo-item__description">{task.text}</span>
                        <button className="todo-item__button" disabled={isLoading}
                                onClick={() => onEditTask(task.id)}>Змінити
                        </button>
                    </div>

                )}
            <button
                disabled={isLoading}
                onClick={onDeleteTask}
                className="todo-item__button"
            >
                Видалити
            </button>
        </li>
    );
}

export default TaskItem;