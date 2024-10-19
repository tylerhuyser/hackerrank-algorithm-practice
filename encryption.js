// Personal Solution

function encryption(s) {
    
    let string = s
    console.log(`String: ${string}`)
    
    let stringWithoutSpaces = s.split(" ").join("")
    console.log(`String (Without Spaces): ${stringWithoutSpaces}`)
    
    let stringLength = stringWithoutSpaces.length
    console.log(`String Length: ${stringLength}`)
    
    let squareRoot = Math.sqrt(stringLength)
    console.log(`Square Root: ${squareRoot}`)
    
    let rows = Math.floor(squareRoot)
    console.log(`Rows: ${rows}`)
    
    let columns = Math.ceil(squareRoot)
    console.log(`Columns: ${columns}`)
    
    if (rows * columns < stringLength) {
        rows = Math.ceil(squareRoot)
    }
    
    let grid = []
    let gridIterator = 0
    
    while (gridIterator < rows) {
        grid[gridIterator] = stringWithoutSpaces.substring((gridIterator * columns), (gridIterator * columns + columns))
        gridIterator++
    }
    
    console.log(`Grid: ${grid}`)
    
    let encryptedGrid = []
    console.log(`Encrypted Grid: ${encryptedGrid}`)
    
    let encryptionIterator = 0
    console.log(`Initial Encrypted Iterator: ${encryptionIterator}`)
    
    while (encryptionIterator < columns) {
        
        let columnString = ""
        console.log(`Current Encryption Iteration: ${encryptionIterator}`)
        console.log(`Initial Column String: ${columnString}`)
        
        for (let row of grid) {
            
            console.log(`Current Character: ${row[encryptionIterator]}`)
            if (row[encryptionIterator]) {
                columnString += row[encryptionIterator]  
            }
        }

        
        encryptedGrid.push(columnString)
        
        console.log(`New Encrypted Row Pushed: ${encryptedGrid[encryptionIterator]}`)
        
        encryptionIterator++
    }
    
    console.log(`Final Encrypted Grid : ${encryptedGrid}`)
    
    let encryptedString = encryptedGrid.join(" ")
    console.log(`Final Encrypted String: ${encryptedString}`)

    return encryptedString
}


//  More Efficient Solution

function encryption(s) {
    s = s.replace(/\s/g, ""); // Remove spaces
    let rows = Math.floor(Math.sqrt(s.length));
    let columns = Math.ceil(Math.sqrt(s.length));

    if (rows * columns < s.length) {
        rows++;
    }

    let result = [];
    for (let i = 0; i < columns; i++) {
        let word = "";
        for (let j = i; j < s.length; j += columns) {
            word += s[j];
        }
        result.push(word);
    }

    return result.join(" ");
}
