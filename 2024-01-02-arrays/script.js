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