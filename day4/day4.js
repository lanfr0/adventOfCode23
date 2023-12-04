const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const answer1 = input.reduce((acc, currentValue) => {
    const card = currentValue.split(':')[1].trimStart().split("|");

    const cardNumbers = card[0].split(" ").filter((v) => v !== '');
    const winningNumbers = card[1].split(" ").filter((v) => v !== '');

    const res = cardNumbers.reduce((acc, cNums) => {
        if (winningNumbers.find((wNums) => Number(wNums) == Number(cNums))) {
            return acc + 1
        } else {
            return acc
        }
    }, 0)

    return acc + (res > 0 ? 2 ** (res - 1) : 0)
}, 0);

let winningInstances = new Array(input.length).fill(1)
input.forEach((currentValue, index) => {
    const card = currentValue.split(':')[1].trimStart().split("|");

    const winningNumbers = card[0].split(" ").filter((v) => v !== '');
    const cardNumbers = card[1].split(" ").filter((v) => v !== '');

    const winning = cardNumbers.filter(num => winningNumbers.includes(num))

    if (winning.length > 0) {
        // Part 2
        winning.forEach((_, i) => {
            winningInstances[index + i + 1] += winningInstances[index]
        })
    }
});

const answer2 = winningInstances.reduce((acc, value) => acc + value)
console.log(answer2)