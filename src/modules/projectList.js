import { compareAsc, toDate } from 'date-fns'
import Project from "./project";
import Task from "./task";


const projectList = (() => {
  let projects = [];
  projects.push(new Project("Inbox"));
  projects.push(new Project("Today"));
  projects.push(new Project("This Week"));
  const getProjects = () => projects;
  const getProject = (projectName) =>
    projects.find((p) => projectName === p.getName());
  const contains = (name) => projects.some((p) => name === p.getName());
  function addProject(newProject) {
    if (contains(newProject.getName())) {
      alert("pls put diff title");
      return false;
    }
    projects.push(newProject);
    return true;
  }
  function removeProject(name) {
    projects = projects.filter((p) => p.getName() !== name);
  }
  function replaceProject(newProject) {
    if (contains(newProject.getName())) {
      removeProject(newProject.getName());
      addProject(newProject);
    } else {
      addProject(newProject);
    }
  }
  function deleteProject(project) {
    projects = projects.filter((p) => p.getName() !== project.getName());
  }
  function updateTodayProject() {
    getProject("Today").tasks = [];
    projects.forEach((project) => {
      if (project.getName() === "Today" || project.getName() === "This Week")
        return;
      const todayTasks = project.getTasksToday();
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`;
        getProject("Today").addTask(new Task(taskName, task.getDate()));
      });
    });
  }
  function updateWeekProject() {
    getProject("This Week").tasks = [];
    projects.forEach((project) => {
      if (project.getName() === "Today" || project.getName() === "This Week")
        return;
      const weekTasks = project.getTasksThisWeek();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`;
        getProject("This Week").addTask(
          new Task(taskName, task.getDate())
        );
      });
    });
    getProject("This Week").setTasks(
      getProject("This Week")
        .getTasks()
        .sort((taskA, taskB) =>
          compareAsc(
            toDate(new Date(taskA.getDateFormatted())),
            toDate(new Date(taskB.getDateFormatted()))
          )
        )
    );
  }

  return {
    getProject,
    getProjects,
    contains,
    addProject,
    deleteProject,
    replaceProject,
    updateWeekProject,
    updateTodayProject,
  };
})();
export default projectList;
