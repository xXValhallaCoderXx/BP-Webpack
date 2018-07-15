export default (text = "Hey world") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};