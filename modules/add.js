import taskArray from './taskArray.js';

class Dom {
  static add = (taskArray) => {
    //let taskArray = taskArray;
    taskArray.forEach((element) => {
      taskArray += `<li><span><input type="checkbox" name="taskArray" value="${element.completed}"><input type="text"  name="taskArray" value="${element.description}"></span>
          <i class="fa-solid fa-ellipsis-vertical"></i></li>`;
    });
    return taskArray;
  }
}

export default Dom;
