function contains(obj, value, fromIndex?) {
  const isArray = Array.isArray(obj),
    values = isArray ? obj : Object.values(obj);

  return values.indexOf(value, fromIndex || 0) >= 0;
}

export default contains;
