---
label: 集合
title: max
slug: /max
sidebar_position: 16
---

<big><b>`max(list, [iteratee], [context])`</b></big>
&emsp;

```ts
function max(obj, iteratee?, context?) {
  const isArray = Array.isArray(obj);
  // 1. 初始化值
  let result = -Infinity,
    lastComputed = -Infinity;

  // 2. 如果没有传递 iteratee 当作
  if (!iteratee) {
    const values = isArray ? obj : Object.values(obj);
    // 3. 遍历它的 values
    for (let i = 0; i < values.length; i++) {
      // 4. 如果当前的值 > 上一次计算的值
      if (values[i] > lastComputed) {
        // 5. 不断赋值为 最大值
        const value = values[i];
        lastComputed = value;
        result = value;
      }
    }
  } else {
    each(obj, (...args) => {
      // 3. 调用 iteratee 获取返回值
      const computed = iteratee.apply(context, args);
      // 4. 如果 > 上一次计算值
      if (computed > lastComputed) {
        // 5. 不断赋值
        lastComputed = computed;
        result = args[0];
      }
    });
  }

  // 6. 返回
  return result;
}
```
