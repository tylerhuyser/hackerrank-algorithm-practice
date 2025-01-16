function gridChallenge(grid) {
    let rows = grid.length
    console.log(rows)
    
    for ( let i = 0; i < rows; i++) {
        grid[i] = grid[i].split('').sort().join('')
    }
    
    let columns = grid[0].length;
    
    for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows - 1; row++) {
            if (grid[row][column] > grid[row + 1][column]) {
                return "NO";
            }
        }
    }
    
    return "YES"

}
