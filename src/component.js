export default (text = "Hello Geee") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};
