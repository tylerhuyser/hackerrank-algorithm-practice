def timeConversion(s):
    hour, minutes, seconds = s.split(":")
    print(seconds)
    meridiem = seconds[-2:]
    print(meridiem)
    seconds = seconds[:-2]
    
    if meridiem == "AM" and hour == "12":
        hour = "00"
    elif meridiem == "PM" and hour != "12":
        hour = int(hour) + 12
    
    return f'{hour}:{minutes}:{seconds}'
