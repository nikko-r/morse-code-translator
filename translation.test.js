import { expect, it } from "@jest/globals";

/// Write a function
//Check that translation gives the right output
// IMport the translate function to test it
//Write a test, that when given the string "hello" we get ".... . .-.. .-.. ---" back as an output

it("Should translate hello to .... . .-.. .-.. ---", () => {
    const result = fnTranslateEngToMorse("hello");

    expect(result).toBe(".... . .-.. .-.. ---");
});

it("Should not allow invalid characters", () => {
    const result = fnTranslateEngToMorse("!");

    expect(result).toBe("Cannot contain invalid Character");
});

it("Should allow for either case", () => {
    const result = fnTranslateEngToMorse("HEllo");

    expect(result).toBe(".... . .-.. .-.. ---");
});