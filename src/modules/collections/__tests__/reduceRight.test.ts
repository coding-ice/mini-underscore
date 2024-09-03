import { describe, expect, it } from "@jest/globals";
import reduceRight from "../reduceRight";

describe("reduceRight", () => {
  it("should work", () => {
    const targetList = reduceRight(
      [
        [1, 2],
        [3, 4],
      ],
      (memo, list) => memo.concat(list)
    );
    expect(targetList).toEqual([3, 4, 1, 2]);
  });
});
