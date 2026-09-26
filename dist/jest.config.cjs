module.exports = {
  testEnvironment: "node",
  transform: {},
  testMatch: ["**/tests/**/*.test.js"],
  collectCoverageFrom: [
    "utilities.js",
    "enums.js",
    "types-guard.js",
    "types.js"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcov"]
};