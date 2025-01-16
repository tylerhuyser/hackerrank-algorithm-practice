function processData(input) {
    console.log(input)
    a.sort((a, b) = a - b)
    let n = a.length
    let k = Math.floor((n + 1) / 2)
    
    a[k], a[n - 1] = a[n - 1], a[k]
    
    let left_index = k + 1
    let right_index = n - 2
    
    while (left_index < right_index) {
        
        a[left_index], a[right_index] = a[right_index], a[left_index]
        left_index++
        right_index--
    }
    
    console.log(arr.join(' '));
} 
