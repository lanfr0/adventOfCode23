const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const redCubesLimit = 12;
const greenCubesLimit = 13;
const blueCubesLimit = 14;

const regex = /\s*(?:; )|(?:, )/gm

const answer1 = input.reduce((acc, currentValue, currentIndex) => {
    const cubesSet = currentValue.split(':')[1].trimStart().split(";");
    const res = cubesSet.every((cs) => {
        const cubes = cs.trimStart().split(regex);

        const green = exploreCubes(cubes, 'green', greenCubesLimit)
        const red = exploreCubes(cubes, 'red', redCubesLimit)
        const blue = exploreCubes(cubes, 'blue', blueCubesLimit)

        return green.valid && red.valid && blue.valid
    })

    if (res) {
        return acc + currentIndex + 1;
    } else {
        return acc
    }
}, 0);


function exploreCubes(currentCubes, color, limit) {
    let sum = 0;
    currentCubes.forEach(element => {
        const expandElement = element.split(' ');
        if (expandElement[1] == color) {
            sum += Number(expandElement[0])
        }
    });

    return { sum: sum, valid: sum <= limit };
}

const answer2 = input.reduce((acc, currentValue, currentIndex) => {
    const cubes = currentValue.split(':')[1].trimStart().split(regex);

    const green = findMax(cubes, 'green')
    const red = findMax(cubes, 'red')
    const blue = findMax(cubes, 'blue')

    const power = green * red * blue

    return acc + power;
}, 0);

function findMax(currentCubes, color) {
    let max = 0;

    currentCubes.forEach((element) => {
        const expandElement = element.split(' ');
        if (expandElement[1] == color) {
            max = Math.max(max, expandElement[0])
        }
    })

    return max;
}