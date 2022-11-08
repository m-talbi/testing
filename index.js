const stringLength = (text) => {
  if (text.length && text.length < 10) return true 
  throw new Error("text length is more than 10 characters");
}

const reverseString = (text) => text.split("").reverse().join("");

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const calculator = {
  add(x, y) {
    return x + y
  },
  subtract(x, y) {
    return x - y
  },
  multiply(x, y) {
    return x * y
  },
  divide(x, y) {
    return x / y
  }
}

module.exports = {
  stringLength,
  reverseString,
  capitalize,
  calculator
}