// Solution

function happyLadybugs(b) {
    
    let gameBoard = b
        console.log(gameBoard)
    
    let occurences = gameBoard.split("").reduce((accumulator, currentValue) => {
        
            accumulator[currentValue] = ( accumulator[currentValue] || 0) + 1;
        return accumulator
    }, {})
        console.log(occurences)
    delete occurences["_"]
        console.log(occurences)
    
    let uniqueOccurences = Object.values(occurences)
        console.log(uniqueOccurences)
    
    if (uniqueOccurences.includes(1)) {
        console.log(`If Condition 1: Letter Occurs Once`)
        return "NO"
    } else if (gameBoard.includes("_")) {
        console.log(`If Condition 2: No Single-Occuring Letters and Free Space (i.e., "_")`)
        return "YES"
    } else if (!gameBoard.includes("_") && uniqueOccurences.length === 1) {
        console.log(`If Condition 3: No Free Spaces, but Only One Type of Character`)
      return "YES" 
    } else {
        console.log(`If Condition 4: FOR Loop`)
        for (let i = 1; i < gameBoard.length - 1; i++) {
            
            let currentValue = gameBoard[i]
            let previousValue = gameBoard[i - 1]
            let nextValue = gameBoard[i + 1]
            
            if (currentValue !== previousValue && currentValue !== nextValue) {
               return "NO" 
            }
        }
        
        return "YES"
        
    }
    
} 
