function circularArrayRotation(a, k, queries) {

    let arr = a
    let iterations = k
    
    for (let i = 0; i < iterations; i++) {
        arr.unshift(arr.pop());
    }
    
    let returnArray = []
    
    for (let j = 0; j < queries.length; j++) {
        returnArray.push(arr[queries[j]])
    }
    
    return returnArray
 
}
