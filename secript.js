function addTasks(){
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
});
console.log("Task added");