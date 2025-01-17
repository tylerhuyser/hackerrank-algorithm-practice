function minimumBribes(q) {
    // Write your code here
    let queue = q
    
    let bribes = 0
    
    for (let i = 0; i < queue.length; i++) {
        // console.log(`Q[i]: ${q[i]} and i: ${i}`)
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic")
            return
        } 
        
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++
            }
        }
    }
    
    console.log(bribes)
}
