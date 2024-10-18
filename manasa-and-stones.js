// Personal Answer

function stones(n, a, b) {
    
    let nonZeroStones = n - 1
        console.log(`NonZero Stone: ${nonZeroStones}`)
    let totalStones = n
        console.log(`Total Stones: ${totalStones}`)
    
    let differenceA = a
        console.log(`Difference A: ${differenceA}`)
    let differenceB = b
        console.log(`Difference B: ${differenceB}`)
    
    let potentialOutcomes = nonZeroStones * 2
        console.log(`Potential Outcomes: ${potentialOutcomes}`)
    
    let potentialAnswers = []
    console.log(`Initial Potential Answers: ${potentialAnswers}`)
    
    for (let i = 0; i < totalStones; i++) {
        let permutation = differenceA * (nonZeroStones - i) + differenceB * (i)
        if (!potentialAnswers.includes(permutation)) {
            potentialAnswers.push(permutation)
        }
        console.log(potentialAnswers)
    }
    
    console.log(`Final Sorted Potential Answers: ${potentialAnswers.sort((a, b) => a - b)}`)
    return potentialAnswers.sort((a, b) => a - b)
}
