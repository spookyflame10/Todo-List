import Project from "./project";
import Task from "./task";
import projectList from "./projectList";
import { goToProject, dpm, dpl} from "./projectModalUI";
import {dtm, displayTaskList} from "./taskUI";
import Storage from './storage';

const UI = (() => {
  function initialUI() {
    initializeEventListeners();
    Storage.getProjectList();
    const projectTitle = document.querySelector(".Title");
    const name = projectTitle.innerText;
    const project = projectList.getProject(name);
    displayTaskList(project.getTasks());
    dpl();
  }
  function addClass(dom){
    return dom.classList.contains('active')?false:
      dom.classList.add('active');
  }
  // main control structure here
  function initializeEventListeners() {
    const menu = document.querySelector('#menu');
    const sideBar = document.querySelector('.sidebar');
    const mode = document.querySelector(".mode");
    const addProject = document.querySelector("#addProject");
    const addTask = document.querySelector(".addTask");
    const Inbox = document.querySelector('[data-title="Inbox"]');
    const Today = document.querySelector('[data-title= "Today"]');
    const thisWeek = document.querySelector('[data-title= "This-Week"]');
    menu.addEventListener('click', ()=>sideBar.classList.toggle('active'));    
    Inbox.addEventListener("click", (e)=>{
      addTask.classList.remove('active');
      goToProject(e);
    });
    Today.addEventListener("click", (e)=>{
      addClass(addTask);
      projectList.updateTodayProject();
      goToProject(e);
    });
    thisWeek.addEventListener("click", (e)=>{
      addClass(addTask);
      projectList.updateWeekProject();
      console.log(projectList.getProject("This Week"));
      goToProject(e);
    });
    mode.addEventListener("click", ()=>{
      document.body.classList.toggle('light');
    });
    addProject.addEventListener("click", dpm);
    addTask.addEventListener("click", dtm);
    // projectTitle.addEventListener('click', )
  }
  return {
    initialUI,
  };
})();
export default UI;
