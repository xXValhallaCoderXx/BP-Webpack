export default (text = "Hellosss world") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};