module.exports = {
  transform: { "^.+\\.tsx?$": "ts-jest" },
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/styleMock.js" },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],
  testEnvironment: "jsdom"
};