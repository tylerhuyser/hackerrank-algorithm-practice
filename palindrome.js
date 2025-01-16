function palindromeIndex(s) {
    let word = s
    let length = word.length
    
    const isPalendrome = (string) => {
        return string === string.split('').reverse().join('')
         
    }
    
    if (isPalendrome(word)) {
        return -1
    }
    
    for (let i=0; i < Math.floor(length / 2); i++) {
        if (word[i] !== word[length - 1 - i]) {
            
            if (isPalendrome(word.slice(0, i) + word.slice(i + 1))) {
                return i
            }
            
            if (isPalendrome(word.slice(0, length - 1 - i) + word.slice(length - i))) {
                return length - 1 - i
            } 
        
            return -1
            
        }
    }

    return -1
}
