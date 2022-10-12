// function solution(A) {
//     for (let i = 1; i < 100000; i++) { // Iterate from lower bound to upper bound
//         if (!A.includes(i)) return i; // Check for first available number
//     }
// }

let testString1 = 'Hello, world'
let testString2 = 'racecar'

function solution(S) {
    if (S.split('').reverse().join('') === S) {
        return (Math.floor(S.length / 2))
    } else {
        return -1
    }
}

console.log(solution(testString1))
console.log(solution(testString2))
