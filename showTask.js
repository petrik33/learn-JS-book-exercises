const getFileText = async (file) => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

const parseMarkDown = (text) => {

}