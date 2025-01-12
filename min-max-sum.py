def miniMaxSum(arr):
    
    def add(x, y):
        return x + y
    
    sorted_values = sorted(arr)
    min = reduce(add, sorted_values[0:4])
    max = reduce(add, sorted_values[1:5])
    
    print(min, max)
