import { describe, expect, it, jest } from "@jest/globals";
import filter from "../filter";

describe("filter", () => {
  it("should list work", () => {
    const fn = jest.fn((v: number) => v % 2 === 0);

    const list = [1, 2, 4, 8];
    const res = filter(list, fn);

    expect(fn.mock.calls.length).toBe(4);
    expect(res).toEqual([2, 4, 8]);
  });
});
