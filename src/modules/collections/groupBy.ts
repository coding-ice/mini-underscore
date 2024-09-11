import each from "./each";

function groupBy(obj, iteratee, context?) {
  const result = {};

  each(obj, (...args) => {
    let key = null;
    const value = args[0];

    if (typeof iteratee === "function") {
      key = iteratee.apply(context, args);
    } else {
      key = value[iteratee];
    }

    const values = result[key];
    if (!values) {
      const items = [];
      items.push(value);
      result[key] = items;
    } else {
      values.push(value);
    }
  });

  return result;
}

export default groupBy;
