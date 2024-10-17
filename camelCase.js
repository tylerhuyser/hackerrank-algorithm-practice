// Personal Solution

function camelcase(s) {
    
    let string = s
    console.log(`String: ${string}`)

    // NO NEED TO SPLIT INTO AN ARRAY - THE FOR/OF LOOP CAN ITERATE OVER VALUES IN A STRING
    // let stringArray = string.split("")
    // console.log(`String Array: ${stringArray}`)
    
    let wordCount = 1
    console.log(`Initial Word Count: ${wordCount}`)
    
    for (let letter of string) {
        
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
