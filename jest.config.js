module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    //Add the lines below
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@theme/(.*)$": "<rootDir>/theme/$1",

    // files to ignore
    ".(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    ".(css|less)$": "<rootDir>/tests/__mocks__/fileMock.js",
  },
};
