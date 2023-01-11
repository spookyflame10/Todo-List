export default class task {
  constructor(name, dueDate = "No date", description = "") {
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getDateFormatted() {
    const day = this.dueDate.split("-")[2];
    const month = this.dueDate.split("-")[1];
    const year = this.dueDate.split("-")[0];
    return `${month}/${day}/${year}`;
  }

  getDescription(){
    return this.description;
  }

  setDescription(description){
    this.description = description;
  }
}
// const getDescription = () => description;
// const getPriority = () => priority;
// const getIsDone = () => isDone;
// function setDescription(description){this.description = description}
// const toggleDone = () => {
//     this.isDone = !isDone;
// }
// getDescription,getPriority, getIsDone,setDescription,toggleDone,
