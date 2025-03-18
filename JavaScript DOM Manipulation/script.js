const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCategory = document.getElementById('taskCategory');

function createTask(taskText, category) {
  const li = document.createElement('li');
  const taskIcon = document.createElement('img');
  const categoryText = document.createElement('span');

  taskIcon.classList.add('task-icon');
  switch(category) {
    case 'Work':
      taskIcon.src = 'https://www.iconfinder.com/icons/1670764/business_work_icon'; 
      categoryText.textContent = '[งานที่ต้องทำ]';
      break;
    case 'Personal':
      taskIcon.src = 'https://www.iconfinder.com/icons/1670804/user_icon'; 
      categoryText.textContent = '[กิจกรรมส่วนตัว]';
      break;
    default:
      taskIcon.src = 'https://www.iconfinder.com/icons/1670783/other_icon'; 
      categoryText.textContent = '[อื่นๆ]';
      break;
  }

  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'ลบรายการ';
  deleteButton.classList.add('delete-btn');
  
  deleteButton.onclick = function() {
    const confirmDelete = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?');
    if (confirmDelete) {
      taskList.removeChild(li);
    }
  };

  li.onclick = function() {
    li.classList.toggle('completed');
  };

  li.appendChild(taskIcon);
  li.appendChild(categoryText);
  li.appendChild(taskTextNode);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

addTaskButton.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  const category = taskCategory.value;

  if (taskText) {
    createTask(taskText, category);
    taskInput.value = '';
  }
});
