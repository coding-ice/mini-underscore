import { describe, expect, it } from "@jest/globals";
import sample from "../sample";

describe("simple", () => {
  it("should a sample", () => {
    const list = [1, 2, 3, 4, 5];
    const res = sample(list);
    expect(list).toContain(res);
  });

  it("should sample list", () => {
    const list = [1, 2, 3, 4, 5];
    const res = sample(list, 2);

    expect(res).toEqual(expect.arrayContaining(res));
  });
});
