function towerBreakers(n, m) {
    if (m === 1) {
        return 2
    } else if (n % 2 === 0) {
        return 2
    } else if (n % 2 !== 0) {
        return 1
    }
}
