function _createReduce(dir: number) {
  const reducer = (obj, iteratee, memo, initial) => {
    const isArray = Array.isArray(obj);
    const keys = !isArray && Object.keys(obj),
      len = (keys || obj).length;
    let index = dir > 0 ? 0 : len - 1;

    if (!initial) {
      memo = isArray ? obj[index] : obj[keys[index]];
      index += dir;
    }

    for (; index >= 0 && index < len; index += dir) {
      const currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }

    return memo;
  };

  return function (obj, iteratee, memo?, context?) {
    const initial = arguments.length >= 3;

    return reducer(obj, iteratee.bind(context), memo, initial);
  };
}

export default _createReduce;
