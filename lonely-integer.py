def lonelyinteger(a):
    unique = []
    
    for value in a:
        if value in unique:
            unique.remove(value)
        elif value not in unique:
            unique.append(value)
    
    return unique[0]   
