/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const postcssImport = require('postcss-import');
const flexBugs = require('postcss-flexbugs-fixes');

module.exports = {
  ident: 'postcss',
  flexbox: 'no-2009',
  plugins: [
    postcssImport({ root: path.join(__dirname, 'src') }),
    flexBugs(),
  ],
};
