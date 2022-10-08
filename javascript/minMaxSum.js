let myArray = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    let sorted = arr.sort();
    let minArray = sorted
    let maxArray = sorted
    minArray = minArray.slice(0, arr.length - 1)
    maxArray = maxArray.slice(1, arr.length)
    console.log(minArray, maxArray)
    min = minArray.reduce((a, b) => a + b, 0)
    max = maxArray.reduce((a, b) => a + b, 0)
    console.log(min + " " + max);
}

function miniMaxSumAlt(arr) {
    console.log(arr.sort().slice(0, arr.length - 1).reduce((a, b) => a + b, 0) + " " + arr.sort().slice(1, arr.length).reduce((a, b) => a + b, 0));
}


miniMaxSumAlt(myArray)