module.exports = {
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/lib/"
  ],
  testMatch: null,
  "testRegex": "(/test/.*|\\.(test|spec))\\.(js|jsx)$",
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "coverageDirectory": "coverage",
  "setupTestFrameworkScriptFile": "<rootDir>src/helpers/initTests.js"
};
