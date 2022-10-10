function lonelyinteger(a) {

    a = a.sort((a, b) => { return a - b })

    for (var i = 0; i < a.length; i += 2) {
        if (a[i + 1] != a[i]) {
            return a[i]
        }
    }
}