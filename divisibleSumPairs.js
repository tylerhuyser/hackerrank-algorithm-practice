function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i < (i.length - 1); i++) {
        for (let j = (i + 1); j < (i.length); j++) {
            if (((ar[i] + ar[j]) % k) === 0) {
                count ++
            }
        }
    }
    return count
}
