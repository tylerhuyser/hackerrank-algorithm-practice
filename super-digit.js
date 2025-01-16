function superDigit(n, k) {
    
    let initialSum = n.split('').reduce((sum, digit) => sum + parseInt(digit), 0) * k;
    
    while (initialSum > 9) {
    
        initialSum = initialSum
            .toString()
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    return initialSum
}
