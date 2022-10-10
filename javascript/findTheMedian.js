function findMedian(arr) {
    arr.sort(function (a, b) { return a - b; })
    let len = arr.length
    return arr[Math.floor(len / 2)]
}