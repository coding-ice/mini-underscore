import map from "./map";

function invoke(list, methodName, ...args) {
  return map(list, (item) => item[methodName](...args));
}

export default invoke;
