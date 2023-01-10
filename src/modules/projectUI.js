import Project from './project';
import Task from './task';

const projectUI = (()=>{
    function getProjectFromInput(){
        const title = document.getElementById("title").value;
        const project = new Project(title);
        console.log(project);
        return project;
      }
      function projectModalToggle(){
        const projectModal = document.querySelector('.project-modal');
        projectModal.classList.toggle('active')
      }
      function goToProject(e){
        console.log(e);
      }
      function displayProject(project){
        const projectContainer = document.querySelector('.projectContainer');
        if(project.getName()==='Inbox'||
          project.getName() === 'Today'||
          project.getName() === 'This week'){    
            return;
        }
        projectContainer.innerHTML += 
        `<button class="sideItem" data-title= "${project.getName()}">
            <span class="material-symbols-outlined">
               list
            </span>
            <div class="project">${project.getName()}</div>
        </button>`;
        const p = document.querySelector(`[data-title= ${project.getName()}]`);
        p.addEventListener('click', goToProject);
      }
      function displayProjectList(){
        const projectContainer = document.querySelector('.projectContainer');
        projectContainer.innerHTML='';
        console.log(projectList.getProjects());
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
})();
export default projectUI;