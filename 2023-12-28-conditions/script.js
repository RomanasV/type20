// SĄLYGOS

// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10) // true
console.log('vienas' == 'vienas') // true
console.log('10' == '10') // true
console.log('10' == 10) // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10) // true
console.log('vienas' === 'vienas') // true
console.log('10' === '10') // true
console.log('10' === 10) // false

console.log(10 > 10) // false
console.log(10 < 10) // false
console.log(10 >= 10) // true
console.log(10 <= 10) // true

console.log(10 == 10) // true
console.log(10 != 10) // false

console.log(10 === 10) // true
console.log(10 !== 10) // false

console.log(true) // true
console.log(!true) // false
console.log(false) // false
console.log(!false) // true
console.log(!!true) // true

// IF, ELSE IF, ELSE

let light = 'blue'
console.log(light)


if (light === 'green') {
  console.log('Galima eiti')
} else if (light === 'yellow') {
  console.log('Pasiruošk')
} else if (light === 'red') {
  console.log('STOP')
} else {
  console.log('Sugedo :(')
}
