'use strict';

const greet = module.exports = (name) => { // eslint-disable-line
  return typeof name === 'string' ? `hello ${name}` : null;
};
