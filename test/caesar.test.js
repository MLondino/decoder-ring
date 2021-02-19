// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("It should return false when given a shift value of 0", () => {
        const input = "this is a test string"
        const expected = false
        const actual = caesar(input, 0)
        expect(actual).to.eql(expected)
    })
    it("It should return false when given a shift value less than -25", () => {
        const input = "this is a test string"
        const expected = false
        const actual = caesar(input, -28)
        expect(actual).to.eql(expected)
    })
    it("It should return false when given a shift value greater than 25", () => {
        const input = "this is a test string"
        const expected = false
        const actual = caesar(input, 28)
        expect(actual).to.eql(expected)
    })
    it("It should return false when not given a shift value", () => {
        const input = "this is a test string"
        const expected = false
        const actual = caesar(input)
        expect(actual).to.eql(expected)
    })
    it("It should maintain spaces and other non-alphabetic symbols", () => {
        const input = "this@ string, has. random/ symbols%"
        const expected = "uijt@ tusjoh, ibt. sboepn/ tzncpmt%"
        const actual = caesar(input, 1)
        expect(actual).to.eql(expected)
    })
    it("It should ignore capital letters", () => {
        const input = "ThIs Is A tEsT sTrInG"
        const expected = "uijt jt b uftu tusjoh"
        const actual = caesar(input, 1)
        expect(actual).to.eql(expected)
    })
    it("It should wrap around if the letter would be shifted off the alphabet (e.g a shift of 5 on the letter 'z' should give 'e')", () => {
        const input = "my string has zero faults"
        const expected = "pb vwulqj kdv chur idxowv"
        const actual = caesar(input, 3)
        expect(actual).to.eql(expected)
    })
    it("When decoding it should give the message back when given the same shift value", () => {
        const expected = "my string has zero faults"
        const input = "pb vwulqj kdv chur idxowv"
        const actual = caesar(input, 3, false)
        expect(actual).to.eql(expected)
    })
});