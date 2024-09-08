import { describe, expect, it } from "@jest/globals";
import some from "../some";

describe("some", () => {
  it("should work when list", () => {
    const signial1 = some([1, 2, 3, 0]);
    expect(signial1).toBeTruthy();

    const signial2 = some([1, 2, 3, 6], (val) => val > 5);
    expect(signial2).toBeTruthy();
  });

  it("should work when obj", () => {
    const signial1 = some({ name: "ice" });
    expect(signial1).toBeTruthy();

    const signial2 = some({ name: "ice" }, (val) => val === "ice");
    expect(signial2).toBeTruthy();
  });
});
