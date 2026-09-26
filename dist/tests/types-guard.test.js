import {isString,isNumber,isValidAnswer,getValueType,isPositiveNumber,formatValue} from "../types-guard.js";

// isString()
test("isString returns true for a string", () => {
  expect(isString("Avinash")).toBe(true);
});

test("isString returns false for a number", () => {
  expect(isString(123)).toBe(false);
});

test("isString returns false for a boolean", () => {
  expect(isString(true)).toBe(false);
});

// isNumber()
test("isNumber returns true for a number", () => {
  expect(isNumber(123)).toBe(true);
});

test("isNumber returns false for a string", () => {
  expect(isNumber("123")).toBe(false);
});

test("isNumber returns false for a boolean", () => {
  expect(isNumber(true)).toBe(false);
});

// isValidAnswer()
test("isValidAnswer returns true for a valid string", () => {
  expect(isValidAnswer("Hello")).toBe(true);
});

test("isValidAnswer returns false for an empty string", () => {
  expect(isValidAnswer("")).toBe(false);
});

test("isValidAnswer returns false for whitespace", () => {
  expect(isValidAnswer("   ")).toBe(false);
});

test("isValidAnswer returns false for a number", () => {
  expect(isValidAnswer(123)).toBe(false);
});

test("isValidAnswer returns false for a boolean", () => {
  expect(isValidAnswer(true)).toBe(false);
});

// getValueType()
test("getValueType returns string", () => {
  expect(getValueType("Avinash")).toBe("string");
});

test("getValueType returns number", () => {
  expect(getValueType(123)).toBe("number");
});

test("getValueType returns boolean", () => {
  expect(getValueType(true)).toBe("boolean");
});

test("getValueType returns other for null", () => {
  expect(getValueType(null)).toBe("other");
});

test("getValueType returns other for an object", () => {
  expect(getValueType({ name: "Avinash" })).toBe("other");
});

// isPositiveNumber()
test("isPositiveNumber returns true for a positive number", () => {
  expect(isPositiveNumber(10)).toBe(true);
});

test("isPositiveNumber returns false for zero", () => {
  expect(isPositiveNumber(0)).toBe(false);
});

test("isPositiveNumber returns false for a negative number", () => {
  expect(isPositiveNumber(-5)).toBe(false);
});

test("isPositiveNumber returns false for a string", () => {
  expect(isPositiveNumber("10")).toBe(false);
});

// formatValue()
test("formatValue formats a string", () => {
  expect(formatValue("Hello")).toBe("Text: Hello");
});

test("formatValue formats a number", () => {
  expect(formatValue(123)).toBe("Number: 123");
});

test("formatValue formats a boolean", () => {
  expect(formatValue(true)).toBe("Boolean: true");
});

test("formatValue formats false", () => {
  expect(formatValue(false)).toBe("Boolean: false");
});