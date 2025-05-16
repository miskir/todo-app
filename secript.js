/*function addTasks(){
    const taskInput = 
    document.getElementById("taskInput");

    const taskText = 
    taskInput.value.trim();
    if (taskText !== "") {
        const taskList = 
        document.getElementById("taskList");

        const newTask = 
        document.createElement("li");
        newTask.textContent = taskText;
//create a delete button
const deleteBtn =
document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.style.marginLeft = "10px";
deleteBtn.onclick = function() {
    taskList.removeChild(newTask);
};
newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear the input field
    }
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTasks();
    }
});*/

// load tasks  when the papge loads

window.onload = function() {
    loadTasks();

    // Enable Enter key to add tasks

document.getElementById("taskInput")
.addEventListener("keypress", 
    function(event) {
    if (event.key === "Enter") {
        addTasks();}
    });
};

function addTasks(){
    const taskInput = 
    document.getElementById("taskInput");

    const taskText = 
    taskInput.value.trim();


    if (taskText !== "") {
        const tasks = getTasks();
        const newTask = {
            id: Date.now(), // Unique ID for the task
            text: taskText
        }
        tasks.push(newTask);
        saveTasks(tasks);
        renderTasks(newTask);
        taskInput.value = ""; // Clear the input field
    }   
}
function renderTasks(task) {
    const taskList = 
    document.getElementById("taskList");

    const newTask = 
    document.createElement("li");
    newTask.textContent = task.text;
    newTask.style.cursor = "pointer";

    newTask.onclick = function() {
        newTask.classList.toggle("completed");
        // newTask.style.textDecoration = 
        // newTask.style.textDecoration === "line-through" ? 
        // "none" : "line-through";
    };

    // Create a delete button
    const deleteBtn =
    document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function() {
        taskList.removeChild(newTask);
        removeTask(task.id);
    };
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
}
//save tasks to local storage
function saveTasks(tasks){
    localStorage.setItem("tasks", 
        JSON.stringify(tasks));
}

function getTasks(){
    const tasks =
    localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : 
    [];
}
// Get tasks from local storage

// function getTasks(){
//     const tasks=
//     localStorage.getItem("tasks");
//     return tasks ? JSON.parse(tasks) : [];
// }
// remove task from local storage and render
function removeTask(id){
    let tasks = getTasks();
   tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
}

function loadTasks(){
    const tasks = getTasks();
    tasks.forEach(renderTasks);
}
function clearAllTasks(){
  localStorage.removeItem("tasks");
  document.getElementById("taskList").innerHTML = "";
}

// //add Enter key support
// document.getElementById("taskInput").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         addTasks();
//     }
// });


console.log("Task added");