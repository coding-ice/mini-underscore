import map from "./map";
import pluck from "./pluck";

function sortBy(obj, iteratee, context?) {
  const isFunc = typeof iteratee === "function";

  return pluck(
    map(obj, (value, key, item) => ({
      value,
      criteria: isFunc
        ? iteratee.apply(context, [value, key, item])
        : value[iteratee],
    })).sort((left, right) => {
      const a = left.criteria,
        b = right.criteria;

      if (a > b || a === void 0) return 1; // [b, a]
      if (a < b || a === void 0) return -1; // [a, b]
      return 0;
    }),
    "value"
  );
}
export default sortBy;
