import DisplayTodos from './modules/functionalities';

window.addEventListener('load', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const toDoInput = document.querySelector('.toDo-add-form');
  toDoInput.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = {
      addList: e.target.elements.addList.value,
      compeled: false,
      createAt: new Date().getTime(),
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();
    DisplayTodos();
  });
  DisplayTodos();
});