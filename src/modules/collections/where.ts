import each from "./each";

function where(list, properties) {
  const results = [];
  const keys = Object.keys(properties);
  const lastKey = keys[keys.length - 1];

  each(list, (item) => {
    each(properties, (val, key) => {
      if (item[key] !== val) return;

      // 全部遍历完成
      if (lastKey === key) {
        results.push(item);
      }
    });
  });

  return results;
}

export default where;
