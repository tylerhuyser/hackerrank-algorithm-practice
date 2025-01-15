def countingSort(arr):
    frequency = [0] * 100
     
    for value in arr:
        frequency[value] += 1
        
    return frequency
