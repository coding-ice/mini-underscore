---
label: 集合
title: size
slug: /size
sidebar_position: 23
---

<big><b>`size(list)`</b></big>
&emsp;

```ts
function partition(collection, predicate) {
  // 1. 初始化数组
  const results = [[], []];

  map(collection, (value, key, collection) => {
    // 2. 如果断言相等，push 到 first 数组中
    if (predicate(value, key, collection)) {
      results[0].push(value);
    } else {
      // 3. 不想等，push 到 second 数组中
      results[1].push(value);
    }
  });

  // 4. 返回数组
  return results;
}
```
