
const profile = {
    name: "Kristina Shane Tepace",
    career: "Programmer",
    hobbies: [ "Singing", "Dance", "Editing"],
    favFood: [ "Tinola", "Sinigang", "Chicken Curry", "Caldereta", "Chicken Curry", "Sweet and Sour Fish"],
    favSeries: [ "Money Heist", "All of us are Dead", "Squid Game", "Happiness", "Fairy Tale", "Boku no hero academia"],
    favMovies: [ "Saw", "Titanic", "Step-Up", "Pitch Perfect", "Bar Boys"],
}

let displayMoreInfo = false

function loadInfo() {
    const name = document.getElementById("displayName")
    const career = document.getElementById("displayCareer")
    const hobbies = document.getElementById("hobbiesList")
    const favFood = document.getElementById("favfoodList")
    const favSeries = document.getElementById("favseriesList")
    const favMovies = document.getElementById("favmoviesList")

    name.innerHTML = profile.name
    career.innerHTML = profile.career
    createList(hobbies, profile.hobbies)
    createList(favFood, profile.favFood)
    createList(favSeries, profile.favSeries)
    createList(favMovies, profile.favMovies)
}

function toggleMoreInfo() {
    const hobbies = document.getElementById("hobbiesList")
    const favFood = document.getElementById("favfoodList")
    const favSeries = document.getElementById("favseriesList")
    const favMovies = document.getElementById("favmoviesList")

    displayMoreInfo = !displayMoreInfo
    setVisibility(displayMoreInfo, hobbies, favFood, favSeries, favMovies)
}
 
function createList(elementList, list) {
    list.forEach(element => {
        var node = document.createElement("LI")
        var textnode = document.createTextNode(element)
        node.appendChild(textnode)
        elementList.appendChild(node)
    })	
}

function setVisibility(isVisible, ...element) {
    element.forEach(e => {
            e.style.display = (isVisible) ? "block" : "none" 
        }
    )
}
