import { expect, test } from "bun:test";
import { add, div, sub } from "../lib";

test("add", () => {
	expect(add(2, 2)).toBe(4);
	expect(add(5, 8)).toBe(5 + 8);
	expect(add(2123, 321)).toBe(2123 + 321);
});

test("div", () => {
	expect(div(10, 2)).toBe(5);
	expect(div(100, 10)).toBe(10);
	expect(div(1000, 100)).toBe(10);
});

test("sub", () => {
	expect(sub(10, 2)).toBe(8);
	expect(sub(100, 10)).toBe(90);
	expect(sub(1000, 100)).toBe(900);
});
