import map from "./map";

function pluck(list, propertyName) {
  return map(list, (val, key) => val[propertyName]);
}

export default pluck;
