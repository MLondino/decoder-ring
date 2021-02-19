// Write your tests here!
const substitution = require("../src/substitution")
const expect = require("chai").expect

describe("substitution", () => {
    it("error handling", () => {
        it("It should return false if the substitution alphabet is missing", () => {
            const input = "hello world"
            const expected = false
            const actual = substitution(input)
            expect(actual).to.eql(expected)
        })
        it("It should return false if the substitution alphabet is not exactly 26 characters", () => {
            const input = "hello world"
            const alphabet = "abcdefghijklmnopqrstuvwx"
            const expected = false
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
        it("It should return false if the substitution alphabet does not contain unique characters", () => {
            const input = "hello world"
            const alphabet = "ayxwvutsrqponmlkjihgfedcba"
            const expected = false
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
    })
    it("encoding a message", () => {
        it("It should encode a message by using the given substitution alphabet", () => {
            const input = "hello world"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "svool dliow"
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
        it("It should work with any kind of key with unique characters", () => {
            const input = "hello world"
            const alphabet = "zyxwvutsrqp#nm%kjihgfedcba"
            const expected = "sv##% d%i#w"
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
        it("It should preserve spaces", () => {
            const input = "hello world"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "svool dliow"
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
        it("It should ignore capital letters", () => {
            let input = "HeLlO wOrLd"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "svool dliow"
            const actual = substitution(input, alphabet)
            expect(actual).to.eql(expected)
        })
    })
    it("decoding a message", () => {
        it("It should decode a message by using the given substitution alphabet", () => {
            const input = "svool dliow"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "hello world"
            const actual = substitution(input, alphabet, false)
            expect(actual).to.eql(expected)
        })
        it("It should work with any kind of key with unique characters", () => {
            const input = "sv##% d%i#w"
            const alphabet = "zyxwvutsrqp#nm%kjihgfedcba"
            const expected = "hello world"
            const actual = substitution(input, alphabet, false)
            expect(actual).to.eql(expected)
        })
        it("It should preserve spaces", () => {
            const input = "svool dliow"
            const alphabet = "zyxwvutsrqponmlkjihgfedcba"
            const expected = "hello world"
            const actual = substitution(input, alphabet, false)
            expect(actual).to.eql(expected)
        })
    })
})