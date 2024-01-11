console.groupCollapsed('Arrays')

// Masyvo kūrimas
let students = ['Steve', 'John', 'Peter']

// Masyvo narių pasiekimas
console.log(students[0])
console.log(students[1])
console.log(students[2])

// Kaip iteruojama per masyvą (ciklai/loops)

// for ciklas
for (let i = 0; i < students.length; i++) {
  console.log('for ciklas: ' + students[i])
}

// map ciklas
students.map((student) => {
  console.log('map ciklas: ' + student)
})

// forEach
students.forEach((student) => {
  console.log('forEach ciklas: ' + student)
})

// while ciklas
let n = 0
while (n < students.length) {
  console.log('while ciklas: ' + students[n])
  n++
}

// do... while ciklas
let m = 0
do {
  console.log('do... while ciklas: ' + students[m])
  m++
} while (m < students.length)

// for... of ciklas
for (let student of students) {
  console.log('for... of ciklas: ' + student)
}

//                            Age Group
let student1 = ['John', 'Doe', 25, 20, 'Vilnius', 'Kaunas']

console.log(student1)
console.log(student1[0])
console.log(student1[1])
console.log(student1[2])
console.log(student1[3])
console.log(student1[4])

console.groupEnd()

console.groupCollapsed('Objects')

/* 

Student 1:
  - Name: John,
  - Surname: Doe,
  - Age: 25,
  - Group: 20,
  - City: Vilnius,
  - Birth city: Kaunas.

Objekto sintaksė:

let obj = {
  key: 'value',
}

*/

const studentObj = {
  name: 'John', // property (key: value pair)
  surname: 'Doe', // ypatybės (pavadinimas: reikšmė)
  age: 25,
  group: 20,
  city: 'Vilnius',
  birthCity: 'Kaunas',
  'second name': 'Steve',
  grades: [5, 7, 9, 10, 10],
  contacts: {
    phone: '+37045641313',
    email: 'studentemail@email.com',
  },
  sayHello: function() {
    return 'Hello!'
  },
  getFullName: function() {
    return `Full name is: ${this.name} ${this.surname}.`
  },
  setStudentInactive: function() {
    this.isActive = false

    return this.isActive
  },
  setStudentActive() {
    this.isActive = true

    return this.isActive
  },
  addGrade(newGrade) {
    this.grades.push(newGrade)

    return this.grades
  }
}

console.log(studentObj)

// Objekto properties pasiekimas
console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['group'])
console.log(studentObj['city'])
console.log(studentObj['birthCity'])
console.log(studentObj['second name'])

let propertyName = 'name'
console.log(studentObj[propertyName])

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.group)
console.log(studentObj.city)
console.log(studentObj.birthCity)

console.log(studentObj.name + ' ' + studentObj.surname)
console.log(`${studentObj.name} ${studentObj.surname}`)

console.log('Name: ' + studentObj.name)
console.log(`Name: ${studentObj.name}`)

// Objekto properties pakeitimas
console.log(studentObj.age)
studentObj.age = 26
console.log(studentObj.age)

console.log(studentObj['second name'])
studentObj['second name'] = 'Peter'
console.log(studentObj['second name'])

// Objekto properties sukūrimas
console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)

// Objekto properties ištrynimas
console.log(studentObj.birthCity)
delete studentObj.birthCity
console.log(studentObj.birthCity)

console.log(studentObj['second name'])
delete studentObj['second name']
console.log(studentObj['second name'])

// Masyvai objekto viduje
console.log(studentObj.grades)
console.log(studentObj.grades[0])
console.log(studentObj.grades[1])
console.log(studentObj.grades[2])
console.log(studentObj.grades[3])
console.log(studentObj.grades[4])

for (let i = 0; i < studentObj.grades.length; i++) {
  console.log(studentObj.grades[i])
}

studentObj.grades.map(grade => {
  console.log(grade)
})

studentObj.grades.push(9)
studentObj.grades.push(10)
let filteredGrades = studentObj.grades.filter(grade => grade > 7)
console.log(filteredGrades)

console.log(studentObj.hobbies)
studentObj.hobbies = ['sports', 'reading']
console.log(studentObj.hobbies)

let studentHobbies = studentObj.hobbies
studentHobbies.map(hobby => console.log(hobby))

studentHobbies.pop()
console.log(studentHobbies)

// Objektai objektuose
console.log(studentObj.contacts)
console.log(studentObj.contacts.email)
console.log(studentObj.contacts.phone)
studentObj.contacts.phone = '+37088888888'
console.log(studentObj.contacts.phone)

console.log(studentObj.address)

// Pirmas būdas
// studentObj.address = new Object()
studentObj.address = {}
studentObj.address.city = 'Vilnius'
studentObj.address.street = 'Vilniaus'
studentObj.address.apartment = 15

// Antras būdas
// studentObj.address = {
//   city: 'Vilnius',
//   street: 'Vilniaus',
//   apartment: 15
// }

// Trečias būdas
// let addressObj = {
//   city: 'Vilnius',
//   street: 'Vilniaus',
//   apartment: 15
// }
// studentObj.address = addressObj

console.log(studentObj.address)


console.log(studentObj.length)

// Iteravimas per objektą

// for...in ciklas
for (let key in studentObj) {
  console.log(key, studentObj[key])
}

// Funkcijos objektuose (metodai / methods)
console.log(studentObj.sayHello())
console.log(studentObj.getFullName())

