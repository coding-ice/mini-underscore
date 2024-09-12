import group from "./group";

export default group((result, value, key) => {
  if (result[key]) result[key] += 1;
  else result[key] = 1;
});
