const Car = {
    Brand: "Toyota",
    BrandModel: "Corolla AE101",
    BrandEngine: "1,3 2E",
    BrandStyle: "Sedan"
}
const Manufacturer = ("Manufacturer: " + Car.Brand)
const Model = ("Make and Model: " + Car.BrandModel)
const Engine = ("Engine: " + Car.engine)
const Style = ("Body and Syle: " + Car.BrandEngine)

console.log(Manufacturer)
console.log(Model)
console.log(Engine)
console.log(Style)

document.getElementById("DisplayBrand").innerHTML = (Manufacturer)
document.getElementById("DisplayModel").innerHTML = (Model)
document.getElementById("DisplayEngine").innerHTML = (Engine)
document.getElementById("DisplayStyle").innerHTML = (Style)