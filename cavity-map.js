// Personal Solution

function cavityMap(grid) {

let initialGrid = grid
console.log(`Initial Grid: ${initialGrid})`)

let gridSize = grid[0].length
console.log(`Grid Size: ${gridSize}x${gridSize}`)

let totalGridUnits = grid[0].length ** 2
console.log(`Total Grid Units: ${totalGridUnits}`)

let borderCells = (2 * grid[0].length) + 2 * (grid[0].length - 2)
console.log(`Total Border Cells: ${borderCells}`)

let potentialCavities = totalGridUnits - borderCells
console.log(`Total Potential Cavity Units: ${potentialCavities}`)

let finalGrid = grid

    for (let i = 1; i < grid.length - 1; i++) {

    console.log(`Loop Round ${i}`)

    let previousRow = grid[i - 1]
    let currentRow = grid[i]
    console.log(`Current Loop Row: ${currentRow}`)
    let nextRow = grid [i + 1]

        for (let j = 1; j < currentRow.length - 1; j++) {

            let currentCell = parseInt(currentRow[j])
            console.log(`Current Cell Value: ${currentCell}`)
            
            let topBorderCell = parseInt(previousRow[j])
            console.log(`Top Border Cell Value: ${topBorderCell}`)
            
            let leftBorderCell = parseInt(currentRow[j - 1])
            console.log(`Left Border Cell Value: ${leftBorderCell}`)
            
            let rightBorderCell = parseInt(currentRow[j + 1])
            console.log(`Right Border Cell Value: ${rightBorderCell}`)
            
            let bottomBorderCell = parseInt(nextRow[j])
            console.log(`Bottom Border Cell Value: ${bottomBorderCell}`)

            console.log(currentCell > leftBorderCell && currentCell > rightBorderCell  && currentCell > topBorderCell && currentCell > bottomBorderCell)

            if (currentCell > leftBorderCell && currentCell > rightBorderCell  && currentCell > topBorderCell && currentCell > bottomBorderCell) {
                
                    console.log(finalGrid[i].replace(currentCell, "X"))
                    finalGrid[i] = finalGrid[i].replace(currentCell, "X")
                }
            }
        }
        
        console.log(`Final Grid: ${finalGrid}`)
        return finalGrid
}

// Notes:

// Map will ALWAYS be square (ex. 3x3 or 4x4)

// Ineligible Cells Include:

// 1. First Group of Cells in Grid (i.e., First Index)
// 2. Last Group of Cells in Grid (i.e., Last Index
// 3. Border cells (i.e., the first and last index of each Grid index)

// ---

// Efficient Solution

function cavityMap(grid) {
    const n = grid.length;

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const current = parseInt(grid[i][j]);
            const top = parseInt(grid[i - 1][j]);
            const bottom = parseInt(grid[i + 1][j]);
            const left = parseInt(grid[i][j - 1]);
            const right = parseInt(grid[i][j + 1]);

            if (current > top && current > bottom && current > left && current > right) {
                grid[i] = grid[i].substring(0, j) + 'X' + grid[i].substring(j + 1);
            }
        }
    }

    return grid;
}
    
