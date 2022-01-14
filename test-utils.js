const scrabble = (text) => {
    const score = ["", "AEIOULNRST", "DG", "BCMP", "FHVWY", "K", "", "", "JX", "", "QZ"]; // to store the scores for each letter in an array - each index represents their respective score
    const specialRegex = /[^A-Z a-z0-9]/; // to check if input contains special characters/ escape

    let acc = 0; // to initialize the score

    if (typeof text === "string" && specialRegex.test(text) === false) {
        return [...text.toUpperCase()].reduce((acc, letter) => {
            acc += score.findIndex((scrabble) => scrabble.includes(letter));
            return (acc);
        }, 0)

    } else {
        acc === 0;
        return (acc);
    };


};

//console.log(scrabble("OXYPHENBUTAZONE"));

module.exports = { scrabble };