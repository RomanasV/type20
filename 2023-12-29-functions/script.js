// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('Perimetras: ' + (10 + 10) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 25) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 30) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 35) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 40) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 45) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 50) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 55) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 60) * 2 + 'cm.')
// console.log('Perimetras: ' + (10 + 120) * 2 + 'cm.')

// DRY - Don't Repeat Yourself

// FUNKCIJOS

// Funkcijos sukūrimas
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos parametrams
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
  // console.log('Hello, John...')
  return 'Hello, John...'
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai

console.log(hello())
document.querySelector('h1').textContent = hello()

let helloText = hello()
console.log(helloText)




function helloWithName(personName) {
  // console.log(`Hello, ${personName}`)
  return `Hello, ${personName}`
}

console.log(helloWithName('Steve'))

let helloJohnText = helloWithName('John')
console.log(helloJohnText)



// function helloWithName2(personName, personSurname) {
//   if (personName && personSurname) {
//     console.log(`Hello, ${personName} ${personSurname}.`)
//   } else if (personName) {
//     console.log(`Hello, ${personName}.`)
//   } else if (personSurname) {
//     console.log(`Hello, ${personSurname}.`)
//   } else {
//     console.log(`Hello.`)
//   }
// }

// function helloWithName2(personName, personSurname) {
//   let output = ''

//   if (personName && personSurname) {
//     output = `Hello, ${personName} ${personSurname}.`
//   } else if (personName) {
//     output = `Hello, ${personName}.`
//   } else if (personSurname) {
//     output = `Hello ${personSurname}.`
//   } else {
//     output = 'Hello.'
//   }

//   // console.log(output)
//   return output
// }

// function helloWithName2(personName, personSurname) {
//   let output = 'Hello.'

//   if (personName && personSurname) {
//     output = `Hello, ${personName} ${personSurname}.`
//   } else if (personName) {
//     output = `Hello, ${personName}.`
//   } else if (personSurname) {
//     output = `Hello ${personSurname}.`
//   }

//   // console.log(output)
//   return output
// }

function helloWithName2(personName, personSurname) {
  // if (personName && personSurname) {
  //   return `Hello, ${personName} ${personSurname}.`
  // } else if (personName) {
  //   return `Hello, ${personName}.`
  // } else if (personSurname) {
  //   return `Hello ${personSurname}.`
  // } else {
  //   return 'Hello,'
  // }

  if (personName && personSurname) {
    return `Hello, ${personName} ${personSurname}.`
  }
  
  if (personName) {
    return `Hello, ${personName}.`
  }
  
  if (personSurname) {
    return `Hello ${personSurname}.`
  }
  
  return 'Hello,'
}

console.log(helloWithName2('John', 'Doe'))
// helloWithName2('John')
// helloWithName2('', 'Doe')


function getPerimeter(height, width, unit = 'vnt') {
  if (height <= 0 || width <= 0) {
    return 'Aukštis ir plotis privalo būti teigiami skaičiai'
  }

  if (height > 1000 || width > 1000) {
    return 'Aukštis ir plotis turi būti mažiau nei 1000'
  }

  let perimeter = (height + width) * 2
  let output = `Perimetras: ${perimeter} ${unit}.`

  // let unitText = 'vnt'
  // if (unit) {
  //   unitText = unit
  // }

  // let unitText
  // if (unit) {
  //   unitText = unit
  // } else {
  //   unitText = 'vnt'
  // }

  // let unitText = unit ? unit : 'vnt'
  // let output = `Perimetras: ${perimeter} ${unitText}.`

  // console.log(output)
  return output
}

console.log(getPerimeter(10, 10))
console.log(getPerimeter(10, 20, 'm'))
console.log(getPerimeter(-10, 10))



if (10 > 10) {
  let test = 'Daugiau'
  console.log(test)
} else {
  let test = 'Mažiau arba lygu'
  console.log(test)
}



let testNum = 100
let num = 5
console.log(num)

function func(globalNum, numTest) {
  let num = 10
  console.log(num)
  console.log(globalNum)

  let localNum = 15
  console.log(localNum)

  console.log(numTest)
}

func(num, testNum)