const body = document.querySelector('body');
const taskInput = document.querySelector('#add-task');
const submitBtn = document.querySelector('#submitBtn');
const undoneTasks = document.querySelector('#undone');
const undoneTasksDiv = document.querySelector('#undone-tasks-div');
const doneTasks = document.querySelector('#done');
const doneTasksDiv = document.querySelector('#done-tasks-div');
const dateText = document.querySelector('#date');
const dayText = document.querySelector('#day');
const monthYearText = document.querySelector('#month-year');



const date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let dateNum = date.getDate();

const monthObj = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'June',
    5: 'July',
    6: 'June',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

const weekObj = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

dateText.innerText = dateNum;
dayText.innerText = weekObj[day];
monthYearText.innerText = `${monthObj[month]}, ${year}`;




// Event listeners

// add task event
submitBtn.addEventListener('click', addTask)

// add task function
function addTask(e) {
    if(taskInput.value !== '') {
        let newTask = document.createElement('div');
        newTask.className = 'task-div';

        let newTaskText = document.createElement('p');
        newTaskText.className = 'task-text';
        newTaskText.innerText = taskInput.value;

        let newTaskDone = document.createElement('button');
        newTaskDone.className = 'task-done-btn mark-task';
        newTaskDone.innerText = 'Done';

        let newTaskDel = document.createElement('button');
        newTaskDel.className = 'task-del-btn';
        newTaskDel.innerText = 'Delete';

        newTask.appendChild(newTaskText);
        newTask.appendChild(newTaskDone);
        newTask.appendChild(newTaskDel);

        undoneTasksDiv.appendChild(newTask);

        taskInput.value = '';
    }
}




// delete task event
body.addEventListener('click', deleteTask);

// delete task function
function deleteTask(e) {
    if(e.target.classList.contains('task-del-btn')) {
        let parentTaskDiv = e.target.parentElement;
        let tasksDiv = parentTaskDiv.parentElement;
        tasksDiv.removeChild(parentTaskDiv);
    }
}




// mark task event
undoneTasks.addEventListener('click', markTask);

// mark task function
function markTask(e) {
    if(e.target.classList.contains('mark-task')) {
        let parentTaskDiv = e.target.parentElement;
        let tasksDiv = parentTaskDiv.parentElement;
        let taskText = parentTaskDiv.firstElementChild;
        
        tasksDiv.removeChild(parentTaskDiv);

        let newTask = document.createElement('div');
        newTask.className = 'task-div';

        let newTaskText = document.createElement('p');
        newTaskText.className = 'task-text';
        newTaskText.innerText = taskText.innerText;

        let newTaskDone = document.createElement('button');
        newTaskDone.className = 'task-done-btn undo-task';
        newTaskDone.innerText = 'Undo';

        let newTaskDel = document.createElement('button');
        newTaskDel.className = 'task-del-btn';
        newTaskDel.innerText = 'Delete';

        newTask.appendChild(newTaskText);
        newTask.appendChild(newTaskDone);
        newTask.appendChild(newTaskDel);

        doneTasksDiv.appendChild(newTask);
    }
}





// undo task event
doneTasks.addEventListener('click', undoTask);

// undo task function
function undoTask(e) {
    if(e.target.classList.contains('undo-task')){
        let parentTaskDiv = e.target.parentElement;
        let tasksDiv = parentTaskDiv.parentElement;
        let taskText = parentTaskDiv.firstElementChild;
        
        tasksDiv.removeChild(parentTaskDiv);
        
        let newTask = document.createElement('div');
        newTask.className = 'task-div';

        let newTaskText = document.createElement('p');
        newTaskText.className = 'task-text';
        newTaskText.innerText = taskText.innerText;

        let newTaskDone = document.createElement('button');
        newTaskDone.className = 'task-done-btn mark-task';
        newTaskDone.innerText = 'Done';

        let newTaskDel = document.createElement('button');
        newTaskDel.className = 'task-del-btn';
        newTaskDel.innerText = 'Delete';

        newTask.appendChild(newTaskText);
        newTask.appendChild(newTaskDone);
        newTask.appendChild(newTaskDel);

        undoneTasksDiv.appendChild(newTask);
    }
}
