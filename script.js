
function addTask() {
    let inputField = document.getElementById("input-field");
    let task = inputField.value;
  
    if (task !== "") {
      let todoList = document.getElementById("todo-work");
      let listItem = document.createElement("li");
      listItem.innerText = task;
  
      let editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.onclick = function () {
        editTask(this);
      };
  
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.onclick = function () {
        deleteTask(this);
      };

      todoList.appendChild(listItem);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
  
      inputField.value = "";
    }
  }
  
  // function editTask(button) {
  //   var task = button.parentNode.firstChild;
  //   var updatedTask = prompt("Edit task:", task.innerText);
  
  //   if (updatedTask !== null && updatedTask !== "") {
  //     task.innerText = updatedTask;
  //   }
  // }

  function editTask(button) {
    var listItem = button.parentNode;
    var task = listItem.firstChild;
    var updatedTask = prompt("Edit task:", task.innerText);
  
    if (updatedTask !== null && updatedTask !== "") {
      task.innerText = updatedTask;
    }
  
    // Remove the old task from the list
    var todoList = listItem.parentNode;
    todoList.removeChild(listItem);
  
    // Create a new list item with the updated task
    var newListItem = document.createElement("li");
    newListItem.innerText = updatedTask;
  
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function () {
      editTask(this);
    };
  
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      deleteTask(this);
    };
    newListItem.appendChild(editButton);
    newListItem.appendChild(deleteButton);
    todoList.appendChild(newListItem);
  }
  
  
  function deleteTask(button) {
    let listItem = button.parentNode;
    let todoList = listItem.parentNode;
    todoList.removeChild(listItem);
  }

// Theme Change
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
