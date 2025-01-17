def minimum_bribes (q):
    queue = q
    bribes = 0
    
    for person, index in enumerate(queue):
        if index - (person + 1) > 2:
            print("Too chaotic")
            return
            
        for j in range(max(0, index - 2, person)):
            if queue[j] > index:
                bribes += 1
                
    print(bribes)

