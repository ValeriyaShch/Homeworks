import {useState} from 'react'
import TaskItem from "./components/TaskItem.jsx";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (taskValue) => {
        if (taskValue.trim()) {
            const newTask = {
                id: Math.floor(Math.random() * 100),
                text: taskValue,
                isDone: false,
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
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
            <Input onSubmit={handleAddTask}/>
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
