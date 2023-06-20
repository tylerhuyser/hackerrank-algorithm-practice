function countingValleys(steps, path) {
    
    let altitude = 0
    let totalValleys = 0
    
    path.split('').map((step, index) => {
        
        let prevAltitude = altitude
        
        if (step === 'D') {
            
            altitude--
            
        } else if (step === 'U') {
            
            altitude++
            
            if (prevAltitude === -1) {
                totalValleys++
            }
            
        }
    })
    return totalValleys
}
