// Personal Solution

function camelcase(s) {
    
    let string = s
    console.log(`String: ${string}`)
    
    let stringArray = string.split("")
    console.log(`String Array: ${stringArray}`)
    
    let wordCount = 1
    console.log(`Initial Word Count: ${wordCount}`)
    
    for (let letter of stringArray) {
        
        console.log(`Current Letter: ${letter}`)
        
        if (letter === letter.toUpperCase()) {
            console.log('If Condition Met - New Word')
            wordCount++
        }
        console.log(`Current Word Count: ${wordCount}`)
    }
    
    console.log(`Final Word Count: ${wordCount}`)
    
    return wordCount

}
