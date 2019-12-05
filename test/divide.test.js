const expect = require('chai').expect;  //is the combined version of the below 2
// const chai = require('chai');
// const expect = chai.expect;

const divide = require('../index.js');

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        //define inputs
        const a = 8;
        const b = 4
        const expectedAnswer = 2;

        //invoke the function
        const actualAnswer = divide(a, b);

        //assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer)
    })

    it('should throw an error when divided by zero', () => {
        //define inputs
        const a = 8, b = 0;

        //set up the function call
        const fn = () => {
            divide(a, b)
        }

        //assert that exception is thrown
        expect(fn).to.throw();
    })
})


// The above is the longer way to write the tests. Here is the consise version:

// const expect = require('chai').expect;
// const divide = require('../index');

// describe('Divide function', () => {
//     it('should divide positive integers correctly', () => {
//         expect(divide(8, 4)).to.equal(2);
//     })

//     it('should throw an error when divided by zero', () => {
//         expect( () => { divide(8, 0) }).to.throw();
//     })
// })