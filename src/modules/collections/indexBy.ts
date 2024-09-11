import group from "./group";

export default group((result, value, key) => {
  result[key] = value;
});
