function plusMinus(arr) {
    let ratios = [];
    const numberOfElements = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < numberOfElements; i++) {
        if (arr[i] < 0) negativeCount++;
        else if (arr[i] > 0) positiveCount++;
        else zeroCount++;
    };
    console.log(positiveCount / numberOfElements);
    console.log(negativeCount / numberOfElements);
    console.log(zeroCount / numberOfElements);
}