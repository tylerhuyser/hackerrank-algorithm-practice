function organizingContainers(containers) {
    
    console.log(`Containers: ${containers}`)
    let totalContainers = containers.length
    console.log(`Total Containers: ${totalContainers}`)
    let totalBallTypes = totalContainers
    console.log(`Total Ball Types ${totalBallTypes}`)
    
    const ballsPerContainer = new Array(totalContainers).fill(0)
    console.log(`Initial Balls Per Container: ${ballsPerContainer}`)
    const totalBallsPerType = new Array(totalBallTypes).fill(0)
    console.log(`Total Balls per Type: ${totalBallsPerType}`)


    for (let i = 0; i < totalContainers; i++) {
        
        const currentContainer = containers[i]
        console.log(`Current Container: ${currentContainer}`)
        
        for (let j = 0; j < totalContainers; j++) {
            const ballCount = currentContainer[j]
            ballsPerContainer[i] += ballCount
            totalBallsPerType[j] += ballCount
        }
    }
    
    console.log(`Post-Sort Balls Per Container: ${ballsPerContainer}`)
    console.log(`Post-Sort Total Balls per Type = ${totalBallsPerType}`)
    
    ballsPerContainer.sort()
    totalBallsPerType.sort()
    
    for (let i = 0; i < totalContainers; i++) {
        if (ballsPerContainer[i] !== totalBallsPerType[i]) return 'Impossible';
    }
    
    return 'Possible'
    
}
