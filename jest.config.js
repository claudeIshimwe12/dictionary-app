/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
