function each(obj, iteratee, context?) {
  const isArray = Array.isArray(obj);

  if (isArray) {
    for (let i = 0; i < obj.length; i++) {
      iteratee.apply(context, [obj[i], i, obj]);
    }
  } else {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      iteratee.apply(context, [obj[keys[i]], keys[i], obj]);
    }
  }

  return obj;
}

export default each;
