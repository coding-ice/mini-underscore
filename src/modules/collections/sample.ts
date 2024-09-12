import random from "./_random";

function sample(obj, n?) {
  if (!n) {
    return obj[random(0, obj.length - 1)];
  }

  const isArray = Array.isArray(obj),
    collection = isArray ? obj : Object.values(obj),
    length = collection.length,
    last = length - 1;

  n = Math.max(Math.min(n, length), 0);

  for (let i = 0; i < n; i++) {
    const rand = random(i, last);

    const temp = collection[i];
    collection[i] = collection[rand];
    collection[rand] = temp;
  }

  return obj.slice(0, n);
}

export default sample;
