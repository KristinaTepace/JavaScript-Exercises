const dateformat = { month: 'long', day: 'numeric' }
const timeformat = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
const dayformat = {weekday: 'long'}
const today = new Date()
const date = today.toLocaleDateString("en-US", dateformat)
const time = today.toLocaleTimeString("en-US", timeformat)
const day = today.toLocaleDateString("en-US", dayformat)
console.log(date)
console.log(time)
console.log(day)

document.getElementById("DisplayDate").innerHTML = (date)
document.getElementById("DisplayTime").innerHTML = (time)
document.getElementById("DisplayDay").innerHTML = (day)

DisplayDate.innerHTML = date
DisplayTime.innerHTML = time
DisplayDay.innerHTML = day