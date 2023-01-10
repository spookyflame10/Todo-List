import Project from "./project";
import Task from "./task";
import projectList from "./projectList";
import { goToProject, dpm } from "./projectModalUI";
import {dtm, displayTaskList} from "./taskUI";

const UI = (() => {
  function initialUI() {
    initializeEventListeners();
    const projectTitle = document.querySelector(".Title");
    const name = projectTitle.innerText;
    const project = projectList.getProject(name);
    displayTaskList(project.getTasks());
  }
  // main control structure here
  function initializeEventListeners() {
    const mode = document.querySelector(".mode");
    const addProject = document.querySelector("#addProject");
    const addTask = document.querySelector(".addTask");
    const Inbox = document.querySelector('[data-title="Inbox"]');
    const Today = document.querySelector('[data-title= "Today"]');
    const thisWeek = document.querySelector('[data-title= "This-Week"]');
    Inbox.addEventListener("click", goToProject);
    Today.addEventListener("click", goToProject);
    thisWeek.addEventListener("click", goToProject);
    mode.addEventListener("click", ()=>{
      document.body.classList.toggle('light');
    });
    addProject.addEventListener("click", dpm);
    addTask.addEventListener("click", dtm);
    // projectTitle.addEventListener('click', )
  }
  
  function clear(document) {}
  function foo() {
    console.log("bob");
  }
  return {
    initialUI,
  };
})();
export default UI;
