const {shuffleArray} = require('./utils')


let testData = [2, 4, 6, 7, 25];

describe('shuffleArray should', () => {

    test('testing that this function returns an array', () => {
        let shuffledArr = shuffleArray(testData);
        expect(Array.isArray([shuffledArr])).toBe(true);
    })

    test('testing for same length arrary', () => {
        let shuffledArr = shuffleArray(testData);
        expect(shuffledArr.length).toBe(testData.length);
    })

})