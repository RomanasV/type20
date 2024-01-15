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

const keturkampis1 = {
  height: 12,
  width: 10,
  getPerimeter: function() {
    const perimeter = (this.height + this.width) * 2
    return perimeter
  },
  getArea: function() {
    const area = this.height * this.width
    return area
  },
  getFullInfo: function() {
    // const infoText = `Keturkampio plotis: ${this.width}, keturkampio ilgis: ${this.height}, keturkampio perimetras: ${this.getPerimeter()}, keturkampio plotas: ${this.getArea()}.`

    const width = this.width
    const height = this.height
    const perimeter = this.getPerimeter()
    const area = this.getArea()

    const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
    return infoText
  }
}

const keturkampis2 = {
  height: 300,
  width: 17,
  color: 'red',
  getPerimeter: function() {
    const perimeter = (this.height + this.width) * 2
    return perimeter
  },
  getArea: function() {
    const area = this.height * this.width
    return area
  },
  getHalfArea: function() {
    // const halfArea = this.height * this.width / 2
    const halfArea = this.getArea() / 2
    return halfArea
  },
  getFullInfo: function() {
    const width = this.width
    const height = this.height
    const perimeter = this.getPerimeter()
    const area = this.getArea()

    const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
    return infoText
  }
}

const keturkampis3 = {
  height: 27,
  width: 246,
  getPerimeter: function() {
    const perimeter = (this.height + this.width) * 2
    return perimeter
  },
  getArea: function() {
    const area = this.height * this.width
    return area
  },
  getInfo: function() {
    // const area = this.height * this.width
    const area = this.getArea()
    const perimeter = this.getPerimeter()
    const infoText = `Keturkampio plotis: ${area}, keturkampio aukštis: ${perimeter}`

    return infoText
  },
  getFullInfo: function() {
    const width = this.width
    const height = this.height
    const perimeter = this.getPerimeter()
    const area = this.getArea()

    const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
    return infoText
  }
}

console.log(keturkampis1.getPerimeter())
console.log(keturkampis1.getArea())
console.log(keturkampis1.getFullInfo())

console.log(keturkampis2.getPerimeter())
console.log(keturkampis2.getArea())
console.log(keturkampis2.color)
console.log(keturkampis2.getHalfArea())
console.log(keturkampis2.getFullInfo())

console.log(keturkampis3.getPerimeter())
console.log(keturkampis3.getArea())
console.log(keturkampis3.getInfo())
console.log(keturkampis3.getFullInfo())