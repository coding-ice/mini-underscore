import { describe, expect, it } from "@jest/globals";
import contains from "../contains";

describe("contains", () => {
  it("should work when list", () => {
    const signial1 = contains([1, 2, 3, 0], 2);
    expect(signial1).toBeTruthy();

    const signial2 = contains([1, 2, 3, 0], 3, 3);
    expect(signial2).toBeFalsy();
  });

  it("should work when obj", () => {
    const signial = contains({ name: "ice" }, "ice");
    expect(signial).toBeTruthy();
  });
});
