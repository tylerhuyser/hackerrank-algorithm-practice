Solution:

function jumpingOnClouds(c) {
    
    let clouds = c
    let currentCloud = 0
    let jumps = 0
    
    while (currentCloud < clouds.length - 1) {
        if (clouds[currentCloud + 2] === 0) {
            currentCloud += 2
            jumps++
        } else if (clouds[currentCloud + 1] === 0) {
            currentCloud++
            jumps++
        }
    }
    
    return jumps
}
