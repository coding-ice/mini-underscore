import { describe, expect, it } from "@jest/globals";
import partition from "../partition";

describe("partition", () => {
  it("should work", () => {
    const list = [0, 1, 2, 3, 4, 5];
    const res = partition(list, (value) => value % 2 === 0);
    expect(res).toEqual([
      [0, 2, 4],
      [1, 3, 5],
    ]);
  });
});
