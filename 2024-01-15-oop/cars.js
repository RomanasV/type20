// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Cars {
  constructor(brand, model, basePrice, engine = 'petrol') {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.price = basePrice
    this.extrasPrice = 0
    
    // if (basePrice) {
    //   this.basePrice = basePrice
    // } else {
    //   this.basePrice = 5000
    // }

    this.basePrice = basePrice ? basePrice : 5000
  }

  turnOn() {
    alert('vrooom')
  }

  getPrice() {
    if (this.engine === 'petrol') {
      return this.basePrice
    }

    if (this.engine === 'electric') {
      this.price = this.basePrice + 10000
      this.extrasPrice = this.extrasPrice + 10000
      return this.basePrice + 10000
    }

    if (this.engine === 'diesel') {
      this.price = this.basePrice + 5000
      this.extrasPrice = this.extrasPrice + 5000
      return this.basePrice + 5000
    }
  }
}

const car1 = new Cars('Toyota', 'RAV4', 20000)
const car2 = new Cars('AUDI', 'A4', 15000, 'diesel')
const car3 = new Cars('AUDI', 'A4')

console.log(car1)
console.log(car1.basePrice)
console.log(car1.getPrice())

console.log(car2)
console.log(car2.basePrice)
console.log(car2.getPrice())

console.log(car3)



class Car2 {
  constructor(params) {
    this.brand = params.brand
    this.model = params.model
    this.engine = params.engine
    this.price = params.basePrice
    this.extrasPrice = 0
    
    // if (params.basePrice) {
    //   this.basePrice = params.basePrice
    // } else {
    //   this.basePrice = 5000
    // }

    this.basePrice = params.basePrice ? params.basePrice : 5000
  }

  turnOn() {
    alert('vrooom')
  }

  getPrice() {
    if (this.engine === 'petrol') {
      return this.basePrice
    }

    if (this.engine === 'electric') {
      this.price = this.basePrice + 10000
      this.extrasPrice = this.extrasPrice + 10000
      return this.basePrice + 10000
    }

    if (this.engine === 'diesel') {
      this.price = this.basePrice + 5000
      this.extrasPrice = this.extrasPrice + 5000
      return this.basePrice + 5000
    }
  }
}

const car4 = new Car2({
  model: 'A4',
  basePrice: 70000,
  brand: 'AUDI',
})

console.log(car4)