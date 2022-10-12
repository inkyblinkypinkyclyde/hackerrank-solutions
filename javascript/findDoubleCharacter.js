function findDoubleCharacter(S) {
    S = S.split('')
    S.filter((item, index) => S.indexOf(item) != index)
    return S[0]
}