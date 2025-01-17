def minimum_bribes (q):
    queue = q
    bribes = 0
    
    for index, person in enumerate(queue):
        # print(person)
        if person - (index + 1) > 2:
            print("Too chaotic")
            return
            
        for j in range(max(0, person - 2, index)):
            if queue[j] > person:
                bribes += 1
                
    print(bribes)
