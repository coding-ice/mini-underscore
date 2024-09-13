import map from "./map";

function partition(collection, predicate) {
  const results = [[], []];

  map(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      results[0].push(value);
    } else {
      results[1].push(value);
    }
  });

  return results
}

export default partition;
