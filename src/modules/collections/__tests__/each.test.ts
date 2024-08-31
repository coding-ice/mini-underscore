import each from "../each";
import { jest, test, expect } from "@jest/globals";

const fn = jest.fn();

test("should support list", () => {
  each([1, 2, 3], fn);

  expect(fn.mock.calls).toHaveLength(3);
});
