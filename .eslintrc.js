module.exports = {
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "cypress/globals": true
  },
  "extends": ["plugin:cypress/recommended", "plugin:chai-friendly/recommended"],
  "plugins": [
    "cypress",
    "chai-friendly"
  ],
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "warn",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "warn",
    "cypress/no-pause": "error",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": "off"
  }
}