'use strict';

let validator = module.exports = {};


// class Validator {

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

validator.Valid = () => {
  return true;
};

validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};







