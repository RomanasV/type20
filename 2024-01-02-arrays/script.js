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