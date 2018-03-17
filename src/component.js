export default (text = "Hello Geee") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  element.onclick = () => {
    import("./LazyLoad")
      .then(lazy => {
        console.log(test());
        element.textContent = lazy.default;
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  return element;
};

function test() {
  return x + 10;
}
