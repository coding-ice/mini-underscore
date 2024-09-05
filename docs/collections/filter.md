---
label: 集合
title: filter
slug: /filter
sidebar_position: 6
---

<big><b>`filter(list, predicate, [context])`</b></big>
&emsp;

```ts
import each from "./each";

function filter(list, predicate, context?) {
  const results = [];

  // 利用 each 进行循环，如果为真就把 val 加入数组中
  each(list, (val, index) => {
    if (predicate.apply(context, [val, index, list])) results.push(val);
  });

  return results;
}
```
