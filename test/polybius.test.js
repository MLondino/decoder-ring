// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    describe("encoding a message", () => {
        it("It should encode a message by translating each letter to number pairs", () => {
            let input = "hello world"
            let expected = "3251131343 2543241341"
            let actual = polybius(input, true)
            expect(actual).to.eql(expected)
        })
        it("It should translate both 'i' and 'j' to 42", () => {
            let input = "j i"
            let expected = "42 42"
            let actual = polybius(input, true)
            expect(actual).to.eql(expected)
        })
        it("It should leave spaces as is", () => {
            let input = "hello world"
            let expected = "3251131343 2543241341"
            let actual = polybius(input, true)
            expect(actual).to.eql(expected)
        })
        it("It should ignore capital letters", () => {
            let input = "HeLlO wOrLd"
            let expected = "3251131343 2543241341"
            let actual = polybius(input, true)
            expect(actual).to.eql(expected)
        })
    })
    describe("decoding a message", () => {
        it("It should decode a message by translating each pair of numbers into a letter", () => {
            let input = "3251131343 2543241341"
            let expected = "hello world"
            let actual = polybius(input, false)
            expect(actual).to.eql(expected)
        })
        it("It should translate 42 to (i/j)", () => {
            let input = "42 42"
            let expected = "(i/j) (i/j)"
            let actual = polybius(input, false)
            expect(actual).to.eql(expected)
        })
        it("It should return false when given a string that contains an odd amount of characters excluding spaces", () =>{
            let input = "112131415 2122232425"
            let expected = false
            let actual = polybius(input, false)
            expect(actual).to.eql(expected)
        })
    })
})