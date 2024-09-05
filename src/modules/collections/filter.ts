import each from "./each";

function filter(list, predicate, context?) {
  predicate = predicate.bind(context);

  const res = [];
  each(list, (val, index) => {
    if (predicate(val, index, list)) res.push(val);
  });

  return res;
}

export default filter;
