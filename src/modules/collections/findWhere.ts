import each from "./each";

function findWhere(list, properties) {
  let result,
    keys = Object.keys(properties);
  const lastKey = keys[keys.length - 1];

  each(list, (item) => {
    each(properties, (value, key) => {
      if (item[key] !== value) return;

      if (key === lastKey && !result) {
        result = item;
      }
    });
  });

  return result;
}

export default findWhere;
