import { describe, expect, it } from "@jest/globals";
import toArray from "../toArray";

describe("to Array", () => {
  it("should work", () => {
    const res = toArray([1, 2, 3]);
    expect(res).toEqual([1, 2, 3]);

    const res2 = toArray({ 0: 1, 1: 2, 2: 3, length: 3 });
    expect(res2).toEqual([1, 2, 3]);

    const res3 = toArray({ name: "ice", age: 25 });
    expect(res3).toEqual(["ice", 25]);
  });
});
