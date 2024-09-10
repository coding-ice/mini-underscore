import each from "./each";

function min(obj, iteratee?, context?) {
  const isArray = Array.isArray(obj);
  let result = Infinity,
    lastComputed = Infinity;

  if (!iteratee) {
    const values = isArray ? obj : Object.values(obj);
    for (let i = 0; i < values.length; i++) {
      if (values[i] < lastComputed) {
        const value = values[i];
        lastComputed = value;
        result = value;
      }
    }
  } else {
    each(obj, (...args) => {
      const computed = iteratee.apply(context, args);
      if (computed < lastComputed) {
        lastComputed = computed;
        result = args[0];
      }
    });
  }

  return result;
}

export default min;
