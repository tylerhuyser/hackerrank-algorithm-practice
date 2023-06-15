/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    
    let pagesFromFront
    let pagesFromBack
    
    if (p % 2 === 0) {
        pagesFromFront = p / 2
        pagesFromBack = (n - p) / 2
        return pagesFromFront < pagesFromBack ?  Math.floor(pagesFromFront) : Math.floor(pagesFromBack)
    }
     if ((p - 1) % 2 === 0) {
        pagesFromFront = (p - 1) / 2
        pagesFromBack = (n - p - 1) / 2
        return pagesFromFront < pagesFromBack ?  Math.floor(pagesFromFront) : Math.floor(pagesFromBack)
    }

}
