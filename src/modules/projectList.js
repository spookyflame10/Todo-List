
import Project from "./project";

const projectList = (() => {
  let projects = [];
  projects.push(new Project("Inbox"));
  projects.push(new Project("Today"));
  projects.push(new Project("This Week"));
  const getProjects = () => projects;
  const getProject = (projectName) =>
    projects.find((p) => projectName === p.getName());
  const contains = (name) =>
    projects.some((p) => name === p.getName());
  function addProject(newProject) {
    if (contains(newProject.getName())){
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
