import { marked } from "marked";

const getFileText = async (file) => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

const parseMarkDown = (text) => {
  return marked.parse(text);
}

const task = document.getElementById('task');
const taskPath = task.dataset['path'];
task.innerHTML = parseMarkDown(getFileText(taskPath));
