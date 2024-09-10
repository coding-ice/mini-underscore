import { describe, expect, it } from "@jest/globals";
import pluck from "../pluck";

describe("pluck", () => {
  it("should work", () => {
    const stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 50 },
      { name: "curly", age: 60 },
    ];
    const users = pluck(stooges, "name");
    expect(users).toEqual(["moe", "larry", "curly"]);
  });
});
