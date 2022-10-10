let testString = '6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr'
let testString2 = 'A'

function caesarCipher(s, k) {
    k = k % 26;
    let answerArray = []
    for (let i = 0; i < s.length; i++) {
        let A = ''
        // if (s.charCodeAt(i) < )
        let n = s.charCodeAt(i)
        if (n > 64 && n < 91 || n > 96 && n < 123) {
            n += k
            if ((n > 90 && n < 97) || (n > 122) || (n < 91 && n + k > 96 && k < 7)) {
                n -= 26
            }
            A = String.fromCharCode(n)
        } else {
            A = s[i]
        }
        // console.log(A)
        answerArray.push(A)
    }
    return answerArray.join('')
    // console.log(answerArray.join(''))
}

console.log(caesarCipher(testString, 87))

'6MFE95QigCLQY85mee3WH2laic1jX8s6p2iBMeODrSs6GFMuIeWWa'
'6MFE95QigCLQY85mee3Wb2laic1jX8s6p2iBMeODrSs6aFMuceWWa'