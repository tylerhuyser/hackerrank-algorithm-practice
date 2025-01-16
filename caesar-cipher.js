function caesarCipher(s, k) {
    let string = s
    console.log(string)
    let shift = k % 26
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
    
    let result = ''
    
    for (let char of s) {
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char)
            const newIndex = (index + shift) % 26
            result += alphabet[newIndex]
        } else if (alphabet.includes(char.toLowerCase())) {
            const index = alphabet.indexOf(char.toLowerCase())
            const newIndex = (index + shift) % 26
            result += alphabet[newIndex].toUpperCase()
        } else {
            result += char
        }
    }
    
    console.log(result)
    return result

}
