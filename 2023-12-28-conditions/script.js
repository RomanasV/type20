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


// let word = 'moon'
// console.log(word)
// console.log(word[0])
// console.log(word[1])
// console.log(word[2])

// let firstLetter = word[0]

// if (firstLetter === 's') {
//   console.log('Žodis prasideda raide S.')
// } else {
//   console.log('Žodis neprasideda raide S.')
// }

// AND OPERATOR - &&

// Žodis: tips
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'p' === 'p')
// console.log(true && true)
// console.log(true)

// Žodis: tree
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'e' === 'p')
// console.log(true && false)
// console.log(false)

// Žodis: house
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('h' === 't' && 'u' === 'p')
// console.log(false && false)
// console.log(false)

let word = 'house'

let firstLetter = word[0]
let thirdLetter = word[2]

console.log(firstLetter)
console.log(thirdLetter)

if (firstLetter === 't' && thirdLetter === 'p') {
  console.log(`Žodžio ${word} pirma raidė yra "T" ir trečia raidė yra "P".`)
} else {
  console.log(`Žodžio ${word} pirma raidė nėra "T" arba trečia raidė nėra "P".`)
}

// OR OPERATOR - ||

if (firstLetter === 't' || thirdLetter === 'p') {
  console.log(`Žodžio ${word} pirma raidė yra "T" arba trečia raidė yra "P".`)
} else {
  console.log(`Žodžio ${word} pirma raidė nėra "T" ir trečia raidė nėra "P".`)
}

// Žodis: tips
// console.log(firstLetter === 't' || thirdLetter === 'p')
// console.log('t' === 't' || 'p' === 'p')
// console.log(true || true)
// console.log(true)

// Žodis: tree
// console.log(firstLetter === 't' || thirdLetter === 'p')
// console.log('t' === 't' || 'e' === 'p')
// console.log(true || false)
// console.log(true)

// Žodis: house
// console.log(firstLetter === 't' || thirdLetter === 'p')
// console.log('h' === 't' || 'u' === 'p')
// console.log(false || false)
// console.log(false)


let age = 17

if (age > 17) {
  console.log('Pirkti galima')
} else {
  console.log('Pirkti negalima')
}

if (age <= 17) {
  console.log('Pirkti negalima')
} else {
  console.log('Pirkti galima')
}

if (age >= 18) {
  console.log('Pirkti galima')
} else {
  console.log('Pirkti negalima')
}

if (age < 18) {
  console.log('Pirkti negalima')
} else {
  console.log('Pirkti galima')
}

// Iki 15 pirkti negalima
// 16-17 pirkti galima su tėvų sutikimu
// 18+ pirkti galima

// if (age > 17) {
//   console.log('Pirkti galima')
// } else if (age > 15 && age <= 17) {
//   console.log('Pirkti galima su tėvų sutikimu')
// } else {
//   console.log('Pirkti negalima')
// }

if (age > 17) {
  console.log('Pirkti galima')
} else if (age > 15) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti negalima')
}

if (age <= 15) {
  console.log('Pirkti negalima')
} else if (age <= 17) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti galima')
}

if (age >= 18) {
  console.log('Pirkti galima')
} else if (age >= 16) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti negalima')
}

if (age < 16) {
  console.log('Pirkti negalima')
} else if (age < 18) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti galima')
}


// Nesting

if (age > 17) {
  console.log('Pirkti galima')
} else {

  // if (age > 15) {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // } else {
  //   console.log('Pirkti negalima')
  // }

  if (age <= 15) {
    console.log('Pirkti negalima')
  } else {
    console.log('Pirkti galima su tėvų sutikimu')
  }

}

if (age <= 17) {

  // if (age > 15) {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // } else {
  //   console.log('Pirkti negalima')
  // }

  if (age <= 15) {
    console.log('Pirkti negalima')
  } else {
    console.log('Pirkti galima su tėvų sutikimu')
  }

} else {
  console.log('Pirkti galima')
}

if (age >= 18) {
  console.log('Pirkti galima')
} else {

  // if (age >= 16) {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // } else {
  //   console.log('Pirkti negalima')
  // }
  
  if (age < 16) {
    console.log('Pirkti negalima')
  } else {
    console.log('Pirkti galima su tėvų sutikimu')
  }
}

if (age < 18) {
  // if (age >= 16) {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // } else {
  //   console.log('Pirkti negalima')
  // }
  
  if (age < 16) {
    console.log('Pirkti negalima')
  } else {
    console.log('Pirkti galima su tėvų sutikimu')
  }
} else {
  console.log('Pirkti galima')
}