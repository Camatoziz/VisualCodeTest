function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    for (var i = sonYearsOld, j = dadYearsOld; i >= 0; i--, j--) {
        if (j/i == 2) {
            return Math.abs(dadYearsOld - j)
            break
        }

    }
    for (var i = sonYearsOld, j = dadYearsOld; j < 150; i++, j++ ) {
        if (j/i == 2) {
            return Math.abs(dadYearsOld - j)
            break
        }
    }
}