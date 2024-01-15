console.groupCollapsed('Obejcts')

// Objekto kūrimo būdai

// 1
const obj1 = {
  name: 'John',
  surname: 'Doe',
}

console.log(obj1)
console.log(obj1.name)
console.log(obj1.surname)

// 2
// const obj2 = {}
const obj2 = new Object()
obj2.name = 'John'
obj2.surname = 'Doe'

console.log(obj2)
console.log(obj2.name)
console.log(obj2.surname)

// 3 - constructor function (prieš ES6)
function Person(firstName, lastName) {
  this.name = firstName
  this.surname = lastName
}

const person1 = new Person('John', 'Doe')
console.log(person1)
console.log(person1.name)
console.log(person1.surname)

const person2 = new Person('Steve', 'Doe')
console.log(person2)

// 4
const personObj = {
  isHuman: true,
  printInstructions: function() {
    if (this.isHuman) {
      return `Hello, my name is ${this.name}. I am a human.`
    } else {
      return `Hello, my name is ${this.name}. I am not a human.`
    }
  }
}

console.log(personObj)
console.log(personObj.isHuman)
console.log(personObj.printInstructions())

const extendedPersonObj = Object.create(personObj)
extendedPersonObj.name = 'John'
extendedPersonObj.isHuman = false

console.log(extendedPersonObj)
console.log(extendedPersonObj.name)
console.log(extendedPersonObj.isHuman)
console.log(extendedPersonObj.printInstructions())

// 5
const firstObj = { name: 'John' }
const secondObj = { surname: 'Doe' }
const finishedObj = { ...firstObj, ...secondObj }

console.log(firstObj)
console.log(secondObj)
console.log(finishedObj)

const finishedObj2 = Object.assign(firstObj, secondObj)
console.log(finishedObj2)

console.groupEnd()

// UŽDUOTIS
// 0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3.

// 1. Visiems keturkampių objektams pridėti plotį ir aukštį.
// 2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą.
// 3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą.
// 4. Į konsolę išvesti visų keturkampių plotą ir perimetrą.

// 5.1. Antram keturkampiui pridėti spalvą.
// 5.2. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.

// 5.3 Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y"

// 5.4 Į konsolę išvesti šiuos naujus duomenis.

// 6.1. Visų keturkampių objektuose sukurti funkciją, kuri grąžina pilną keturkampių informacijos teksta: „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."
// 6.2. Į konsolę išvesti šiuos naujus duomenis.


// Before ES6
// function Rectangle(rectHeight, rectWidth) {
//   this.height = rectHeight
//   this.width = rectWidth
// }

// After ES6
// OOP - klasės
// super class - Rectancle kalsė yra super klasė HalfRectangle klasės atžvilgiu
class Rectangle {
  constructor(rectHeight, rectWidth) {
    this.height = rectHeight
    this.width = rectWidth
  }

  getPerimeter() {
    const perimeter = (this.height + this.width) * 2
    return perimeter
  }

  getArea() {
    const area = this.height * this.width
    return area
  }

  getInfo() {
    const width = this.width
    const height = this.height
    const perimeter = this.getPerimeter()
    const area = this.getArea()

    const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
    return infoText
  }
}

// subclass
// HalfRectangle yra sub-klasė Rectangle klasės atžvilgiu 
class HalfRectangle extends Rectangle {
  constructor(rectHeight, rectWidth, rectColor) {
    super()
    this.height = rectHeight
    this.width = rectWidth
    this.color = rectColor
  }

  getHalfArea() {
    const area = this.getArea() / 2
    return area
  }
}

class InfoRectangle extends Rectangle {
  getInfo() {
    const height = this.height
    const width = this.width

    const infoText = `Keturkampio plotis: ${height}, keturkampio aukštis: ${width}`

    return infoText
  }
}

const rectangle1 = new Rectangle(100, 25)
const rectangle2 = new HalfRectangle(156, 46, 'red')
const rectangle3 = new InfoRectangle(14, 34)

console.log(rectangle1)
console.log(rectangle1.getPerimeter())
console.log(rectangle1.getArea())
console.log(rectangle1.getInfo())

console.log(rectangle2)
console.log(rectangle2.getPerimeter())
console.log(rectangle2.getArea())
console.log(rectangle2.getInfo())
console.log(rectangle2.getHalfArea())

console.log(rectangle3)
console.log(rectangle3.getPerimeter())
console.log(rectangle3.getArea())
console.log(rectangle3.getInfo())