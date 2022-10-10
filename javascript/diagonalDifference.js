let myArray = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {

    let first = 0
    let second = 0

    for (var i = 0; i < arr.length; i++) {
        first += arr[i][i]
        second += arr[i][(arr[i].length - 1) - i]
    }
    return Math.abs(second - first)
}

console.log(diagonalDifference(myArray))