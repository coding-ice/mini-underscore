function some(obj, predicate?, context?) {
  predicate = predicate
    ? predicate
    : function (val) {
        return val;
      };

  const isArray = Array.isArray(obj),
    keys = !isArray && Object.keys(obj),
    length = (keys || obj).length;

  for (let i = 0; i < length; i++) {
    const currentKey = isArray ? i : keys[i];
    if (predicate.apply(context, [obj[currentKey], currentKey, obj]))
      return true;
  }
}

export default some;
