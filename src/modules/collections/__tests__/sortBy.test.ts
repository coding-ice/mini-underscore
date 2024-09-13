import { describe, expect, it } from "@jest/globals";
import sortBy from "../sortBy";

describe("sortBy", () => {
  it('should sort by "criteria" property', () => {
    const sorted = sortBy([1, 2, 3, 4, 5, 6], function (num) {
      return Math.sin(num);
    });
    expect(sorted).toEqual([5, 4, 6, 3, 1, 2]);

    const sorted2 = sortBy(
      [
        { name: "moe", age: 40 },
        { name: "larry", age: 50 },
        { name: "curly", age: 60 },
      ],
      "name"
    );
    expect(sorted2).toEqual([
      { name: "curly", age: 60 },
      { name: "larry", age: 50 },
      { name: "moe", age: 40 },
    ]);
  });
});
