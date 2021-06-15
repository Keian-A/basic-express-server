'use strict';

const auth = require('../src/middlewares/validator.js');

describe('testing middleware validator function', () => {
  test('auth checks for name query, calls next', () => {

    // Populates test data for running the following tests here
    let requestObject = {
      query: {
        name: 'test',
      }
    }
    let responseObject = {};
    let nextFunction = jest.fn();

    // Does a "mock" request using the previously defined data, and runs tests below
    auth(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
  });
});