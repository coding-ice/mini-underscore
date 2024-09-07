import { describe, expect, it, jest } from "@jest/globals";
import findWhere from "../findWhere";

describe("findWhere", () => {
  it("should work", () => {
    expect(
      findWhere(
        [
          { name: "ice", age: 25 },
          { name: "panda", age: 20 },
          { name: "huan", age: 25 },
        ],
        { age: 25 }
      )
    ).toEqual({ name: "ice", age: 25 });
  });

  it("properties are undefined when missing", () => {
    expect(
      findWhere(
        [
          { name: "ice", age: 25 },
          { name: "panda", age: 20 },
          { name: "huan", age: 25 },
        ],
        {}
      )
    ).toBe(undefined);
  });
});
