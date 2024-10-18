import _initial from "./_initial";
function first(array: any[] | ArrayLike<any>, n?) {
  if (array == null || array.length < 1) return;
  if (n == null) return array[0];

  return _initial(array, array.length - n);
}

export default first;
