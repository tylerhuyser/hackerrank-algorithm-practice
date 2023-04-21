------
FINAL ANSWER
-----
 function migratoryBirds(arr) {
    
    let mostFrequentBirdID
    let mostFrequentBirdCount = 0
    
    for (let i = 1; i < 6; i++) {
        let filteredArray = arr.filter(bird => bird === i)
        if (filteredArray.length > mostFrequentBirdCount) {
                mostFrequentBirdID = i
                mostFrequentBirdCount = filteredArray.length 
        }
    }
    
    return mostFrequentBirdID

}

------
TEMP ANSWER
----=

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
    
    
    ------
    ALTERNATE SOLUTION
    ------
    
    function migratoryBirds(arr) {
    
    function compare(a, b) {
        return a - b;
    }
    
    let sortedArray = arr.sort(compare)
    
    let mostFrequentBirdID = sortedArray[0]
    let mostFrequentBirdCount = sortedArray.filter(bird => bird === mostFrequentBirdID).length

    sortedArray.forEach((bird) => {
        if (bird === mostFrequentBirdID) {
            return
        } else {
            let filteredArray = sortedArray.filter(element => element === bird)
            if (filteredArray.length > mostFrequentBirdCount) {
                mostFrequentBirdID = bird
                mostFrequentBirdCount = filteredArray.length
            }
        }
    })
    
    return mostFrequentBirdID
  }

