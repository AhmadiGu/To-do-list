class Dom {
  static add = (taskArray) => {
    taskArray.forEach((element) => {
      taskArray += `<li><span><input type="checkbox" name="taskArray" value="${element.completed}"><input type="text"  name="taskArrayi" value="${element.description}"></span>
          <i class="fa-solid fa-ellipsis-vertical"></i></li>`;
    });
    return taskArray;
  }
}

export default Dom;
