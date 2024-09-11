---
label: 集合
title: groupBy
slug: /groupBy
sidebar_position: 17
---

<big><b>`groupBy(list, iteratee, [context])`</b></big>
&emsp;

```ts
function groupBy(obj, iteratee, context?) {
  // 1. 默认初始化结果对象
  const result = {};

  each(obj, (...args) => {
    let key = null;
    const value = args[0];

    // 2. 如果是函数，直接调用结果
    if (typeof iteratee === "function") {
      key = iteratee.apply(context, args);
    } else {
      // 3. 非函数 -> 当作属性处理
      key = value[iteratee];
    }

    // 4. 主动获取values
    const values = result[key];
    // 5. 不存在，创建数组，push值，赋值
    if (!values) {
      result[key] = [value];
    } else {
      // 6. 直接push
      values.push(value);
    }
  });

  // 7. 返回
  return result;
}
```
