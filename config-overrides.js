const { useBabelRc, useEslintRc, override } = require('customize-cra');

module.exports = override(useBabelRc(), useEslintRc());
