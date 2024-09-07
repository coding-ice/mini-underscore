---
label: 集合
title: reject
slug: /reject
sidebar_position: 10
---

<big><b>`reject(list, predicate, [context])`</b></big>
&emsp;

```ts
function reject(list, predicate, context) {
  const results = [];

  each(list, (value, key, obj) => {
    // 1. 执行回调函数，如果不想等，直接push
    if (!predicate.apply(context, [value, key, obj])) results.push(value);
  });

  // 2. 返回
  return results;
}
```
