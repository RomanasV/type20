console.groupCollapsed('JS Basics')

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas 
// 4. Kintamojo vertė

var vardas = "John" // String (tekstas) tipo duomenys
let pavarde = 'Doe' // String (tekstas) tipo duomenys
let miestas = `Vilnius` // String (tekstas) tipo duomenys
let amzius = 30 // Number (skkaičius) tipo duomenys
let yraStudentas = true // Boolean (true/false) tipo duomenys
const asmensKodas = 394545132121

console.log(vardas)
console.log(typeof vardas)

console.log(pavarde)
console.log(typeof pavarde)

console.log(miestas)
console.log(typeof miestas)

console.log(amzius)
console.log(typeof amzius)

console.log(amzius, typeof amzius)

console.log(yraStudentas, typeof yraStudentas)

console.log(pavarde)
pavarde = 'Steve'
console.log(pavarde)

console.log(amzius)
amzius = 31
console.log(amzius)

console.log(yraStudentas)
yraStudentas = false
console.log(yraStudentas)

console.log(vardas + ' ' + pavarde + '.')
console.log(vardas + " " + pavarde + ".")
console.log(`${vardas} ${pavarde}.`)

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')
console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".")
console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// John said: "Good morning".
console.log('John said: "Good morning".')
console.log(`John said: "Good morning".`)

// John said: "That's my car".
console.log(`John said: "That's my car".`)
console.log('John said: "That' + "'s my car" + '".')

console.log('John said: "That\'s my car".')

// John `said`: "That's my car".
console.log('John `said`: "That\'s my car".')
console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".')
console.log("John \\`said\\`: \"That's my car\".")
console.log(`John \\\`said\\\`: "That's my car".`)

let sentence = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore corporis aliquam similique ratione incidunt!'

console.log(sentence)
console.log(sentence.length) // String simbolių skaičius
console.log(sentence[0])
console.log(sentence[1])
console.log(sentence[2])
console.log(sentence.at(0))
console.log(sentence.at(1))
console.log(sentence.at(2))
console.log(sentence.at(-1))
console.log(sentence.at(-2))
console.log(sentence.toUpperCase())
console.log(sentence.toLowerCase())
console.log(sentence.replaceAll('i', '_'))

console.groupEnd()

// Matematiniai operatoriai
let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(22 + '10')
console.log('2210')

console.log(num1 - num3)
console.log(num1 / num3)
console.log(num1 * num3)
console.log(num1 % num3)

console.log(num1 + num3 * num3)

console.log((num1 + num3) * num3)
console.log((22 + '10') * '10')
console.log('2210' * '10')
console.log(22100)