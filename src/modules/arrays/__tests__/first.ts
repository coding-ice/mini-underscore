import { describe, expect, it } from "@jest/globals";
import first from "../first";

describe("run first", () => {
  it("should support array", () => {
    expect(first([])).toEqual(undefined);
    expect(first([1, 2, 3], 2)).toEqual([1, 2]);
  });

  it("should support like array", () => {
    expect(first({ "0": "ice", "1": "panda", length: 2 })).toEqual("ice");
  });
});

