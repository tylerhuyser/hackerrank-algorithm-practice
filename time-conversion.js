function timeConversion(s) {
    // Write your code here
    let [hour, minutes, seconds] = s.split(':')
    let meridiem = seconds.slice(-2)
    seconds = seconds.slice(0,2)
    
    if (meridiem === "AM" && hour === "12") {
        hour = "00"
    } else if (meridiem === "PM" && hour !== "12") {
        hour = parseInt(hour) + 12
    }
    
    return `${hour}:${minutes}:${seconds}`

}
