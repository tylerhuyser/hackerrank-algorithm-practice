function bonAppetit(bill, k, b) {
    
    // console.log(bill)
    // console.log(k)
    // console.log(b)
    
    let billTotal = bill.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    // console.log(billTotal)
    
    let annaContribution = (billTotal - bill[k]) / 2
    
    // console.log(annaContribution)
    
    if (b - annaContribution === 0) {
        console.log('Bon Appetit')
    } else if (b - annaContribution !== 0) {
        console.log(b - annaContribution)
    }
} 
