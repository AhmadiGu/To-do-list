import Dom from '../modules/add';
import taskArray from '../modules/taskArray';

document.querySelector('.toDo-list').innerHTML = `
<ul class="list">
${Dom.add(taskArray)}
</ul>
`;
