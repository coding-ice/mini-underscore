---
label: 集合
title: findWhere
slug: /findWhere
sidebar_position: 9
---

<big><b>`findWhere(list, properties)`</b></big>
&emsp;

```ts
function findWhere(list, properties) {
  let result,
    keys = Object.keys(properties);
  const lastKey = keys[keys.length - 1];

  each(list, (item) => {
    each(properties, (value, key) => {
      // 1. 如果 properties 中的 value !== list 中的 item 结束执行
      if (item[key] !== value) return;

      // 2. 所有的 key 遍历完成 & result 为空的时候
      if (key === lastKey && !result) {
        result = item;
      }
    });
  });

  // 3. 最后返回
  return result;
}
```
