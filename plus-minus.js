function plusMinus(arr) {
    let [positive, negative, zero] = [0, 0, 0]
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else if (arr[i] === 0) {
            zero++
        }
    }
    
    console.log((positive / arr.length).toFixed(6))
    console.log((negative / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))

}
