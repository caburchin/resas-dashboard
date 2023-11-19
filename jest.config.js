const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.polyfill.js'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

module.exports = createJestConfig(config);
