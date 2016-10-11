function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}
function remainder(x, y) {
    return x % y
}
function increment(x) {
    return x+= 1
}
function decrement(x) {
    return x-= 1
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)

// add button
document.getElementById('addButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = add(firstValue, secondValue)

    document.getElementById('finalNumber').value = answer
})

// subtract button
document.getElementById('subtractButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = subtract(firstValue, secondValue)

    document.getElementById('finalNumber').value = answer
})

// multiply button
document.getElementById('multiplyButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = multiply(firstValue, secondValue)

    document.getElementById('finalNumber').value = answer
})

// divide button
document.getElementById('divideButton').addEventListener('click', function() {
    var firstValue = document.getElementById('firstValue').value
    var secondValue = document.getElementById('secondValue').value

    var answer = divide(firstValue, secondValue)

    document.getElementById('finalNumber').value = answer
})

// clear button
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = null
    document.getElementById('secondValue').value = null
    document.getElementById('finalNumber').value = null

})
