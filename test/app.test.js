const app = require('../app.js');
const assert = require('chai').assert

describe('App', () => {
    it('app should return 4', () => {
        let result = app();
        assert.equal(4, result);
    })
});