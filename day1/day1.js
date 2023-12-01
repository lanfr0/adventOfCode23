
const fs = require('fs')

const regex = /[0-9]/g;

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
const answer1 = input.reduce((acc, currentValue) => {
    let textNumbers = currentValue.match(regex);
    let concatNum = parseInt(textNumbers[0] + textNumbers[textNumbers.length - 1]);
    return acc + concatNum;
}, 0);

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']

const smallInput = ['two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen']
const regex2 = /(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(zero)/g;
const answer2 = smallInput.reduce((acc, currentValue) => {
    console.log(currentValue.match(regex2))
    return 0
}, 0)