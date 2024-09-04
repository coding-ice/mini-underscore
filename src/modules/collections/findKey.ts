function findKey(obj, predicate, context?) {
  predicate = predicate.bind(context);

  const keys = Object.keys(obj);

  for (let key of keys) {
    if (predicate(obj[key], key, obj)) {
      return key;
    }
  }
}

export default findKey;
