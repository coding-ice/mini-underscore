---
label: 集合
title: every
slug: /every
sidebar_position: 11
---

<big><b>`every(list, [predicate], [context])`</b></big>
&emsp;

```ts
function every(list, predicate?, context?) {
  // 1. 兜底：默认一个函数，返回传递的值
  predicate =
    predicate ||
    function (val) {
      return val;
    };
  
  // 2. 默认状态为 true
  let signial = true;

  each(list, (value, key, obj) => {
    // 3. 如果不匹配，赋值为 false
    if (!predicate.apply(context, [value, key, obj])) signial = false;
  });


  // 4. 返回状态
  return signial;
}
```
