---
label: 集合
title: some
slug: /some
sidebar_position: 12
---

<big><b>`some(list, [predicate], [context])`</b></big>
&emsp;

```ts
function some(obj, predicate?, context?) {
  predicate = predicate
    ? predicate
    : function (val) {
        return val;
      };

  const isArray = Array.isArray(obj),
    keys = !isArray && Object.keys(obj),
    length = (keys || obj).length;

  for (let i = 0; i < length; i++) {
    const currentKey = isArray ? i : keys[i];
    // 1. 如果有一个值为期待 直接返回true
    if (predicate.apply(context, [obj[currentKey], currentKey, obj]))
      return true;
  }
}
```
