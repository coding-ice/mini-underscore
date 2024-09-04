import { describe, expect, it, jest } from "@jest/globals";
import find from "../find";

describe("find", () => {
  it("should support list work", () => {
    const fn = jest.fn((num: number) => num % 2 === 0);

    const value = find([1, 2, 3], fn);
    expect(value).toBe(2);
  });

  it("should support obj work", () => {
    const fn = jest.fn((val: { name: string; age: number }) => val.age === 25);

    const value = find(
      [
        { name: "ice", age: 24 },
        { name: "panda", age: 25 },
      ],
      fn
    );
    expect(value).toEqual({ name: "panda", age: 25 });
  });

  it("should undef when not find", () => {
    const fn = jest.fn((num: number) => num === 4);

    const value = find([1, 2, 3], fn);
    expect(value).toBe(undefined);
  });
});
