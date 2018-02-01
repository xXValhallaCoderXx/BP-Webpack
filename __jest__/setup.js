import { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

global.toJson = toJson;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
