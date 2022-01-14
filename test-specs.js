const { assertEquals } = require("./test-frameworks.js");
const { scrabble } = require("./test-utils.js");

const check1 = () => {
    // arrange
    const expected = 0;
    const text1 = null;

    // act
    const actual = scrabble(text1);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check2 = () => {
    // arrange
    const expected = 0;
    const text2 = "";

    // act
    const actual = scrabble(text2);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check3 = () => {
    // arrange
    const expected = 0;
    const text3 = " \t\n";

    // act
    const actual = scrabble(text3);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check4 = () => {
    // arrange
    const expected = 1;
    const text4 = "a";

    // act
    const actual = scrabble(text4);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check5 = () => {
    // arrange
    const expected = 2;
    const text5 = "it";

    // act
    const actual = scrabble(text5);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check6 = () => {
    // arrange
    const expected = 6;
    const text6 = "street";

    // act
    const actual = scrabble(text6);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check7 = () => {
    // arrange
    const expected = 22;
    const text7 = "quirky";

    // act
    const actual = scrabble(text7);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

const check8 = () => {
    // arrange
    const expected = 41;
    const text8 = "OXYPHENBUTAZONE";

    // act
    const actual = scrabble(text8);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Result should be ${expected}: ${result}`);

}

module.exports = { check1, check2, check3, check4, check5, check6, check7, check8 };