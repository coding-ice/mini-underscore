import { describe, expect, it, jest } from "@jest/globals";
import map from "../map";

describe("map", () => {
  it("should support list and ctx", () => {
    const fn = jest.fn((val: number, ...rest) => val * 2);

    const list = [1, 2, 3];
    const ctx = { name: "ice" };

    const result = map(list, fn, ctx);

    expect(fn.mock.calls.length).toBe(3);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[0][1]).toBe(0);
    expect(fn.mock.calls[0][2]).toBe(list);

    expect(fn.mock.instances[0]).toBe(ctx);

    expect(result).toEqual([2, 4, 6]);
  });

  it("should support obj and ctx", () => {
    const fn = jest.fn((val: number, ...rest) => val * 2);

    const obj = { one: 1, two: 2 };
    const ctx = { name: "ice" };

    const result = map(obj, fn, ctx);

    expect(fn.mock.calls.length).toBe(2);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[0][1]).toBe("one");
    expect(fn.mock.calls[0][2]).toBe(obj);

    expect(fn.mock.instances[0]).toBe(ctx);

    expect(result).toEqual([2, 4]);
  });
});
