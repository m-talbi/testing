const { stringLength, reverseString, capitalize, calculator } = require("./index")

test("Function should throw error if string is empty or has more than 10 characters", () => {
  expect(() => stringLength("hello World!")).toThrow();
});
test("Function should return reversed string", () => {
  expect(reverseString("hello")).toBe("olleh")
});

describe("Convert to uppercase", () => {
  test("Throw error if first character is not a string", () => {
    expect(() => capitalize("1ello")).toThrow();
  })
  test("Function should return capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello")
  });
});

describe("Calculator Add method", () => {
  test("10 + 10 should return 20", () => {
    expect(calculator.add(10, 10)).toBe(20)
  });
  test("35 + 20 should return 55", () => {
    expect(calculator.add(35, 20)).toBe(55)
  });
  test("7 + 8 should return 15", () => {
    expect(calculator.add(7, 8)).toBe(15)
  });
});

describe("Calculator subtract method", () => {
  test("10 - 10 should return 0", () => {
    expect(calculator.subtract(10, 10)).toBe(0)
  });
  test("40 - 25 should return 15", () => {
    expect(calculator.subtract(40, 25)).toBe(15)
  });
  test("7 - 11 should return -4", () => {
    expect(calculator.subtract(7, 11)).toBe(-4)
  });
});

describe("Calculator multiply method", () => {
  test("10 * 10 should return 100", () => {
    expect(calculator.multiply(10, 10)).toBe(100)
  });
  test("4 * 6 should return 24", () => {
    expect(calculator.multiply(4, 6)).toBe(24)
  });
  test("7 * 10 should return 70", () => {
    expect(calculator.multiply(7, 10)).toBe(70)
  });
});

describe("Calculator divide method", () => {
  test("100 / 10 should return 10", () => {
    expect(calculator.divide(100, 10)).toBe(10)
  });
  test("12 / 3 should return 4", () => {
    expect(calculator.divide(12, 3)).toBe(4)
  });
  test("15 / 3 should return 5", () => {
    expect(calculator.divide(15, 3)).toBe(5)
  });
});