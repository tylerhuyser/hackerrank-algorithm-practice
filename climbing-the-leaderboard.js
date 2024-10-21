// New Personal Solution (October):

function climbingLeaderboard(ranked, player) {
    
    console.log(`Initial Rankings: ${ranked}`)
    
    const uniqueRankings = [... new Set(ranked)]
    console.log(`Unique Rankings: ${uniqueRankings}`)
    
    const sortedUniqueRankings = uniqueRankings.sort((a, b) => b - a)
    console.log(`Sorted and Unique Rankings: ${sortedUniqueRankings}`)
    
    let playerScores = player
    console.log(`Player Scores: ${playerScores}`)
    const playerRankings = []
    console.log(`Initial Player Rankings: ${playerRankings}`)
    
    let currentHighScoreIndex = sortedUniqueRankings.length - 1
    console.log(`Current High Score Comparison Index: ${currentHighScoreIndex}`)
    
    for (let score of playerScores) {
        
        while (currentHighScoreIndex >= 0 && score >= sortedUniqueRankings[currentHighScoreIndex]) {
            console.log(`Still Analyzing Rankings`)
            currentHighScoreIndex--
            console.log(`New Index: ${currentHighScoreIndex}`)
        }
        
        playerRankings.push(currentHighScoreIndex + 2)
        console.log(`New Player Rankings: ${playerRankings}`)
        
    }
    
    return playerRankings
  
}

// Personal Solution (Too Much Processing Time):

function climbingLeaderboard(ranked, player) {
    let highscores = ranked
    console.log(`High Scores: ${highscores}`)
    // let sortedHighscores = highscores.sort((a,b) => a - b).reverse()
    // console.log(`Sorted High Scores: ${sortedHighscores}`)
    
    let playerScores = player
    let playerRankings = []
    let playerHighScore = 0
    
    function filterUniqueValues(value, index, array) {
        return array.indexOf(value) === index;
    }
    
    for (let i = 0; i < playerScores.length; i++) {
        
        if (playerScores[i] < playerHighScore) {
            
            playerRankings.push(playerRankings[i - 1])
            console.log(`Same Ranking: ${playerRankings[i - 1]}`)
            console.log( `New Rankings History: ${playerRankings}`)
            
        } else if (playerScores[i] > playerHighScore) {
            
            highscores.push(playerScores[i])
            let ranking = highscores.sort((a, b) => b - a).filter(filterUniqueValues).indexOf(playerScores[i])
            playerRankings.push(ranking + 1)
            console.log(`New Ranking: ${ranking}`)
            console.log(`New Ranking History: ${playerRankings}`)
            
        }
        
    }
    
    return playerRankings
}

// Efficient Solutiuon:

function climbingLeaderboard(ranked, player) {
    let highScores = ranked
    console.log(`Unique High Scores: ${highScores}`)
    let uniqueHighScores = [...new Set(highScores)]
    console.log(`Unique High Scores: ${uniqueHighScores}`)
  
    let playerScores = player
    console.log(`Player Scores: ${playerScores}`)
    let playerRankings = []
    let ranking = uniqueHighScores.length + 1
  
  for (let i = 0; i < playerScores.length; i++) {
      
      let currentScore = playerScores[i]
      console.log(`Current Player Score: ${currentScore}`)
      console.log(`Current Index: ${i}`)
      
      while ( ranking > 1 && currentScore >= uniqueHighScores[ranking - 2]) {
         ranking-- 
      }
      
    console.log(`Final Ranking: ${ranking}`)
    playerRankings.push(ranking)
    console.log(`New Rankings: ${playerRankings}`)
  }
    
    return playerRankings
}
