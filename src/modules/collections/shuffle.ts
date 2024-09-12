import random from "./_random";

function shuffle(list: number[]) {
  const isArray = Array.isArray(list),
    collection = isArray ? list : Object.values(list),
    length = collection.length,
    last = length - 1;

  for (let i = 0; i < collection.length; i++) {
    const rand = random(i, last);

    const temp = collection[i];
    collection[i] = collection[rand];
    collection[rand] = temp;
  }

  return list;
}

export default shuffle;
