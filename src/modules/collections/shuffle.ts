import sample from "./sample";

function shuffle(obj) {
  return sample(obj, Infinity);
}

export default shuffle;
