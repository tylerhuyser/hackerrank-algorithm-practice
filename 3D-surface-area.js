// Personal Solution:

function surfaceArea(A) {

    let board = A
    let length = board.length
    let width = board[0].length
    console.log(`Board: ${board}`)
    console.log(`Length: ${length}`)
    console.log(`Width: ${width}`)

    let surfaceArea = 2 * length * width
    console.log(`Intitial Surface Area: ${surfaceArea}`)
    
    for (let i = 0; i < board.length; i++) {
        console.log(`Maximum Values per Row ${Math.max(...board[i])}`)
        surfaceArea = surfaceArea + (2 * Math.max(...board[i]))
        
        for (let j = 0; j < board[i].length; j++ ) {
            if (i > 0 && i < (board[i].length - 1) && board[i][j] < board[i][j - 1] && board[i][j] < board[i][j + 1] ) {
                console.log(`Valley Found in Row`)
                surfaceArea = surfaceArea + (board[i][j - 1] - board[i][j]) + (board[i][j + 1] - board[i][j])
            }
        }
    }
    
    console.log(`New Surface Area: ${surfaceArea}`)
    
    for (let i = 0; i < board.length; i++) {
        let greatestValue = 0
        for (let j = 0; j < board[0].length; j++) {
            if (board[j][i] > greatestValue) {
                console.log(`New Greatest Column Value`)
                greatestValue = board[j][i]
            }
            if (j > 0 && j < (board.length - 1) && board[j][i] < board[j - 1][i] && board[j][i] < board[j + 1][i] ) {
                console.log(`Valley Found in Column`)
                surfaceArea = surfaceArea + (board[j - 1][i] - board[j][i]) + (board[j + 1][i] - board[j][i])
            }
        }
        
        console.log(`Greatest Value for Column ${i} is ${greatestValue}`)  
        surfaceArea = surfaceArea + (2 * greatestValue)
        console.log(`New Surface Area: ${surfaceArea}`)
        
    }
    
    console.log(`Final Surface Area: ${surfaceArea}`)  
    return surfaceArea
    
}

// Tutorial Solution:

function surfaceArea(A) {
    let H = A.length
    let W = A[0].length
    let area = 2 * H * W; // Top and bottom surfaces

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            // Front and back faces
            area += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]);
            area += i === H - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]);

            // Left and right faces
            area += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]);
            area += j === W - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]);
        }
    }

    return area;
}
