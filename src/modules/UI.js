import Project from './project';
import Task from './task';
import projectList from './projectList';

const UI = (()=>{
  function initialUI(){
    initializeEventListeners();
  }
  // main control structure here
  function initializeEventListeners(){
    const mode = document.querySelector('.mode');
    const addProject = document.querySelector('#addProject');
    const projectTitle = document.querySelector('.Title');
    const addTask = document.querySelector('.addTask');
    const taskContainer = document.querySelector('.taskContainer');
    const Inbox = document.querySelector('[data-title="Inbox"]');
    const Today= document.querySelector('[data-title= "Today"]');
    const thisWeek = document.querySelector('[data-title= "This-Week"]');
    Inbox.addEventListener('click', goToProject);
    Today.addEventListener('click', goToProject);
    thisWeek.addEventListener('click', goToProject);
    mode.addEventListener('click', foo);
    addProject.addEventListener('click', displayProjectModal);
    // projectTitle.addEventListener('click', )
  }
  // project adding functions
  function getProjectFromInput(){
    const title = document.getElementById("title").value;
    const project = new Project(title);
    return project;
  }
  function projectModalToggle(){
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.toggle('active')
  }
  function goToProject(e){
    const projectTitle = document.querySelector('.Title');
    let name =e.target.dataset.title
    name = name.replaceAll('-', ' ');
    projectTitle.textContent = name;

  }
  function displayProject(project){
    const projectContainer = document.querySelector('.projectContainer');
    let name = project.getName();
    if(name==='Inbox'||
      name === 'Today'||
      name === 'This week'){    
        return;
    }
    if(name.indexOf(' ')>=0){
        name = name.replaceAll(/\s/g, "-").trim();
    }
    const button = document.createElement('button');
    button.classList.add('sideItem');
    button.setAttribute('data-title', name);
    const icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'list';
    const projectName = document.createElement('div');
    projectName.classList.add('project');
    projectName.setAttribute('data-title', name);
    projectName.textContent = name.replace(/-/g, ' ');
    const close = document.createElement('span');
    close.classList.add('material-symbols-outlined');
    close.setAttribute('id', 'close');
    close.textContent = 'close';
    button.appendChild(icon);
    button.appendChild(projectName);
    button.appendChild(close);
    button.addEventListener('click', goToProject);
    projectContainer.appendChild(button);
  }
  function displayProjectList(){
    const projectContainer = document.querySelector('.projectContainer');
    projectContainer.innerHTML='';
    projectList.getProjects().forEach((project) => displayProject(project));
  }
  function submitProject(e){
    e.preventDefault();
    const project = getProjectFromInput();
    projectModalToggle();
    if(projectList.addProject(project)){
       displayProjectList();
    }
  }
  function displayProjectModal(){
    projectModalToggle();
    const projectModal = document.querySelector('.project-modal');
    const projectCancel = document.querySelector('#cancel');
    projectCancel.onclick = () =>projectModalToggle();
    projectModal.onsubmit = submitProject;
    // remember that onsubmit is used for form not button
  }
  function clear(document){
  }
  function foo(){console.log('bob')};
  return{
    initialUI
  };
})();
export default UI;

