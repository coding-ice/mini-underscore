---
label: 集合
title: sortBy
slug: /sortBy
sidebar_position: 16.5
---

<big><b>`sortBy(list, iteratee, [context])`</b></big>
&emsp;

```ts
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
```

1. 首先进行 map，把 criteria（条件）赋加上去
2. 根据 criteria 进行 sort 排序
3. pluck 只拿 value 即可