studentObj.getFullAddress = function() {
  console.log(this.address)
  console.log(this.address.city)
  console.log(this.address.street)
  console.log(this.address.apartment)

  return `Student's address is: ${this.address.city}, ${this.address.street} ${this.address.apartment}.`
}

console.log(studentObj.getFullAddress())

console.log(studentObj.isActive)
console.log(studentObj.setStudentInactive())

console.log(studentObj.setStudentActive())

console.log(studentObj.addGrade(5))
console.log(studentObj.addGrade(7))
console.log(studentObj.addGrade(10))

studentObj.addNewHobby = function(newHobby) {
  this.hobbies.push(newHobby)

  return this.hobbies
}

console.log(studentObj.addNewHobby('swimming'))

studentObj.removeHobby = function(hobbyToRemove) {
  // let filteredHobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove)
  // this.hobbies = filteredHobbies

  this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove)

  return this.hobbies
}

console.log(studentObj.removeHobby('swimming'))

studentObj.switchStudentActivity = function() {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive

  return this.isActive
}

console.log(studentObj.switchStudentActivity())
console.log(studentObj.switchStudentActivity())
console.log(studentObj.switchStudentActivity())

console.groupEnd()

// Objektai masyvuose

let visitedCountries = [
  {
    name: 'Poland',
    date: 2022,
    ranking: 4,
    cities: ['Poznan', 'Wroclaw'],
  },
  {
    name: 'Germany',
    date: 2020,
    ranking: 4,
    cities: ['Miestas 1', 'Miestas 2', 'Miestas 3'],
  },
  {
    name: 'Spain',
    date: 2010,
    ranking: 5,
    cities: ['Miestas 1'],
  },
  {
    name: 'Bulgaria',
    date: 2005,
    ranking: 3,
    cities: [],
  }
]

console.log(visitedCountries)
console.log(visitedCountries.length)

console.log(visitedCountries[0])
console.log(visitedCountries[0].name)
console.log(visitedCountries[0].date)
console.log(visitedCountries[0].ranking)
console.log(visitedCountries[0].cities)
console.log(visitedCountries[0].cities[0])
console.log(visitedCountries[0].cities[1])

console.log(Object.keys(visitedCountries[0]))
console.log(Object.values(visitedCountries[0]))

console.log(visitedCountries[1])
console.log(visitedCountries[1].name)
console.log(visitedCountries[1].date)
console.log(visitedCountries[1].ranking)

console.log(visitedCountries[2])
console.log(visitedCountries[2].name)
console.log(visitedCountries[2].date)
console.log(visitedCountries[2].ranking)

console.log(visitedCountries[3])
console.log(visitedCountries[3].name)
console.log(visitedCountries[3].date)
console.log(visitedCountries[3].ranking)

console.log('--------FOR---------')
for (let i = 0; i < visitedCountries.length; i++) {
  console.log(visitedCountries[i])
  console.log(visitedCountries[i].name)
  console.log(visitedCountries[i].date)
  console.log(visitedCountries[i].ranking)
}

console.log('--------MAP---------')
visitedCountries.map(country => {
  console.log(country)
  console.log(country.name)
  console.log(country.date)
  console.log(country.ranking)
})

let filteredCountries1 = visitedCountries.filter(country => {
  // console.log(country)
  // console.log(country.name)
  // console.log(country.date)
  // console.log(country.ranking)

  return country.date > 2015
})
console.log(filteredCountries1)

let filteredCountries2 = visitedCountries.filter(country => country.name === 'Germany')
console.log(filteredCountries2)

let filteredCountries3 = visitedCountries.filter(country => country.ranking >= 4)
console.log(filteredCountries3)

let filteredCountries4 = visitedCountries.filter(country => country.name.length % 2 === 0)
console.log(filteredCountries4)

let filteredCountries5 = visitedCountries.filter(country => country.date <= 2020 && country.ranking < 5)
console.log(filteredCountries5)

let filteredCountries6 = visitedCountries.filter(country => country.cities.length > 1)
console.log(filteredCountries6)

let newCountry = {
  name: 'Italy',
  date: 2024,
  ranking: 5,
  cities: ['Miestas 1', 'Miestas 2']
}

visitedCountries.push(newCountry)
console.log(visitedCountries)

console.log(visitedCountries.slice(0, 2))

let dimensions = [
  {
    height: 100,
    width: 15,
  },
  {
    height: 14,
    width: 24,
  },
  {
    height: 51,
    width: 74,
  },
  {
    height: 35,
    width: 49,
  },
  {
    height: 10,
    width: 1,
  }
]

console.log(dimensions)

const allPerimeters = dimensions.map(dimension => {
  let perimeter = (dimension.height + dimension.width) * 2
  return perimeter
})

console.log(allPerimeters)

const allAreas = dimensions.map(dimension => dimension.height * dimension.width)
console.log(allAreas)

// const allData = dimensions.map(dimension => {
//   let perimeter = (dimension.height + dimension.width) * 2
//   let area = dimension.height * dimension.width

//   let data = {
//     height: dimension.height,
//     width: dimension.width,
//     perimeter: perimeter,
//     area: area,
//   }

//   return data
// })

const allData = dimensions.map(dimension => {
  let height = dimension.height
  let width = dimension.width

  let perimeter = (height + width) * 2
  let area = height * width

  return {
    height,
    width,
    perimeter,
    area,
  }
})

console.log(allData)