---
label: 集合
title: reduce
slug: /reduce
sidebar_position: 3
---

<big><b>`reduce(list, iteratee, [memo], [context])`</b></big>
&emsp;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="1" label="reduce" default>
  ```ts
    // 1: 从左边开始
    const reduce = _createReduce(1);
    const total = reduce([1, 2, 3, 4, 5], (memo, val) => memo + val); // 15
  ```
  </TabItem>
  <TabItem value="2" label="_createReduce" default>
  ```ts
    // 1. 创建 reduce（1) | reduceRight (-1) (dir 不同)
    function _createReduce(dir: number) {
      const reducer = (obj, iteratee, memo, initial) => {
        /*
          5. len：兼容 array | obj 获取对应长度
            index： 取决于遍历从哪边开始
        */
        const isArray = Array.isArray(obj);
        const keys = !isArray && Object.keys(obj),
          len = (keys || obj).length;
        let index = dir > 0 ? 0 : len - 1;

        // 6. 如果没有传递 memo，那么 memo 默认为 obj 的第一个值
        if (!initial) {
          memo = isArray ? obj[index] : obj[keys[index]];
          index += dir;
        }

        /* 7.
            index >= 0 覆盖 dir: -1
            index < len 覆盖 dir： 1
            调用 iteratee，传递 memo 的初始值，获取其返回值，依次赋值 memo
        */
        for (; index >= 0 && index < len; index += dir) {
          const currentKey = keys ? keys[index] : index;
          memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }

        // 8. 此时 memo 就是 最终结果
        return memo;
      };

      // 2. reduce 的调用，实际是这个函数
      return function (obj, iteratee, memo?, context?) {
        // 3. 判断 arguments 的长度（传入了几个参数）注：arrow func 没有 args，args 是上层作用域的
        const initial = arguments.length >= 3;

        /*
          4. 实际调用 reduce，返回值 -> reducer的返回值
            传入一个新的 iteratee fn 并且绑定上下文
        */
        return reducer(obj, iteratee.bind(context), memo, initial);
      };
    }
    ```

  </TabItem>
</Tabs>
