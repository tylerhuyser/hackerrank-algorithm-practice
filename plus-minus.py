def plusMinus(arr):
    positive = 0
    negative = 0
    zero = 0
    
    for i in range(len(arr)):
        if int(arr[i]) > 0:
            positive += 1
        elif int(arr[i]) < 0:
            negative += 1
        elif int(arr[i]) == 0:
            zero += 1
    
    print(f'{(positive / len(arr)):.6f}')
    print(f'{(negative / len(arr)):.6f}')
    print(f'{(zero / len(arr)):.6f}')
