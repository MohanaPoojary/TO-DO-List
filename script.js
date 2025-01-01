const userInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const listItem = document.getElementById("task-list");

function addTask() {
    const taskValue = userInput.value.trim(); // Get input value and trim spaces

    // Validate input
    if (taskValue === "") {
        alert("Please Enter a Task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Add task text
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    listItem.appendChild(li);

    // Clear the input field
    userInput.value = "";
}

// Add event listener to the Add button
addTaskBtn.addEventListener("click", addTask);

// Add event listener for "Enter" key
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
