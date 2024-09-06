import { describe, expect, it } from "@jest/globals";
import where from "../where";

describe("where", () => {
  it("should work", () => {
    const res = [
      { name: "ice", age: 25, addr: "Hangzhou" },
      { name: "huan", age: 25, addr: "Hangzhou" },
    ];
    const list = [{ name: "panda", age: 24 }, ...res];

    expect(where(list, { addr: "Hangzhou", age: 25 })).toEqual(res);
  });
});
