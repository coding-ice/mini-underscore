import map from "./map";

function toArray(obj) {
  if (Array.isArray(obj) || obj?.length) {
    return Array.from(obj);
  }

  return map(obj, (val) => val);
}

export default toArray;
