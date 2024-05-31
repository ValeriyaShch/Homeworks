function ToDoList(data) {
    const {$taskList, $form} = data;
    const LocalStorageKey = 'tasks';
    this.init = function () {
        this.loadTasks();
        $form.on('submit', (event) => {
            event.preventDefault();
            this.addTask({
                id: Math.floor(Math.random() * 100),
                text: $form.find('[name="value"]').val(),
                isDone: false
            })
        })

    }
    this.template = function (task) {
        $taskList.append(`
            <li data-id ="${task.id}" class="todo-item ${task.isDone ? 'todo-item--checked' : ''}" data-bs-toggle="modal" data-bs-target="#myModal">
                <input type="checkbox" name="done" ${task.isDone ? 'checked' : ''} class="js--checkbox">
                <span class="todo-item__description">${task.text}</span>
                <button class="todo-item__delete js--todo-item__delete">Видалити</button>

            </li>
        `)

        const $currentElement = $(`[data-id="${task.id}"]`);

        $currentElement.find('.js--checkbox').on('change', () => this.onCompleted(task));
        $currentElement.find('.js--todo-item__delete').on('click', onDelete);
        $currentElement.on('click', onModal);

        function onDelete() {
            const element = $(this).closest('li');
            const id = element.data('id');
            const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
            localStorage.setItem(LocalStorageKey, JSON.stringify(
                tasks.filter(task => task.id !== Number(id))
            ))
            element.remove();
        }

        function onModal() {
            $('#exampleModalLabel').html(task.text);
        }

    }

    this.onCompleted = function (task) {
        task.isDone = !task.isDone;
        const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
        const newArray = tasks.map(item => item.id === task.id ? task : item);
        localStorage.setItem(LocalStorageKey, JSON.stringify(newArray));
        $taskList.empty();
        this.loadTasks();
    }

    this.addTask = function (task) {
        const tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
        this.template(task);
        $form.trigger("reset");
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
    $taskList: $('.js--todos-wrapper'),
    $form: $('.js--form')
});
tasksList.init();