function addTask() {
  let taskInput = document.getElementById('taskInput').value;
  if (taskInput === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleCompletion(this)">${taskInput}</span>
    <button class="remove" onclick="removeTask(this)">Remove</button>
  `;
  document.getElementById('todoList').appendChild(li);
  document.getElementById('taskInput').value = ''; // Clear input field
}

function toggleCompletion(task) {
  task.classList.toggle('completed');
}

function removeTask(button) {
  button.parentElement.remove();
}