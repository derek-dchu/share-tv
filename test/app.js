"use strict";

var app = require('../app'),
    request = require('supertest');


describe('/ endpoint', function() {
  it('should return a 200 status code', function(done) {
    request(app)
        .get('/')
        .expect(200, done);
  });
});
