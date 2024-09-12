import { describe, expect, it } from "@jest/globals";
import shuffle from "../shuffle";

describe("shuffle", () => {
  it("should shuffle an array", () => {
    const list = [1, 2, 3, 4, 5];
    // 进行一层浅拷贝，防止 list 被修改
    const shuffled = shuffle([...list]);

    expect(list).not.toEqual(shuffled);
  });
});
