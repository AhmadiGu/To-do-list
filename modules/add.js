import taskArray from './taskArray.js';

class Dom {
  static add = (data) => {
    let list = taskArray;
    list.forEach((element) => {
      list += `<li><span><input type="checkbox" name="list" value="${element.completed}"><input type="text"  name="list" value="${element.description}"></span>
          <i class="fa-solid fa-ellipsis-vertical"></i></li>`;
    });
    return list;
  }
}

export default Dom;
