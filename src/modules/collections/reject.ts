import each from "./each";

function reject(list, predicate, context?) {
  const results = [];

  each(list, (value, key, obj) => {
    if (!predicate.apply(context, [value, key, obj])) results.push(value);
  });

  return results;
}

export default reject;
