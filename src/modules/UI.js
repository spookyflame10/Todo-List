import { createEl } from "../auxFunctions.js";

const UI = (()=>{
  const { body } = document;
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  body.appendChild(container);

  const header = createEl("div", "header");
  container.appendChild(header);
  const sideBarIcon = createEl("div", "sideBarIcon");
  header.appendChild(sideBarIcon);
  // const titleContainer = createEl('div', )
})();
export default UI;

