module.exports = {
  modulePaths: ['<rootDir>'],
  rootDir:'__tests__',
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },

  // coverageThreshold: {
  //   global: {
  //     statements: 80,
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //   },
  // },

  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'App Tests',
        outputDirectory: '.',
        outputName: './test-coverage/junit.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['./**/*.test.jsx'],
      setupFilesAfterEnv: ['<rootDir>/test/dom.setup.js'],
      transform: {
        '^.+\\.js(x?)$': ['@swc/jest'],
      },
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['./**/*.test.js'],
      setupFilesAfterEnv: ['<rootDir>/test/node.setup.js'],
      transform: {
        '^.+\\.js(x?)$': [
          '@swc-node/jest',
          {
            jsx: true,
          },
        ],
      },
    }
  ]
}
