const baseConfig = require('@adobe-commerce/elsie/config/jest');

module.exports = {
  ...baseConfig,

  setupFiles: [
    ...baseConfig.setupFiles,
    '<rootDir>/tests/__mocks__/browserMocks.ts',
  ],

  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!./src/**/index.ts',
  ],

  coverageThreshold: {
    global: {
      branches: 20,
      functions: 80,
      lines: 70,
      statements: 70,
    },
  },
};
