console.log('scrit loaded');

// On attend que tout le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask () {
    // On supprime les espaces
   
    let taskText = taskInput.value.trim();
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText
    taskList.appendChild(taskItem);

}
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
});
});
