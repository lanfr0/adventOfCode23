const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const timesAndDistances = input.map((vv) => vv.split(':')[1].trim().split(' ').filter((vv) => vv !== ''))
const times = timesAndDistances[0]
const distances = timesAndDistances[1]

const recordBeated = []
times.forEach((_, index) => {
    const time = times[index]
    const distance = distances[index]

    let res = 0
    for (i = 0; i <= time; i++) {
        const a = (time - i) * i
        if (a > distance) {
            res += 1
        }
    }
    recordBeated.push(res)
})
const res1 = recordBeated.reduce((a, cv) => a *= cv)

const time2 = times.reduce((a, cv) => a += cv)
const distance2 = distances.reduce((a, cv) => a += cv)

let res = 0
for (i = 0; i <= time2; i++) {
    const a = (time2 - i) * i
    if (a > distance2) {
        res += 1
    }
}
console.log(res)