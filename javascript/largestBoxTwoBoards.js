function largestBoxTwoBoards(A, B) {
    let totalLength = A + B;
    let maxImpossibleLength = Math.floor(totalLength / 4)
    for (let i = maxImpossibleLength; i > 0; i--) {
        let maxLengthA = Math.floor(A / maxImpossibleLength);
        let maxLengthB = Math.floor(B / maxImpossibleLength);
        if (maxLengthA + maxLengthB >= 4) {
            return maxImpossibleLength
        }
    }
    return maxImpossibleLength;
}

// not working yet