import { describe, expect, it } from "@jest/globals";
import pluck from "../pluck";
import max from "../max";

describe("pluck", () => {
  it("should work when has iteratee", () => {
    const stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 50 },
      { name: "curly", age: 60 },
      { name: "ice", age: 90 },
    ];
    const result = max(stooges, function (stooge) {
      return stooge.age;
    });
    expect(result).toEqual({ name: "ice", age: 90 });
  });

  it("should work when not iteratee", () => {
    const list = [10, 20, 30];
    const result = max(list);
    expect(result).toBe(30);
  });
});
