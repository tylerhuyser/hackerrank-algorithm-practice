function birthday (s, d, m) {
  
  let chocolateArray = s
  let daySum = d
  let monthLength = m
  let total = 0
  
  chocolateArray.forEach((chocolate, index) => {
    if (chocolateArray.slice(index, index + monthLength).reduce(sum, 0) === daySum) {
      total++
  }})
  
  function sum (sumTotal, num) {
    return sumTotal + num;
  }
       
  return total     
}
