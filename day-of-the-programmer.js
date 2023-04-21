

1700 - 1917 - Julian Calendar System - Leap Year is Divisble by 4
1918 - Trasnferred between Julian and Gregorian Calendar Systems - After January 31st was February 14th
1918+ - Gregorian Calendar System - Leap Year is Divisible by 4 AND NOT Divisible by 100


CASE A: 

  Year is 1700-1917 AND NOT a Leap Year (i.e. if year <= 1917 && (year % 4) !== 0)

  OUTPUT: 13.09.${YEAR}

CASE B:

  Year is 1700-1917 AND a Leap Year (i.e. if year <= 1917 && (year % 4) === 0)

  OUTPUT: 12.09.${YEAR}

CASE C:

  Year is 1918 

  OUTPUT: 26.09.${YEAR}

CASE D:

  Year is 1919+ AND NOT a Leap Year (i.e. if year >= 1919 && (year % 4 !== 0))

  OUTPUT: 13.09.${YEAR}

CASE E:

  Year is 1919+ AND a Leap Year (i.e. if year >= 1919 && (year % 4 === 0) && year % 100 !== 0)

  OUTPUT: 12.09.${YEAR}



------

SOLUTION:

-----
  
  function dayOfProgrammer(year) {
    if (year <= 1917 && year % 4 !== 0) {
        return `13.09.${year}`
    } else if (year <= 1917 && year % 4 === 0) {
        return `12.09.${year}`
    } else if (year === 1918) {
        return `26.09.${year}`
    } else if (year >= 1919 && year % 4 !== 0){
         return `13.09.${year}`
    } else if (year >= 1919 && year % 400 === 0) {
        return `12.09.${year}`
    } else if (year >= 1919 && year % 100 === 0) {
        return `13.09.${year}`
    } else if (year >= 1919 && year % 4 === 0 && year % 100 !== 0) {
        return `12.09.${year}`
    }
}
