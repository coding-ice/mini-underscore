import { describe, expect, it } from "@jest/globals";
import indexBy from "../indexBy";

describe("indexBy", () => {
  it("should work when has func", () => {
    const group = indexBy(
      [
        { name: "moe", age: 40 },
        { name: "larry", age: 50 },
        { name: "curly", age: 60 },
      ],
      "age"
    );
    expect(group).toEqual({
      "40": { name: "moe", age: 40 },
      "50": { name: "larry", age: 50 },
      "60": { name: "curly", age: 60 },
    });
  });
});
