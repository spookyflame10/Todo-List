import './style.css';
import {toDate} from 'date-fns';
import Project from './modules/project.js';
import Task from './modules/task.js';
import projectList from './modules/projectList.js';
import UI from './modules/UI.js';
// -import {toDo} from './objects.js';

const task1 = new Task('bob', '2/4/22');
const project = projectList.getProject('Inbox');
project.addTask(task1);
UI.initialUI();
// const task1 = new Task('bob', '2/4/22');
// console.log(task1.setName('hdidd'));
// console.log({task1});
// console.log(task1.getName());
// console.log(task1.getDate());
// const project1 = new Project('bob');
// project1.addTask(task1);
// console.log(project1.getTasks());
// project1.removeTask(task1);
// console.log(project1.getTasks());
// projectList.addProject(project1);
// console.log(projectList.getProjects());

