function size(list) {
  if (list == null) return 0;
  return Array.isArray(list) ? list.length : Object.keys(list).length;
}

export default size;
