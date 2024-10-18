function _initial(array: any[] | ArrayLike<any>, n) {
  return Array.prototype.slice.call(
    array,
    0,
    array.length - (n == null ? 1 : n)
  );
}

export default _initial;
