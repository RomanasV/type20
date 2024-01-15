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