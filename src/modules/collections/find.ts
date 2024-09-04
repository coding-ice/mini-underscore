import findIndex from "./findIndex";
import findKey from "./findKey";

function find(obj, predicate, context?) {
  const keyFinder = Array.isArray(obj) ? findIndex : findKey;
  const key = keyFinder(obj, predicate, context);

  if (key !== void 0 && key !== -1) return obj[key];
}

export default find;
