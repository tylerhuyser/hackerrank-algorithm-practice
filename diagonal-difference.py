def diagonalDifference(arr):
    
    a_sum = 0
    b_sum = 0
    
    a_index = 0
    b_index = len(arr) - 1
    
    for row in arr:
        a_sum += row[a_index]
        b_sum += row[b_index]
        
        a_index += 1
        b_index -=1
                
    print(f'Final A Sum: {a_sum}')
    print(f'Final B Sum: {b_sum}')           
    return abs(a_sum - b_sum)
