// frontend/script.js
const API_URL = '/api/todos';

async function addTodo() {
  const todo = {
    title: document.getElementById('title').value,
    description: document.getElementById('desc').value,
    dueDate: document.getElementById('due').value,
    reminderAt: document.getElementById('reminder').value,
    status: document.getElementById('status').value
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });

  loadTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadTodos();
}

async function updateStatus(id, status) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  loadTodos();
}

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${todo.title}</strong> - ${todo.status} <br>
      ${todo.description || ''} <br>
      Due: ${new Date(todo.dueDate).toLocaleString()} | 
      Reminder: ${new Date(todo.reminderAt).toLocaleString()} <br>
      <button onclick="deleteTodo('${todo._id}')">Delete</button>
      <select onchange="updateStatus('${todo._id}', this.value)">
        <option ${todo.status === 'pending' ? 'selected' : ''}>pending</option>
        <option ${todo.status === 'in-progress' ? 'selected' : ''}>in-progress</option>
        <option ${todo.status === 'completed' ? 'selected' : ''}>completed</option>
      </select>
    `;
    list.appendChild(li);
  });
}

loadTodos();
