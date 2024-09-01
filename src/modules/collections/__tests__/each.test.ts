import each from "../each";
import { jest, it, expect, describe } from "@jest/globals";

describe("each", () => {
  it("should support list and ctx", () => {
    const fn = jest.fn();
    const list = [1, 2, 3];
    const ctx = { name: "ice" };
    const res = each(list, fn, ctx);

    expect(fn.mock.calls).toHaveLength(3);

    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[0][1]).toBe(0);
    expect(fn.mock.calls[0][2]).toEqual(list);

    expect(res).toEqual(list);
    expect(fn.mock.instances[0]).toEqual(ctx);
  });

  it("should support obj and ctx", () => {
    const fn = jest.fn();
    const obj = { name: "panpan", age: 24 };
    const ctx = { name: "ice" };
    const res = each(obj, fn, ctx);

    expect(fn.mock.calls).toHaveLength(2);

    expect(fn.mock.calls[0][0]).toBe("panpan");
    expect(fn.mock.calls[0][1]).toBe("name");
    expect(fn.mock.calls[0][2]).toEqual(obj);

    expect(res).toEqual(obj);
    expect(fn.mock.instances[0]).toEqual(ctx);
  });
});
