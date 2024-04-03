import { describe, expect, test } from "@jest/globals";
import subs from './subtraction';
describe("subtract value", () => {
    test("Subtract 10 - 5", () => {
        expect(subs(10, 5)).toBe(5)
    })
})