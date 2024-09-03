import { jest, describe, it, expect } from "@jest/globals";
import reduce from "../reduce";

describe("reduce", () => {
  it("should support list and ctx", () => {
    const fn = jest.fn((memo: number, num: number) => memo + num);

    const ctx = { name: "ice" };
    const list = [1, 2, 3, 4, 5];
    const total = reduce(list, fn, 0, ctx);

    expect(total).toBe(15);
    expect(fn.mock.instances[0]).toBe(ctx);
  });

  it("should support obj and ctx", () => {
    const fn = jest.fn((memo: number, num: number) => memo + num);

    const ctx = { name: "ice" };
    const obj = { one: 1, two: 2, three: 3 };
    const total = reduce(obj, fn, 0, ctx);

    expect(total).toBe(6);
    expect(fn.mock.instances[0]).toBe(ctx);
  });

  it("should support list without memo", () => {
    const fn = jest.fn((memo: number, num: number) => memo + num);

    const list = [1, 2, 3, 4, 5];
    const total = reduce(list, fn);

    expect(total).toBe(15);
  });

  it("should support obj without memo", () => {
    const fn = jest.fn((memo: number, num: number) => memo + num);

    const obj = { one: 1, two: 2, three: 3 };
    const total = reduce(obj, fn);

    expect(total).toBe(6);
  });
});
