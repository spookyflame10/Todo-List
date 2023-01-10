import Project from "./project";
import Task from "./task";
import projectList from "./projectList";
import {dtm, displayTaskList} from "./taskUI";

function getProjectFromInput() {
  const title = document.getElementById("title").value.trim();
  const project = new Project(title);
  return project;
}
function projectModalToggle() {
  const projectModal = document.querySelector(".project-modal");
  projectModal.classList.toggle("active");
}
function goToProject(e) {
  const projectTitle = document.querySelector(".Title");
  let name = e.target.dataset.title;
  console.log(name);
  name = name.replaceAll("-", " ");
  if(!projectList.contains(name)){
    return;
  }
  const project = projectList.getProject(name);
  projectTitle.textContent = name;
  displayTaskList(project.getTasks());
}
function goToInbox() {
  const projectTitle = document.querySelector(".Title");
  const project = projectList.getProject('Inbox');
  projectTitle.textContent = project.getName();
  displayTaskList(project.getTasks());
}
function removeProject(e){
  let name = e.target.dataset.title;
  name = name.replaceAll("-", " ");
  const project = projectList.getProject(name);
  projectList.deleteProject(project);
  displayProjectList();
  goToInbox();
}
function displayProject(project) {
  const projectContainer = document.querySelector(".projectContainer");
  let name = project.getName();
  if (name === "Inbox" || name === "Today" || name === "This Week") {
    return;
  }
  // had to do this because querySelector wouldn't work
  if (name.indexOf(" ") >= 0) {
    name = name.replaceAll(/\s/g, "-").trim();
  }
  const button = document.createElement("button");
  button.classList.add("sideItem");
  button.setAttribute("data-title", name);
  const icon = document.createElement("span");
  icon.classList.add("material-symbols-outlined");
  icon.textContent = "list";
  const projectName = document.createElement("div");
  projectName.classList.add("project");
  projectName.setAttribute("data-title", name);
  projectName.textContent = name.replace(/-/g, " ");
  const close = document.createElement("span");
  close.classList.add("material-symbols-outlined");
  close.setAttribute("id", "close");
  close.setAttribute("data-title", name);
  close.textContent = "close";
  button.appendChild(icon);
  button.appendChild(projectName);
  button.appendChild(close);
  close.addEventListener('click', removeProject);
  button.addEventListener("click", goToProject);
  projectContainer.appendChild(button);
}
function displayProjectList() {
  const projectContainer = document.querySelector(".projectContainer");
  projectContainer.innerHTML = "";
  projectList.getProjects().forEach((project) => displayProject(project));
}

function submitProject(e) {
  e.preventDefault();
  const project = getProjectFromInput();
  projectModalToggle();
  if (projectList.addProject(project)) {
    displayProjectList();
  }
}
function displayProjectModal() {
  projectModalToggle();
  const projectModal = document.querySelector(".project-modal");
  const projectCancel = document.querySelector("#cancel");
  projectCancel.onclick = () => projectModalToggle();
  projectModal.onsubmit = submitProject;
  // remember that onsubmit is used for form not button
}

export{goToProject, displayProjectModal as dpm};