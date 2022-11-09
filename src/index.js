import Dom from '../modules/add.js';
import taskArray from '../modules/taskArray.js';

document.querySelector('.toDo-list').innerHTML = `
<ul class="list">
${Dom.add(taskArray)}
</ul>
`;
