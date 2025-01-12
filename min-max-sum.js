function miniMaxSum(arr) {
    // Write your code here
    let sortedArray = arr.sort((a, b) => a - b)
    let initialSum = 0
    let minSum = sortedArray.slice(0, 4).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
  initialSum,
    )
    let maxSum = sortedArray.slice(1, 5).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
  initialSum,
    )
    
    console.log(`${minSum} ${maxSum}`)
    
}
