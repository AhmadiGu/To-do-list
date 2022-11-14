const DisplayTodos = () => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todolist = document.querySelector('.toDo-list');
  todolist.innerHTML = '';
  todos.forEach((todo) => {
    const todoUl = document.createElement('ul');
    todoUl.classList.add('list');
    const todoItem = document.createElement('li');
    const todoSpan = document.createElement('span');
    const inputItem = document.createElement('input');
    const content = document.createElement('div');
    const icon = document.createElement('i');
    const actions = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    inputItem.type = 'checkbox';
    inputItem.checked = todo.compeled;
    icon.classList.add('fa-solid');
    todoSpan.classList.add('span');
    icon.classList.add('fa-ellipsis-vertical');
    content.classList.add('todo-content');
    actions.classList.add('actions');
    editButton.classList.add('fa-solid');
    editButton.classList.add('fa-pen-to-square');
    deleteButton.classList.add('fa-solid');
    deleteButton.classList.add('fa-trash-can');

    content.innerHTML = `<input type="text" value="${todo.addList}" readonly >`;

    todoUl.appendChild(todoItem);
    todoUl.appendChild(todoSpan);
    todoSpan.appendChild(inputItem);
    todoSpan.appendChild(content);
    todoUl.appendChild(icon);
    todoUl.appendChild(actions);
    actions.appendChild(deleteButton);
    actions.appendChild(editButton);
    todolist.appendChild(todoUl);

    if (todo.compeled) {
      todoSpan.classList.add('done');
    }

    inputItem.addEventListener('click', (e) => {
      todo.compeled = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if (todo.compeled) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }
      DisplayTodos();
    });

    editButton.addEventListener('click', () => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true);
        todo.addList = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    });

    const deleteButtonAll = document.querySelector('.clearAll');
    deleteButtonAll.addEventListener('click', () => {
      todos = todos.filter((todo) => todo.compeled === false);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    });
  });
};
export default DisplayTodos;