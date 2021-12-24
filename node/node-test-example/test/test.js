var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;
var app = require('../app')

/* see https://www.chaijs.com/ */

var person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "Century Park",
        no: "89 A"
    },
    grades: [8, 9, 9],
    isValid: true,
}

describe('Test suite 1', function () {
    describe('indexOf function', function () {
        it('should return 2 as index of 3', function () {
            assert.equal([1, 2, 3, 4, 5].indexOf(3), 2)
        })
    })
    describe('Person object tests', function () {
        describe('Person first and last name test', function () {
            it('the name should be John Doe', function () {
                assert.equal(person.firstName, "John")
                assert.equal(person.lastName, "Doe")
            })
        })

        describe('Object and properties test', function () {
            it('person should be a valid object', function () {
                expect(person).to.be.an('object')
                expect(person).to.have.property('address').that.is.an('object')
                expect(person.address).to.have.property('street')
            })
        })

        describe('Array property test', function () {
            it('check the array property', function () {
                expect(person.grades).to.deep.equal([8, 9, 9])
            })
        })
        describe('Property type test', function () {
            it('the first name property should be a string', function () {
                expect(person.firstName).to.be.a('string')
            })
        })
    })
    describe('Hello world test', function () {
        it('should return Hello Kitty', function () {
            assert.equal(app.hello("Kitty"), 'Hello Kitty!')
        })
    })
    describe('Triple the numbers', function () {
        it('should return 3 x number', function () {
            for (let i = 1; i <= 5; i++) {
                assert.equal(app.triple(i), i * 3)
            }
        })
    })
})
