// Personal Answer

function bigSorting(unsorted) {
    
    let array = unsorted
    let sorted = array.sort((a, b) => 
    {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return parseInt(a) - parseInt(b)
        }
    })

    return sorted
}
