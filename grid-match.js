// Personal Solution

function gridSearch(G, P) {
    let grid = G
    console.log(`Grid: ${grid}`)
    console.log(grid)
    
    let rows = grid.length
    console.log(`Rows: ${rows}`)
    
    let columns = grid[0].length
    console.log(`Columns: ${columns}`)
    
    let string = P
    console.log(`String: ${string}`)
    console.log(P)
    
    let stringRows = string.length
    console.log(`String Rows: ${stringRows}`)
    
    let potentialMatches = []
    
    
    for (let row in grid) {
        if (grid[row].includes(string[0])) {
            potentialMatches.push(row)
        }
    }
    
    console.log(`Potential Matches: ${potentialMatches}`)
    console.log(`Total Potential Matches: ${potentialMatches.length}`)

    if (potentialMatches.length === 0) {
        console.log("NO")
        return "NO"
    }
    
    let matchedIndex = []
    
    function indexOfAll(str, searchStr) {
        let indices = [];
        let index = 0;

        while (index !== -1) {
            index = str.indexOf(searchStr, index);
            
            if (index !== -1) {
                indices.push(index);
                index++;
            }
        }

        return indices;
    }
        
    for (let i = 0; i < potentialMatches.length; i++) {
        
        for (let j = 0; j < string.length; j++) {
            
            let currentRowIndex = parseInt(potentialMatches[i]) + parseInt(j)
            console.log(`Current Row (Index): ${currentRowIndex}`)
            
            let currentRow = grid[currentRowIndex]
            console.log(`Current Row: ${currentRow}`)
            console.log(currentRow.indexOf(string[j]))
            
            
            
            if (!currentRow.includes(string[j])) {
                
                console.log('If Condition 1: String Not Found')
                break
                
            } else if (j === 0) {
                
                console.log(`If Condition 2: First Line Matched`)
                console.log(`Matched Index: ${currentRow.indexOf(string[j])}`)
                // matchedIndex = currentRow.indexOf(string[j])
                indexOfAll(currentRow, string[j])
                
            } else if (matchedIndex.includes(currentRow.indexOf(string[j]))) {
                
                console.log(`If Condition 3: Another Match`)
                
                if (j === string.length - 1) {
                    console.log('Final Line Matched')
                    console.log("YES")
                    return "YES"
                }
                
            } else {
                console.log(`Mismatched Index`)
                break
            }
            
            
        }
    }
    
    console.log("NO")
    return "NO"
    
}

// Researched Solution

function gridSearch(G, P) {
    
    const grid = G
    const gridRows = grid.length
    const rowLength = grid[0].length
    
    const strings = P
    const stringRows = strings.length
    const substringLength = strings[0].length
    
  for (let i = 0; i <= gridRows - stringRows; i++) {
      
    for (let j = 0; j <= rowLength - substringLength; j++) {
        
      let match = true;

      for (let k = 0; k < P.length; k++) {
        if (grid[i + k].substring(j, j + strings[0].length) !== strings[k]) {
          match = false;
          break;
        }
      }

      if (match) {
        return "YES";
      }
    }
  }

  return "NO";
}
