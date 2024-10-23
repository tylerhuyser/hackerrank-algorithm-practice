// Solution:

function queensAttack(n, k, r_q, c_q, obstacles) {
   let chessboardLength = n
   console.log(`Chessboard Length: ${chessboardLength}`)
   let chessboardArea = n ** 2
   console.log(`Chessboard Area: ${chessboardArea}`)
   
   let totalObstacles = k
   console.log(`Total Obstacles: ${totalObstacles}`)
   
   let queenRow = r_q
   console.log(`Queen Row: ${queenRow}`)
   let queenColumn = c_q
   console.log(`Queen Column: ${queenColumn}`)
   let queenCoordinates = [queenRow, queenColumn]
   console.log(`Queen Coordinates: ${queenCoordinates}`)

    console.log(`Obstacles: ${obstacles}`)

    
    let upUnits = queenColumn - 1
    let downUnits = chessboardLength - queenColumn
    let leftUnits = queenRow - 1
    let rightUnits = chessboardLength - queenRow
    
    let diagonalUpLeft = Math.min(upUnits, leftUnits)
    let diagonalUpRight =  Math.min(upUnits, rightUnits)
    let diagonalDownLeft = Math.min(downUnits, leftUnits)
    let diagonalDownRight = Math.min(downUnits, rightUnits)
    
    for (let currentObstacle of obstacles) {
        
        let row = currentObstacle[0]
        let column = currentObstacle[1]
        
        
        if (row === queenRow && column < queenColumn) {
            upUnits = Math.min(upUnits, queenColumn - column - 1)
        } 
        
        if (row === queenRow && column > queenColumn) {
            downUnits = Math.min(downUnits, column - queenColumn - 1)
        }
        
        if (column === queenColumn && row < queenRow) {
            leftUnits = Math.min(leftUnits, queenRow - row - 1)
        }
        
        if (column === queenColumn && row > queenRow) {
            rightUnits = Math.min(rightUnits, row - queenRow - 1)
        } 
        
        if (row < queenRow && column < queenColumn && (queenRow - row) === (queenColumn - column) ) {
            diagonalUpLeft = Math.min(diagonalUpLeft, queenRow - row - 1)
        }
        
        if (row > queenRow && column < queenColumn && (row - queenRow) && (queenColumn - column)) {
            diagonalUpRight = Math.min(diagonalUpRight, row - queenRow - 1)
        }
        
        if (row > queenRow && column > queenColumn && (row - queenRow) && (column - queenColumn)) {
            diagonalDownRight = Math.min(diagonalDownRight, row - queenRow - 1)
        }
        
        if (row < queenRow && column > queenColumn && (queenRow - row) && (column - queenColumn)) {
            diagonalDownLeft = Math.min(diagonalDownLeft, queenRow - row - 1)
        }
    }
    
    let totalMoves = upUnits + downUnits + leftUnits + rightUnits + diagonalUpLeft + diagonalUpRight + diagonalDownLeft + diagonalDownRight
    
    return totalMoves

}

// Researched Solution:

function queensAttack(n, k, r_q, c_q, obstacles) {
  let total = 0;

  // Create a set for faster obstacle lookup
  const obstacleSet = new Set(obstacles.map(obs => obs.join(',')));
  console.log(obstacleSet)

  // Directions for the queen's movements
  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  for (const [dx, dy] of directions) {
    let x = r_q + dx;
    let y = c_q + dy;

    while (x >= 1 && x <= n && y >= 1 && y <= n) {
      if (obstacleSet.has(`${x},${y}`)) {
        break; // Obstacle found
      }
      total++;
      x += dx;
      y += dy;
    }
  }

  return total;

}
