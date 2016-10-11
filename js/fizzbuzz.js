function FizzBuzz(n) {
    var text = ''
    for (var i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            text += 'fizzbuzz'
        }
        else if (i % 3 === 0) {
            text += 'fizz'
        }
        else if (i % 5 === 0) {
            text += 'buzz'
        }
        else {
            text += '.'
        }
    }
    return text
}

console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
