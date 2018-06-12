'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  return (typeof num1 === 'number' && typeof num2 === 'number') ? num1 + num2 : null;
};

arithmetic.sub = (num1, num2) => {
  return (typeof num1 === 'number' && typeof num2 === 'number') ? num2 - num1 : null;
};
