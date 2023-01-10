
import Project from "./project";

const projectList = (() => {
  let projects = [];
  projects.push(new Project("Inbox"));
  projects.push(new Project("Today"));
  projects.push(new Project("This week"));
  const getProjects = () => projects;
  const getProject = (project) =>
    projects.find((p) => project.getName() === p.getName());
  const contains = (project) =>
    projects.some((p) => project.getName() === p.getName());
  function addProject(newProject) {
    if (contains(newProject)){
      alert('pls put diff title');
      return false;
    }
    projects.push(newProject);
    return true;
  }
  function deleteProject(project) {
    projects = projects.filter(
      (p) => p.getName() !== project.getName()
    );
    console.log(project);
  }

  return {
    getProject,
    getProjects,
    contains,
    addProject,
    deleteProject,
  };
})();
export default projectList;
