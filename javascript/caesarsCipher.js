let testString = '6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr'
let testString2 = 'A'

function caesarCipher(s, k) {
    k = k % 26;
    let answerArray = []
    for (let i = 0; i < s.length; i++) {
        let A = ''
        // if (s.charCodeAt(i) < )
        let n = s.charCodeAt(i) // find unicode
        if (n > 64 && n < 91 || n > 96 && n < 123) { // if it is an ascii letter, not a special character
            let t = n //
            n += k // increment the value for that letter by k
            if (((n > 90 && n < 97) || (n > 122)) || (n > 97 && n - k < 90)) { // if the character is after Z but before a, or past z
                n -= 26 // subtract 26 from the letter(So that we start again with A/a.
            }

            if (n > 90 && n < 97)


                A = String.fromCharCode(n) //convert the unicode back to a character
        } else {
            A = s[i] // if it is a special character
        }
        // console.log(A)
        answerArray.push(A) // add the new character to the answer array
    }
    return answerArray.join('') // join the array into one string
    // console.log(answerArray.join(''))
}

console.log(caesarCipher(testString, 87))


// not working yet