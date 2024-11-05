// Personal Solution

function bomberMan(n, grid) {
    
    // Timers
    let countdown = n
    let secondsPassed = 0
    
    console.log(`Initial Countdown: ${countdown}`)
    console.log(`Time Passed: ${secondsPassed}`)
    
    let explosionTimer = 0
    let plantTimer = 0
     
    //Grids
    let initialGrid = grid.map(row => row.slice())
    
    console.log(`BEGIN - Initial Grid (Below)`)
    console.log(initialGrid)
    console.log(`END - Initial Grid`)
    
    let finalGrid = grid.map(row => row.slice())
    
    // Plant and Explosion Counters
    let plants = 1
    let explosions  = 0
    
    console.log(`Initial Bomb Plants: ${plants}`)
    console.log(`Intital Explosions: ${explosions}`)
   
    console.log(`Begin WHILE Loop and Countdown (Below)`)
    
    while (countdown > 0) {
        
        countdown--
        secondsPassed++
        
        console.log(`Total Second(s) Remaining: ${countdown}`)
        console.log(`Total Second(s) Passed: ${secondsPassed}`)
        
        explosionTimer++
        plantTimer++
        
        console.log(`Explosions Timer: ${explosionTimer}`)
        console.log(`Plant Timer: ${plantTimer}`)
        
        console.log(finalGrid)
        
        if (secondsPassed === 1) {
            
            console.log(`WOMP! WOMP! - Nothing Happens!`)

        } else if (plantTimer === 2) {
            
            console.log(`Yikes! Bomb Group ${plants + 1} Planted!`)
                       
            for (let i = 0; i < finalGrid.length; i ++) {
                for (let j = 0; j < finalGrid[0].length; j++) {
                    
                    console.log(finalGrid[i][j])
                    
                    if (finalGrid[i].split("")[j] === ".") {
                        
                        console.log('Planting Bomb')
                        
                        let rowRevise = finalGrid[i].split('')
                        rowRevise[j] = "O"
                        
                        finalGrid[i] = rowRevise.join("")
                        
                    } else {
                        console.log('Bomb Already Planted.')
                    }
                }
            }
            
            console.log(`BEGIN - New Grid (Below`)
            console.log(finalGrid)
            console.log(`END - New Grid`)
            console.log(`BEGIN - Initial Grid (Below`)
            console.log(initialGrid)
            console.log(`END - Initial Grid`)
            
            plants++
            plantTimer = plantTimer - 2
            
            console.log(`Updated Total Plants: ${plants}`)
            console.log(`Plant Timer Reset: ${plantTimer}`)
            
            
        } else if (explosionTimer === 3) {
            
            console.log(`Boom! Bomb Group ${explosions + 1} Exploded`)
            
            for (let i = 0; i < initialGrid.length; i++) {
                
                console.log(`Current Row Count: ${i}`)
                console.log(`Current Row - Initial Grid: ${initialGrid[i]}`)
                console.log(`Current Row - Final Grid: ${finalGrid[i]}`)
                
                
                for (let j = 0; j < initialGrid[0].length; j++) {
                    
                    if (initialGrid[i].split("")[j] === "O") {
                        
                        console.log(`Bomb Explodes!`)
                        
                        let rowRevise = finalGrid[i].split("")
                        
                        // Left Replace
                        rowRevise[Math.max(0, j - 1)] = "."
                        console.log('Left Replace Complete')
                        
                        // Center Replace
                        rowRevise[j] = "."
                        console.log('Center Replace Complete')
                        
                        // Right Replace
                        rowRevise[Math.min(j + 1, (initialGrid[i].length - 1))] = "."
                        console.log('Right Replace Complete')
                        
                        finalGrid[i] = rowRevise.join("")
                        
                        // Up Replace
                        let up = finalGrid[Math.max(0, i - 1)].split("")
                        up[j] = "."
                        console.log('Up Replace Complete')
                        
                        finalGrid[Math.max(0, i - 1)] = up.join("")
                        
                        // Down Replace
                        let down = finalGrid[Math.min(i + 1, (finalGrid.length - 1))].split("")
                        down[j] = "."
                        
                        finalGrid[Math.floor(i + 1, finalGrid.length - 1)] = down.join("")
                        
                        
                    }
                    
                }
            }
            
            console.log(`BEGIN - New Grid (Below`)
            console.log(finalGrid)
            console.log(`END - New Grid`)
            
            initialGrid = finalGrid.map(row => row.slice())
            explosions++
            explosionTimer = explosionTimer - 2
                        
            console.log(`Updated Total Explosions: ${explosions}`)
            console.log(`Explosion Timer Reset: ${explosionTimer}`)
        }
    }
     
    console.log(finalGrid)
    return finalGrid
}

// Tutorial Solution

function bomberMan(n, grid) {
    if (n === 1) return grid; // Nothing changes initially after 1 second

    // Define basic grid dimensions
    const rows = grid.length;
    const cols = grid[0].length;

    // Function to generate a full bomb grid
    const fullBombGrid = Array(rows).fill().map(() => 'O'.repeat(cols));
    
    // Function to detonate bombs in grid based on bombs' initial placements
    const detonate = (currentGrid) => {
        const newGrid = currentGrid.map(row => row.split(''));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (currentGrid[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if (i > 0) newGrid[i - 1][j] = '.';
                    if (i < rows - 1) newGrid[i + 1][j] = '.';
                    if (j > 0) newGrid[i][j - 1] = '.';
                    if (j < cols - 1) newGrid[i][j + 1] = '.';
                }
            }
        }
        return newGrid.map(row => row.join(''));
    };

    // First detonation (t = 3)
    const afterFirstDetonation = detonate(grid);
    // Second detonation (t = 5)
    const afterSecondDetonation = detonate(afterFirstDetonation);

    // Result based on the pattern of Bomberman's actions
    if (n % 4 === 1) {
        return afterSecondDetonation;
    } else if (n % 4 === 3) {
        return afterFirstDetonation;
    } else {
        return fullBombGrid;
    }
}
