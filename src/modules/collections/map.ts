function map(obj, iteratee, context?) {
  const isArray = Array.isArray(obj),
    keys = !isArray && Object.keys(obj),
    len = (keys || obj).length,
    res = Array(len);

  for (let i = 0; i < len; i++) {
    const currentKey = isArray ? i : keys[i];
    res[i] = iteratee.apply(context, [obj[currentKey], currentKey, obj]);
  }

  return res;
}

export default map;
