const myArray = [1, 1, 3, 2, 1];

function countingSort(arr) {
    let answer = []
    answer.length = 100
    for (let i = 0; i < 100; i++) {
        answer[i] = 0;
    }
    arr.forEach((item) => {
        answer[item]++
    })
    return (answer)
}
countingSort(myArray)