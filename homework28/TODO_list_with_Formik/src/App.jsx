import {useState} from 'react'
import TaskItem from "./components/TaskItem.jsx";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import { Formik, Form } from 'formik';
function App() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = (taskValue) => {
        if (taskValue.trim()) {
            const newTask = {
                id: Math.floor(Math.random() * 100),
                text: taskValue,
                isDone: false,
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setTaskText('');
        }
    };

    const handleToggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header />
            <Form onSubmit={handleAddTask}/>
            {/*<form className="form" onSubmit={handleAddTask}>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        name="value"*/}
            {/*        required*/}
            {/*        className="form__input"*/}
            {/*        value={taskText}*/}
            {/*        onChange={(e) => setTaskText(e.target.value)}*/}
            {/*    />*/}
            {/*    <button type="submit" className="form__btn">*/}
            {/*        Додати*/}
            {/*    </button>*/}
            {/*</form>*/}
            <ul className="js--todos-wrapper">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggleTask={handleToggleTask}
                        onDeleteTask={handleDeleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App
