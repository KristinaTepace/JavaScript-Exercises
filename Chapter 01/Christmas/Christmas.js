let currentday = new Date();
let Year = currentday.getFullYear();

if (currentday.getMonth() == 11 && currentday.getDate() > 25) {
  Year= Year+ 1;
}

let Date = new Date(Year, 11, 25);
let Milliseconds = 1000 * 60 * 60 * 24;

let d = Math.ceil(
  (Date.getTime() - currentday.getTime()) /
   (Milliseconds)
);

const totalCount = ("In " +remainingDays+ " days")
console.log(totalCount)

document.getElementById("dayscounter").innerHTML = (totalCount)