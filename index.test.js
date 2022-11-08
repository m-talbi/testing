const { stringLength, reverseString, capitalize, calculator } = require("./index")

test("Function should throw error if string is empty or has more than 10 characters", () => {
  expect(() => stringLength("hello World!")).toThrow();
});
test("Function should return reversed string", () => {
  expect(reverseString("hello")).toBe("olleh")
});

describe("Convert to uppercase", () => {
  test("First character should be a letter", () => {
    expect(capitalize("hello")[0]).not.toMatch(/[0-9]/)
  })
  test("Function should return capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello")
  });
});

describe("Calculator object", () => {
  test("Add method should return the sum of numbers", () => {
    expect(calculator.add(10, 10)).toBe(20)
  });
  test("substract method should return num1 substracted by num2", () => {
    expect(calculator.subtract(20, 10)).toBe(10)
  });
  test("Multiply method should return num1 times num2", () => {
    expect(calculator.multiply(10, 10)).toBe(100)
  });
  test("Divide method should return num1 divided by num2", () => {
    expect(calculator.divide(100, 10)).toBe(10)
  });
})