// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.
// 4. Pridėti property 'mileage' ir papildoti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

// 6. Pridėti property 'baseColors'. Tai bus masyvas su bazinėmis spalvomis (juoda, raudona, mėlyna, sidabrinė, balta, 'special blue'). Jų pakeisti negalima, nes yra sukuriamos tiesiogiai klasės constructor funkcijoje.
//        6.1. Pridėti property 'color', kuria galima papildyti kuriant automobilio objektą pagal klasę. Jeigu kuriant objektą, spalva nėra nurodoma, tai pagal nutylėjimą ji bus juoda.
//        6.2. Jeigu nurodyta spalva yra 'special blue', tai automobilio kaina turi padidėti 500.
//        6.3. Jeigu nurodytos spalvos nėra tarp bazinių spalvų, tai automobilio kaina turėtų padidėti 3000.

class Cars {
  constructor(brand, model, basePrice, mileage = 0, engine = 'petrol', color = 'black') {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.price = basePrice
    this.extrasPrice = 0
    this.mileage = mileage
    this.color = color
    
    // if (basePrice) {
      //   this.basePrice = basePrice
      // } else {
        //   this.basePrice = 5000
        // }
        
    this.basePrice = basePrice ? basePrice : 5000
    this.baseColors = ['black', 'red', 'blue', 'silver', 'white', 'special blue']
  }

  turnOn() {
    alert('vrooom')
  }

  getPrice() {
    const basePrice = this.basePrice

    const colorPrice = this.getColorPrice()
    const enginePrice = this.getEnginePrice()
    const extraPrice = colorPrice + enginePrice
    
    const mileageDiscount = this.getMileageDiscount()
    const discountedPrice = mileageDiscount

    const finalPrice = basePrice + extraPrice - discountedPrice

    return finalPrice
  }

  getEnginePrice() {
    const engine = this.engine

    if (engine === 'petrol') {
      return 0
    }

    if (engine=== 'diesel') {
      return 5000
    }

    if (engine === 'electric') {
      return 10000
    }
  }

  getColorPrice() {
    const color = this.color.toLowerCase()
    const baseColors = this.baseColors

    if (!baseColors.includes(color)) {
      return 3000
    }

    if (color === 'special blue') {
      return 500
    }

    return 0
  }

  getMileageDiscount() {
    const basePrice = this.basePrice
    const mileage = this.mileage

    if (mileage > 400000) {
      return basePrice / 100 * 50
    } 

    if (mileage > 100000) {
      return basePrice / 100 * 30
    }

    if (mileage > 50000) {
      return basePrice / 100 * 20
    }

    if (mileage > 20000) {
      return basePrice / 100 * 15
    }

    if (mileage > 0) {
      return basePrice / 100 * 10
    }

    return 0
  }

  getDiscount(discount) {
    const price = this.getPrice()

    if (!discount) {
      return price
    }

    if (discount < 0) {
      return price
    }

    if (discount > 100) {
      return 0
    }

    const priceDiscount = price / 100 * discount
    const priceAfterDiscount = price - priceDiscount

    return priceAfterDiscount
  }

  renderElement() {
    const carItem = document.createElement('div');
    carItem.classList.add('car-item');

    // modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą
    const { brand, model, engine, mileage, color, basePrice, image, price, mileageDiscountPercentage, colorPrice, enginePrice } = this;

    const carTitle = document.createElement('h2');
    carTitle.classList.add('car-title');
    carTitle.textContent = `${brand} (${model})`;

    const carImage = document.createElement('img');
    carImage.classList.add('car-image');
    carImage.src = image;
    carImage.alt = `${brand} ${model} car ${color} color`;

    const carInfoList = document.createElement('ul');
    carInfoList.classList.add('car-info-list');

    carInfoList.innerHTML = `<li class="car-info-item"><strong>Engine: </strong>${engine}</li>
                             <li class="car-info-item"><strong>Mileage: </strong>${mileage}</li>
                             <li class="car-info-item"><strong>Color: </strong>${color}</li>
                             <li class="car-info-item"><strong>Base Price: </strong>${basePrice}</li>`;

    const moreInfoButton = document.createElement('button')
    moreInfoButton.classList.add('more-info-button');
    moreInfoButton.textContent = 'More Info';

    moreInfoButton.addEventListener('click', () => {
      const moreInfoWrapper = document.createElement('div');
      moreInfoWrapper.classList.add('more-info-wrapper');

      const moreInfoList = document.createElement('ul');
      moreInfoList.classList.add('more-info-list');

      moreInfoList.innerHTML = `<li><strong>Base price: </strong>€ ${basePrice}</li>
                                <li><strong>Engine: </strong>€ ${enginePrice}</li>
                                <li><strong>Color: </strong>€ ${colorPrice}</li>
                                <li><strong>Price: </strong>€ ${price}</li>
                                <li><strong>Mileage Discount: </strong>${mileageDiscountPercentage}%</li>
                                <li><strong>VAT: </strong>€ ${price * 0.21}</li>
                                <li><strong>Price after VAT: </strong>€ ${price * 1.21}</li>`;

      const closeButton = document.createElement('button');
      closeButton.classList.add('close-button');
      closeButton.textContent = 'Close';

      closeButton.addEventListener('click', () => {
        moreInfoWrapper.remove();
      })

      moreInfoWrapper.append(moreInfoList, closeButton);
      carItem.append(moreInfoWrapper);
    })

    carItem.append(carTitle, carImage, carInfoList, moreInfoButton);
    return carItem;
  }
}

const car1 = new Cars('Toyota', 'RAV4', 20000)
const car2 = new Cars('AUDI', 'A4', 15000, 50000, 'diesel', 'special blue')
const car3 = new Cars('AUDI', 'A4')

console.log(car1)
console.log(car1.basePrice)
console.log(car1.getPrice())
console.log(car1.getDiscount(10))
console.log(car1.getMileageDiscount())
console.log(car1.getColorPrice())

console.log(car2)
console.log(car2.basePrice)
console.log(car2.getPrice())
console.log(car2.getDiscount(0))
console.log(car2.getMileageDiscount())
console.log(car2.getColorPrice())




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

// console.log(car4)