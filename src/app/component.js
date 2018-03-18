// export default (text = SOME_VAR) => {
//   const element = document.createElement("div");
//   element.innerHTML = text;
//   element.onclick = () => {
//     import("./LazyLoad")
//       .then(lazy => {
//         //console.log(test());
//         element.textContent = lazy.default;
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   };
  
//   return element;
// };

// function test() {
//   return x + 10;
// }
import React, { Component } from 'react'
import styles from "./cssModule.css";

export default class Application extends Component {
  render() {
    return (
      <div className={styles.cssModuleExample}>
        HELLO WORLDssss
      </div>
    )
  }
}
