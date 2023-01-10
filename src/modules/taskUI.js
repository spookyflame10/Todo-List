import Project from "./project";
import Task from "./task";
import projectList from "./projectList";

function getProjectFromTitle() {
  const projectTitle = document.querySelector(".Title");
  const name = projectTitle.innerText;
  const project = projectList.getProject(name);
  return project;
}
function taskModalToggle() {
  const taskModal = document.querySelector(".taskModal");
  taskModal.classList.toggle("active");
}
function getTaskFromInput() {
  const title = document.getElementById("title2").value.trim();
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const task = new Task(title, date, description);
  console.log(task);
  return task;
}
function removeTask(e) {
  const { name } = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);
  project.removeTask(task);
  displayTaskList(project.getTasks());
}

function editTask(e) {
  const {name} = e.target.dataset;
  const project = getProjectFromTitle();
  const task = project.getTask(name);

  const taskModal = document.querySelector(".taskModal");
  taskModal.classList.toggle("modal");
  const overlay = document.querySelector('.overlay');
  overlay.classList.toggle('active');
  const taskCancel = document.querySelector("#cancel2");
  taskCancel.onclick = () => {
    taskModal.classList.toggle("modal");
    overlay.classList.toggle('active');
  }
  taskModal.onsubmit = (event) => {
    event.preventDefault();
    const newTask = getTaskFromInput();
    task.setName(newTask.getName());
    task.setDate(newTask.getDate());
    task.setDescription(newTask.getDescription());
    taskModal.classList.toggle("modal");
    overlay.classList.toggle('active');
    displayTaskList(project.getTasks());
  };
}
function displayTask(task) {
  const taskContainer = document.querySelector(".taskContainer");
  const task2 = document.createElement("div");
  task2.classList.add("task");
  const taskShown = document.createElement("div");
  taskShown.classList.add("task-shown");
  task2.appendChild(taskShown);
  const taskLeft = document.createElement("div");
  taskLeft.classList.add("taskLeft");
  taskShown.appendChild(taskLeft);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  taskLeft.appendChild(checkbox);
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = task.getName();
  taskLeft.appendChild(title);
  const date = document.createElement("div");
  date.classList.add("date");
  date.innerText = task.getDate();
  taskShown.appendChild(date);
  const taskRight = document.createElement("div");
  taskRight.classList.add("taskRight");
  taskShown.appendChild(taskRight);
  // expandMore
  const expandMore = document.createElement("span");
  expandMore.classList.add("material-symbols-outlined");
  expandMore.setAttribute("id", "down");
  expandMore.innerText = "expand_more";
  taskRight.appendChild(expandMore);
  const up = document.createElement("span");
  up.classList.add("material-symbols-outlined");
  up.innerText = "keyboard_arrow_up";
  up.setAttribute("id", "up");
  taskRight.appendChild(up);
  // deleteEl
  const deleteEl = document.createElement("span");
  deleteEl.classList.add("material-symbols-outlined");
  deleteEl.setAttribute("data-name", task.getName());
  deleteEl.innerText = "delete";
  taskRight.appendChild(deleteEl);
  const taskHidden = document.createElement("div");
  taskHidden.classList.add("task-hidden");
  task2.appendChild(taskHidden);
  const taskHiddenTop = document.createElement("div");
  taskHiddenTop.classList.add("taskHiddenTop");
  taskHidden.appendChild(taskHiddenTop);
  const descriptionTitle = document.createElement("h4");
  descriptionTitle.innerText = "Description:";
  taskHiddenTop.appendChild(descriptionTitle);
  // edit
  const edit = document.createElement("span");
  edit.classList.add("material-symbols-outlined");
  edit.setAttribute("data-name", task.getName());
  edit.innerText = "edit";
  taskHiddenTop.appendChild(edit);
  const description = document.createElement("div");
  description.classList.add("description");
  description.innerText = task.getDescription();
  taskHidden.appendChild(description);
  expandMore.addEventListener("click", () => {
    taskHidden.classList.add("active");
    expandMore.classList.add("active");
    up.classList.add("active");
  });
  up.addEventListener("click", () => {
    expandMore.classList.remove("active");
    taskHidden.classList.remove("active");
    up.classList.remove("active");
  });
  deleteEl.addEventListener("click", removeTask);
  edit.addEventListener("click", editTask);
  taskContainer.appendChild(task2);
}
function displayTaskList(tasks) {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  tasks.forEach((task) => displayTask(task));
}
function submitTask(e) {
  e.preventDefault();
  const project = getProjectFromTitle();
  const task = getTaskFromInput();
  taskModalToggle();
  if (project.addTask(task)) {
    console.log(project.getTasks());
    displayTaskList(project.getTasks());
  }
}
function dtm() {
  taskModalToggle();
  const taskModal = document.querySelector(".taskModal");
  const taskCancel = document.querySelector("#cancel2");
  taskCancel.onclick = () => taskModalToggle();
  taskModal.onsubmit = submitTask;
}

export { dtm, displayTaskList };
