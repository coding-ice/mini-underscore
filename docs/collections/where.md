---
label: 集合
title: where
slug: /where
sidebar_position: 7
---

<big><b>`where(list, properties)`</b></big>
&emsp;

```ts
function where(list, properties) {
  const results = [];
  const keys = Object.keys(properties);
  const lastKey = keys[keys.length - 1];

  each(list, (item) => {
    each(properties, (val, key) => {
      // 1. 如果 properties 中的 value !== list 中的 item 结束执行
      if (item[key] !== val) return;

      // 2. 所有的 key 遍历完成
      if (lastKey === key) {
        results.push(item);
      }
    });
  });

  return results;
}
```
