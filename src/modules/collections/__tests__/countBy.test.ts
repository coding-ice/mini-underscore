import { describe, expect, it } from "@jest/globals";
import countBy from "../countBy";

describe("indexBy", () => {
  it("should work when has func", () => {
    const group = countBy([1, 2, 3, 4, 5], function (num) {
      return num % 2 == 0 ? "even" : "odd";
    });

    expect(group).toEqual({ odd: 3, even: 2 });
  });
});
