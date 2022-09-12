//===================================== Start Color slider task =============================================
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')

var colorRGB = document.getElementById('color-rgb')
var resultColor = document.getElementById('color')

resultColor.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`
colorRGB.innerText = `rgb(${red.value},${green.value},${blue.value})`

function changeColor() {
    colorRGB.innerText = `rgb(${red.value},${green.value},${blue.value})`
    return resultColor.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`
}
// ===================================== End Color slider task ===========================================

