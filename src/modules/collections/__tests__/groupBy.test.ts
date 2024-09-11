import { describe, expect, it } from "@jest/globals";
import groupBy from "../groupBy";

describe("groupBy", () => {
  it("should work when has func", () => {
    const group = groupBy([1.2, 1.5, 2.1, 3.1, 3.2, 3.6], function (num) {
      return Math.floor(num);
    });

    expect(group).toEqual({
      1: [1.2, 1.5],
      2: [2.1],
      3: [3.1, 3.2, 3.6],
    });
  });

  it("should work when has prop", () => {
    const group = groupBy(["one", "two", "three"], "length");

    expect(group).toEqual({ 3: ["one", "two"], 5: ["three"] });
  });
});
