const randomNumber = require("./index.js");

describe("Random number generator", () => {

test('It should run with valid input', () => {
    expect(randomNumber(1, 10)).toBeTruthy();
});

test('It should run with valid input', () => {
    expect(randomNumber("nikunj", "patel")).toBeTruthy();
});
  
});
