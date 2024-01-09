// Masyvai / arrays
let arr =    [5, 15, -5, 5.5, 4531, 'du', true, [1, 2, 5]]
// Indeksai   0   1   2   3    4     5      6       7

console.log(arr)
console.log(arr.length)

// Masyvo narių pasiekimas
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])

console.log(arr[7][0])
console.log(arr[7][1])
console.log(arr[7][2])

// Masyvo nariu pakeitimas
arr[0] = 50
arr[arr.length] = 100

console.log(arr)

let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'];
console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
let lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
let firstCity = cities.shift()
console.log(firstCity)

cities.shift()

console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
let updatedCitiesLength = cities.push('Vilnius')
console.log(updatedCitiesLength)

cities.push('Šiauliai')
cities.push('Kaunas', 'Panevėžys')

console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
let updatedCitiesLength2 = cities.unshift('Tauragė')
console.log(updatedCitiesLength2)

cities.unshift('Nida', 'Palanga')

console.log(cities)

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1      

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('----------SLICE----------')
console.log(countries)

let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)

let slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)


// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(0, 2)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-1)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(-3, 2, 2)
// let splicedNums = nums.splice(3, 2, 'Trys')
// let splicedNums = nums.splice(2, 1, 2.5)
// let splicedNums = nums.splice(2, 0, 2.5)
let splicedNums = nums.splice(2, 0, 2.5, 2.7, 2.8)

console.log(splicedNums)
console.log(nums)

// CALLBACK FUNCTION
function renderAnswer(answer) {
  return `Atsakymas yra: ${answer}.`
}

function renderAnswer2(answer) {
  return `Jūsų atsakymas yra: ${answer}!`
}

function getPerimeter(height, width, giveAnswer) {
  let perimeter = (height + width) * 2
  console.log(giveAnswer(perimeter))
}

getPerimeter(10, 15, renderAnswer)
getPerimeter(10, 15, renderAnswer2)

// MAP METHOD
let numsArr = [1, 2, 3, 4, 5, 6, 7, 10]

let forNumsArr = []
for (let i = 0; i < numsArr.length; i++) {
  let numAnswer = numsArr[i] * numsArr[i]
  forNumsArr.push(numAnswer)
}
console.log(forNumsArr)

// numsArr.map(function(num, index, originalArray){
//   console.log(num)
//   console.log(index)
//   console.log(originalArray)
// })

let mapNumsArr = numsArr.map(function(num){
  return num * num
})
console.log(mapNumsArr)

// let mapNumsArr2 = numsArr.map((num) => {
//   return num * num
// })
let mapNumsArr2 = numsArr.map(num => num * num)
console.log(mapNumsArr2)

// FILTER
let forFilteredNums = []
for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] > 5) {
    forFilteredNums.push(numsArr[i])
  }
}
console.log(forFilteredNums)

console.log(numsArr)

let filteredNums1 = numsArr.filter(function(num){
  return num > 5
})
console.log(filteredNums1)

// let filteredNums2 = numsArr.filter((num) => {
//   return num > 5
// })
let filteredNums2 = numsArr.filter(num => num > 5)
console.log(filteredNums2)

// STRING METHODS
let str = 'Hello World'
console.log(str.charAt(0))

let firstName = 'John'
let lastName = 'Doe'
let fullName = firstName.concat(' ', lastName)
console.log(fullName)

let str2 = 'labas rytas'
console.log(str2.includes('rytas'))

console.log(str2.indexOf('a'))

let replacedStr = str2.replace('rytas', 'vakaras')
console.log(replacedStr)

let replacedStr2 = str2.replaceAll('a', '_')
console.log(replacedStr2)

console.log(str2.slice(0, 5))

console.log(str.toLowerCase())
console.log(str.toUpperCase())

// NUMBER METHODS
let num1 = 15.1546543
console.log(num1.toFixed(2))

let num2 = '15.54643'
console.log(parseFloat(num2))
console.log(parseInt(num2))

let num3 = -5
console.log(Math.abs(num3))

// let maxNumber = Math.max(1, 4, 555, 10, 100, 5, 6)

let numsArray = [-5, 1, 4, 555, 10, 100, 5, 6]
let maxNumber = Math.max(...numsArray)
console.log(maxNumber)

let minNumber = Math.min(...numsArray)
console.log(minNumber)

// SORT METHOD - modifikuoja originalų masyvą
const sortArray = [1, 30, 4, 21, 100000];
console.log(sortArray)

// let sortedArr = sortArray.sort((a, b) => {
//   if (a < b) {
//     return -1
//   } 
  
//   if (a > b) {
//     return 1
//   } 
  
//   return 0
// })

// let sortedArr = sortArray.sort((a, b) => {
//   return a - b
// })

// let sortedArr = sortArray.sort((a, b) => a - b)
let sortedArr = sortArray.sort((a, b) => b - a)

console.log(sortedArr)

let months = ['March', 'January', 'February', 'December', 'Ok', 'asdasdsdfsdf'];
console.log(months)

// let sortedStr = months.sort((a, b) => {
//   return a.length - b.length
// })

let sortedStr = months.sort((a, b) => b.length - a.length)
console.log(sortedStr)

// REDUCE METHOD
const reduceArray = [1, 2, 3, 4, 5, 7, 9, 10];

// 2 + 1 = 3
// 3 + 3 = 6
// 4 + 6 = 10
// 5 + 10 = 15
// 7 + 15 = 22
// 9 + 22 = 31
// 10 + 31 = 41

console.log(reduceArray)

// let arraySum = reduceArray.reduce((sum, currentNum, currentIndex, originalArr) => {
//   console.log('Index: ' + currentIndex)
//   console.log('Current Value: ' + currentNum)
//   console.log('Sum: ' + sum)
//   console.log('New Sum: ', currentNum + sum)

//   return currentNum + sum
// })

// let arraySum = reduceArray.reduce((sum, currentNum) => {
//   return currentNum + sum
// })

// let arraySum = reduceArray.reduce((sum, currentNum) => currentNum + sum)

// Initial value Parameter

let arraySum = reduceArray.reduce((sum, currentNum, currentIndex) => {
  console.log('Index: ' + currentIndex)
  console.log('Current Value: ' + currentNum)
  console.log('Sum: ' + sum)
  console.log('New Sum: ', currentNum + sum)

  return currentNum + sum
}, 555)

console.log(arraySum)

let countriesArr = ['Lithuania', 'Poland', 'France', 'Germany']
console.log(countriesArr.join(', '))

// let countriesStr = countriesArr.reduce((str, currentStr) => {
//   return str + ', ' + currentStr
// })

let countriesStr = countriesArr.reduce((str, currentStr) => str + ', ' + currentStr)
console.log(countriesStr)