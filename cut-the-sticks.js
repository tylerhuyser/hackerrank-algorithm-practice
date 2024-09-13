// Personal Solution

function cutTheSticks(arr) {
   let sticks = arr
        console.log(`Sticks: ${sticks}`)
   let bundle = [sticks.length]
        console.log(`Initial Bundle: ${bundle}`)
   let uniqueSticks = [... new Set(sticks)]
        console.log(`Unique Sticks: ${uniqueSticks}`)
    let sortedUniqueSticks = uniqueSticks.sort(function(a, b) {
        return a - b;
    });
        console.log(`Sorted Unique Sticks: ${sortedUniqueSticks}`)
        
    for( let x = 0; x < sortedUniqueSticks.length - 1; x ++) {
        console.log(`For Loop Iteration: ${x}`)
        console.log(`For Loop Iteration Value: ${sortedUniqueSticks[x]}`)
        
        let filteredSticks = sticks.filter((stick) => stick === sortedUniqueSticks[x])
        console.log(`Filtered Sticks: ${filteredSticks}`)
        
        let count = filteredSticks.length
        bundle[x + 1] = bundle[x] - count
    }
    console.log(bundle)
    return bundle
}

//  Efficient Solution

function cutTheStick(arr) {
  // 1. Sort the Array

  arr.sort((a,b) => a - b)

  // 2. Define Cut Amount

  let cutAmount = []

  // 3. Initiate While Loop until no sticks remain

  while (arr.length > 0) {

    // 4. Record Number of Sticks BEFORE cutting
    cutAmountEachRound.push(arr.length)

    // 5. Determine the Length of Smallest Stick
    let smallestStick = arr[0]

    // 6. Remove the Smallest Sticks from the Array
    arr = arr.filter(stick => stick > smallestStick)
  }

  return cutAmount
}
