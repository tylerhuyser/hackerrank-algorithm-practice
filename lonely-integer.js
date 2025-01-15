function lonelyinteger(a) {
    
    let unique = []
    
    for (let i = 0; i < a.length; i++) {
        
       if (unique.includes(a[i])) {
            // console.log('Unique Contains Value -- Removing Value from Unique')
            let index = unique.indexOf(a[i])
            unique.splice(index, 1)
       } else if (!unique.includes(a[i])) {
            // console.log('Value Not Found in Unique')
            unique.push(a[i])
       }
        
    }

    // console.log(unique)
    return unique[0]
}
