import { describe, expect, it, jest } from "@jest/globals";
import reject from "../reject";

describe("reject", () => {
  it("should work", () => {
    const fn = jest.fn((val: number) => val % 2 === 0);

    expect(reject([1, 2, 3, 4, 5], fn, { name: "ice" })).toEqual([1, 3, 5]);
  });
});
