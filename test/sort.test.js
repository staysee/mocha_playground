const sort = require('../sort.js');
const expect = require('chai').expect;

describe('Sort function', () => {
    it('sort the array in ascending order', () => {
        expect(sort([1, 4, 27, 18, 3])).to.deep.equal([1, 3, 4, 18, 27]);
    })
})