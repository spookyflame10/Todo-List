import projectList from "./projectList";
import Project from "./project";
import Task from "./task";

export default class Storage {
  static setProjectList() {
    localStorage.setItem("pl", JSON.stringify(projectList.getProjects()));
  }

  static getProjectList() {
    const objArray = JSON.parse(localStorage.getItem("pl"));
    if(objArray==null){
      return;
    }
    objArray.forEach((p) => {
      const project2 = new Project(p.name);
      const taskArray = p.tasks;
      // should draw out solution before attempting
      // newArray is a newArray.
      const newArray = [];
      taskArray.forEach((t) =>{
        const task = new Task(t.name, t.dueDate, t.description);
        newArray.push(task);
      })
      project2.setTasks(newArray);
      projectList.replaceProject(project2);
    });
  }
}
