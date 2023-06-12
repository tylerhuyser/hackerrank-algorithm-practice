function sockMerchant(n, ar) {
    // Write your code here
    let unique = [... new Set(ar)]
    let totalPairs = 0 
    
    unique.map((uniqueValue) => {
        let subTotal = ar.filter(value => value === uniqueValue).length
        if (subTotal % 2 === 0) {
            totalPairs = totalPairs + (subTotal / 2)
        } else {
            totalPairs = totalPairs + ((subTotal - 1) / 2)
        }
    })
    
    return totalPairs
}
