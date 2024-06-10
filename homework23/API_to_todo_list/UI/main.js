function ToDoList(data) {
    const {taskList, form} = data;
    let editModalTask = {
        text: "",
        _id: 0,
        checked: false
    }

    const putResponse = async (updatedTask) => {
        return fetch(`http://localhost:5000/todos/${updatedTask._id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: updatedTask.text,
                checked: updatedTask.checked
            })
        })
    }

    this.init = function () {
        this.loadTasks();
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTask({
                text: form.elements['value'].value,
                isDone: false
            })
        })

        document.querySelector('#updateButton').addEventListener('click', async () => {
            const updatedTodoText = document.querySelector('#modalInput').value;
            let updatedTask = editModalTask;
            updatedTask.text = updatedTodoText;
            await putResponse(updatedTask);
            taskList.innerHTML = '';
            this.loadTasks();
        })
    }
    this.template = function (task) {
        taskList.insertAdjacentHTML('beforeend', (
            `<li data-id ="${task._id}" class="todo-item ${task.checked ? 'todo-item--checked' : ''}">` +
            `<input type="checkbox" name="done" ${task.checked ? 'checked' : ''} class="js--checkbox">` +
            `<span class="todo-item__description" data-bs-toggle="modal" data-bs-target="#myModal">${task.text}</span>` +
            `<button class="todo-item__delete js--todo-item__delete">Видалити</button>` +
            `</li>`
        ))

        const currentElement = document.querySelector(`[data-id="${task._id}"]`);
        currentElement.querySelector('.js--checkbox').addEventListener('change', () => this.onCompleted(task));
        currentElement.querySelector('.js--todo-item__delete').addEventListener('click', onDelete);
        currentElement.addEventListener('click', onModal);
        const deleteResponse = async (id) => {
            return fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},

            })
        }

        async function onDelete() {
            const element = this.closest('li');
            const id = element.dataset.id;

            element.remove();

            const tasksFromBackend = await deleteResponse(id);
            const data = await tasksFromBackend.json();
            console.log(data);
        }

        function onModal() {
            editModalTask = task;
            document.querySelector('#modalInput').value = task.text;
        }
    }


    this.onCompleted = async function (task) {
        task.checked = !task.checked;
        const updatedTaskResponse = await putResponse(task);
        const data = await updatedTaskResponse.json()
        console.log(data)

        taskList.innerHTML = '';
        this.loadTasks();
    }

    this.addTask = async (task) => {
        const tasksFromBackend = await postResponse(task);
        const data = await tasksFromBackend.json();
        console.log(data);
        this.template(data);
        form.reset();
    }


    const postResponse = async (task) => {
        return fetch('http://localhost:5000/todos', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                text: task.text,
                checked: task.isDone,
            })
        })
    }

    const getResponse = async () => {
        return fetch('http://localhost:5000/todos', {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
    }

    this.loadTasks = async () => {

        const tasksFromBackend = await getResponse();
        const data = await tasksFromBackend.json();
        console.log('Get data:');
        console.log(data);

        if (data) {
            data.forEach(task => this.template(task))
        }
    }
}

const tasksList = new ToDoList({
    taskList: document.querySelector('.js--todos-wrapper'),
    form: document.querySelector('.js--form')
});
tasksList.init();