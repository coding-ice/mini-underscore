import { describe, expect, it } from "@jest/globals";
import invoke from "../invoke";

describe("invoke", () => {
  it("should work when list", () => {
    const signial = invoke(
      [
        [5, 1, 7],
        [3, 2, 1],
      ],
      "sort"
    );

    expect(signial).toEqual([
      [1, 5, 7],
      [1, 2, 3],
    ]);
  });
});
