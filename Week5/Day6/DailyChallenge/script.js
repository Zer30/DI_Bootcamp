const tasks = [];
let taskIdCounter = 0;

document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Task cannot be empty!");
    return;
  }

  const task = {
    task_id: taskIdCounter++,
    text: taskText,
    done: false
  };

  tasks.push(task);
  renderTask(task);
  taskInput.value = '';
}

function renderTask(task) {
  const listTasksDiv = document.querySelector('.listTasks');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.setAttribute('data-task-id', task.task_id);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => doneTask(task.task_id));

  const taskLabel = document.createElement('span');
  taskLabel.textContent = task.text;

  const deleteButton = document.createElement('i');
  deleteButton.className = 'fas fa-times';
  deleteButton.addEventListener('click', () => deleteTask(task.task_id));

  taskDiv.append(checkbox, taskLabel, deleteButton);
  listTasksDiv.appendChild(taskDiv);
}

function doneTask(taskId) {
  const task = tasks.find(t => t.task_id === taskId);
  if (task) {
    task.done = !task.done;
    const taskDiv = document.querySelector(`.task[data-task-id="${taskId}"]`);
    taskDiv.classList.toggle('completed');
  }
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(t => t.task_id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    const taskDiv = document.querySelector(`.task[data-task-id="${taskId}"]`);
    taskDiv.remove();
  }
}
