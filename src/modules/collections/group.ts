import each from "./each";

function group(behavior) {
  return function (obj, iteratee, context?) {
    const result = {};

    each(obj, (...args) => {
      let key = null;
      const value = args[0];

      if (typeof iteratee === "function") {
        key = iteratee.apply(context, args);
      } else {
        key = value[iteratee];
      }

      behavior(result, value, key);
    });

    return result;
  };
}

export default group;
