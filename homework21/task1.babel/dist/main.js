"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ToDoList(data) {
  var $taskList = data.$taskList,
    $form = data.$form;
  var LocalStorageKey = 'tasks';
  this.init = function () {
    var _this = this;
    this.loadTasks();
    $form.on('submit', function (event) {
      event.preventDefault();
      _this.addTask({
        id: Math.floor(Math.random() * 100),
        text: $form.find('[name="value"]').val(),
        isDone: false
      });
    });
  };
  this.template = function (task) {
    var _this2 = this;
    $taskList.append("\n            <li data-id =\"".concat(task.id, "\" class=\"todo-item ").concat(task.isDone ? 'todo-item--checked' : '', "\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">\n                <input type=\"checkbox\" name=\"done\" ").concat(task.isDone ? 'checked' : '', " class=\"js--checkbox\">\n                <span class=\"todo-item__description\">").concat(task.text, "</span>\n                <button class=\"todo-item__delete js--todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n\n            </li>\n        "));
    var $currentElement = $("[data-id=\"".concat(task.id, "\"]"));
    $currentElement.find('.js--checkbox').on('change', function () {
      return _this2.onCompleted(task);
    });
    $currentElement.find('.js--todo-item__delete').on('click', onDelete);
    $currentElement.on('click', onModal);
    function onDelete() {
      var element = $(this).closest('li');
      var id = element.data('id');
      var tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
      localStorage.setItem(LocalStorageKey, JSON.stringify(tasks.filter(function (task) {
        return task.id !== Number(id);
      })));
      element.remove();
    }
    function onModal() {
      $('#exampleModalLabel').html(task.text);
    }
  };
  this.onCompleted = function (task) {
    task.isDone = !task.isDone;
    var tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
    var newArray = tasks.map(function (item) {
      return item.id === task.id ? task : item;
    });
    localStorage.setItem(LocalStorageKey, JSON.stringify(newArray));
    $taskList.empty();
    this.loadTasks();
  };
  this.addTask = function (task) {
    var tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
    this.template(task);
    $form.trigger("reset");
    localStorage.setItem(LocalStorageKey, JSON.stringify(tasks ? [].concat(_toConsumableArray(tasks), [task]) : [task]));
  };
  this.loadTasks = function () {
    var _this3 = this;
    var tasks = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (tasks) {
      tasks.forEach(function (task) {
        return _this3.template(task);
      });
    }
  };
}
var tasksList = new ToDoList({
  $taskList: $('.js--todos-wrapper'),
  $form: $('.js--form')
});
tasksList.init();