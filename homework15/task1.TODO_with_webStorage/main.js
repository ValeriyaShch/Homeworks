function ToDoList(data) {
    const {taskList, form} = data;
    const LocalStorageKey = 'tasks';
    this.init = function () {
        this.loadTasks();
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTask({
                id: Math.floor(Math.random() * 100),
                text: form.elements['value'].value,
                isDone: false
            })
        })

    }
    this.template = function (task) {
        taskList.insertAdjacentHTML('beforeend', (
            `<li data-id ="${task.id}" class="todo-item ${task.isDone ? 'todo-item--checked' : ''}">` +
            `<input type="checkbox" name="done" ${task.isDone ? 'checked' : ''} class="js--checkbox">` +
            `<span class="todo-item__description">${task.text}</span>` +
            `<button class="todo-item__delete js--todo-item__delete">Видалити</button>` +
            `</li>`
        ))

        const currentElement = document.querySelector(`[data-id="${task.id}"]`);
        currentElement.querySelector('.js--checkbox').addEventListener('change', () => this.onCompleted(task));
        currentElement.querySelector('.js--todo-item__delete').addEventListener('click', onDelete);

        function onDelete() {
            const element = this.closest('li');
            const id = element.dataset.id;
            const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
            localStorage.setItem(LocalStorageKey, JSON.stringify(
                tasks.filter(task => task.id !== Number(id))
            ))
            element.remove();
        }

    }

    this.onCompleted = function (task) {
        task.isDone = !task.isDone;
        const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
        const newArray = tasks.map(item => item.id === task.id ? task : item);
        localStorage.setItem(LocalStorageKey, JSON.stringify(newArray));
        taskList.innerHTML = '';
        this.loadTasks();
    }

    this.addTask = function (task) {
        const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
        this.template(task);
        form.reset();
        localStorage.setItem(LocalStorageKey, JSON.stringify(
            tasks
                ? [...tasks, task]
                : [task]
        ))
    }

    this.loadTasks = function () {
        const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
        if (tasks) {
            tasks.forEach(task => this.template(task))
        }
    }
}

const tasksList = new ToDoList({
    taskList: document.querySelector('.js--todos-wrapper'),
    form: document.querySelector('.js--form')
});
tasksList.init();