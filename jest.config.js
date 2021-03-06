module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'build/src/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      "branches": 95,
      "functions":95,
      "lines": 95,
      "statements": -10
    }
  },
  coverageReporters: [
    'html',
    'text'
  ]
};
