function migratoryBirds(arr) {

    function compare(a, b) {
        return a - b;
    }
    
    let sortedArray = arr.sort(compare)
    
    let mostFrequentBirdID = sortedArray[0]
    let mostFrequentBirdCount = 0
    
    for (let i = 0; i < (sortedArray.length - 1); i++) {
        let currentValueCount = 0
        for (let j = 1; j < sortedArray.length; j++) {
            if (sortedArray[i] === sortedArray[j] && mostFrequentBirdID !== sortedArray[i] && currentValueCount + 1 > mostFrequentBirdCount) {
                mostFrequentBirdCount = sortedArray[i]
                mostFrequentBirdCount++
                currentValueCount++
            }
            else if (sortedArray[i] === sortedArray[j]) {
                currentValueCount++
            } else {
                return
            }
        }
    }
    
    return mostFrequentBirdID
}
