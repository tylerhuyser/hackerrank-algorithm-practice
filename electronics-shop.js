function getMoneySpent(keyboards, drives, b) {
   let k = keyboards
   let d = drives
   let budget = b
   let maxSpend = 0
   
   k.map((keyboard, index) => {
       let max = 0
       d.map((drive, index) => {
           if (drive + keyboard > max && drive + keyboard <= budget) {
               max = drive + keyboard
           }
       })
       if (max > maxSpend && max <= budget) {
          maxSpend = max
       }
   })
  
    return maxSpend === 0 ? -1 : maxSpend
}

