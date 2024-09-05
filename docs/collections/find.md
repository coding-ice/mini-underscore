---
label: 集合
title: find
slug: /find
sidebar_position: 5
---

<big><b>`find(list, predicate, [context])`</b></big>
&emsp;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="find" default>
    ```ts
    function find(obj, predicate, context) {
      // 1. 根据不同的类型，调用不同的 func
      const keyFinder = Array.isArray(obj) ? findIndex : findKey;
      // 2. 寻找对应的 key
      const key = keyFinder(obj, predicate, context);
      // 3. 如果 key 存在，返回 value 即可
      if (key !== void 0 && key !== -1) return obj[key];

      // 4. 如果不存在默认返回 undefined
    }
    ```

  </TabItem>
  <TabItem value="2" label="findIndex">
    ```ts
    const findIndex = createPredicateIndexFinder(1);

    // 1 dir：方向遍历 dir：1（从左）-1 : （从右）
    function _createPredicateIndexFinder(dir) {
      // 2. 实际调用的是这个函数
      return (list, predicate, context) => {
        // 3. 返回一个 绑定 ctx 的函数
        predicate = predicate.bind(context);
        const len = list.length;
        let idx = dir > 0 ? 0 : len - 1;

        for (; idx >= 0 && idx < len; idx += dir) {
          // 4. 相等 返回 idx
          if (predicate(list[idx], idx, list)) {
            return idx;
          }
        }

        // 5. 遍历结束未找到 -> -1
        return -1;
      };
    }
    ```

  </TabItem>
  <TabItem value="3" label="findKey">
  ```ts
  function findKey(obj, predicate, context) {
    // 1. bind 上下文
    predicate = predicate.bind(context);
    const keys = Object.keys(obj);

    for (let key of keys) {
      // 2. 相等返回 key
      if (predicate(obj[key], key, obj)) {
        return key;
      }
    }
  }
  ```
</TabItem>
</Tabs>

