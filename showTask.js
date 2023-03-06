const getFileText = async (file) => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

const readTask = async (taskPath) => {
  const text = await getFileText(taskPath);
  task.innerHTML = marked.parse(text);
}

const task = document.getElementById('task');
const taskPath = task.dataset['path'];

(async () => await readTask(taskPath))();