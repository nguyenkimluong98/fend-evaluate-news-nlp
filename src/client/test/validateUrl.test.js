import { validateUrl } from "../js/validateUrl";

describe("Test validate url", () => {
	test("should url valid", () => {
		expect(validateUrl("https://vi.wikipedia.org/wiki/Ubuntu")) === true;
	});
	test("should url invalid", () => {
		expect(validateUrl("wiki/Ubuntu")) === false;
	});
});
