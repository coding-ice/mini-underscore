import group from "./group";

export default group((result, value, key) => {
  if (result[key]) result[key].push(value);
  else result[key] = [value];
});