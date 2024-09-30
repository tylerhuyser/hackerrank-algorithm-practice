// Personal Solution:

function taumBday(b, w, bc, wc, z) {

    // Parameters
    const blackGifts = b
    const whiteGifts = w
    const blackCost = bc
    const whiteCost = wc
    const conversionCost = z
    
    let cost = 0;
    
    if ((blackCost + conversionCost) < whiteCost) {
        console.log(`If Condition 1 (Black Cost + Conversion Less)`)
        cost = (blackGifts * blackCost) + (whiteGifts * (blackCost + conversionCost)) 
    } else if ((whiteCost + conversionCost) < blackCost) {
        console.log(`If Condition 2 (White Cost + Conversion Less)`)
        cost = (blackGifts * (whiteCost + conversionCost)) + (whiteGifts * whiteCost) 
    } else {
        console.log(`If Condition 3)`)
       cost = (blackGifts * blackCost) + (whiteGifts * whiteCost) 
    }
    
    console.log(cost)
    return cost
}
