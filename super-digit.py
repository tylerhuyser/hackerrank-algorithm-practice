def superDigit(n, k):
    number = n
    repetitions = k
    
    initial_sum = sum(int(digit) for digit in number) * repetitions
    
    while initial_sum > 9:
        initial_sum = sum(int(digit) for digit in str(initial_sum))

    return initial_sum
