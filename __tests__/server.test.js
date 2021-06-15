'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server route handling test suite', () => {
  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(500);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });

  it('/ works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(500);
  });

  it('/person works', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(typeof response.body).toEqual('object');
  });
});