// Personal Solution


function nonDivisibleSubset(k, s) {
   let nonFactor = k
   console.log(`NonFactor: ${nonFactor}`)
   let numbers = s
   console.log(`Number Set: ${numbers}`)
   
   let result = []
   console.log(`Initial Result Array: ${result}`)
   
   for (let i = 0; i < numbers.length - 1; i++) {
       
       console.log(`Iteration: ${i}`)
       
       for (let j = i + 1; j < numbers.length; j++) {
           
           console.log(`First Number: ${numbers[i]}`)
           console.log(`Second Number: ${numbers[j]}`)
           console.log(`Their Sum: ${(numbers[i] + numbers[j])}`)
           console.log(`Their Remainder: ${(numbers[i] + numbers[j]) % nonFactor}`)
           
           if ((numbers[i] + numbers[j]) % nonFactor !== 0) {
               
               console.log(`If Condition Met: Non-Zero Remainder`)
               
               if (!result.includes(numbers[i]) && !result.includes(numbers[j])) {
                   result.push(numbers[i])
                   result.push(numbers[j])
               } else if (result.includes(numbers[i]) && !result.includes(numbers[j])) {
                  result.push(numbers[j]) 
               } else if (!result.includes(numbers[i]) && result.includes(numbers[j])) {
                   result.push(numbers[i])
               }

           }
       }
   }
