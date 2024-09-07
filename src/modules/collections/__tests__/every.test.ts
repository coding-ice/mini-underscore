import { describe, expect, it } from "@jest/globals";
import every from "../every";

describe("every", () => {
  it("should work list or obj", () => {
    expect(every([1, 2, 3, 4, 5], (val) => val > 0)).toBeTruthy();
    expect(every({ age: 0 }, (val) => val > 0)).toBeFalsy();
  });

  it("should work when list or obj is undef", () => {
    expect(every([1, 2, 3, 4, 5])).toBeTruthy();
    expect(every({ age: 0 })).toBeFalsy();
  });
});
