// UŽDUOTIS:
// 1. Sukurti įmonės klasę.
// 2. Klasė turės:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"


// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

// class Company {
//   constructor(name, opened, code, employees, ceo, nvo, workingLocations, activityAreas, contacts) {
//     this['company name'] = name
//     this.opened = opened
//     this.companyCode = code
//     this.employees = employees
//     this.ceo = ceo
//     this.nvo = nvo
//     this.workingLocations = workingLocations
//     this.activityAreas = activityAreas
//     this.contacts = contacts
//   }
// }

// const company1 = new Company(
//   'Company ABC', 
//   2010, 
//   4654313446, 
//   58, 
//   'John Doe', 
//   true, 
//   ['Lithuania', 'Poland'], 
//   ['Marketing'], 
//   {
//     phone: '+37057687643',
//     email: 'companyxyz@company.lt',
//     address: {
//       country: 'Lithuania',
//       city: 'Kaunas',
//       street: 'Vilniaus st.',
//       apartment: 10,
//     }
//   }
// )

// console.log(company1)


class Company {
  constructor(data) {
    this['company name'] = data['company name']
    this.opened = data.opened
    this.companyCode = data.companyCode
    this.employees = data.employees
    this.ceo = data.ceo
    this.workingLocations = data.workingLocations
    this.activityAreas = data.activityAreas
    this.contacts = data.contacts
    this.numberOfWorkingLocations = data.workingLocations.length
    this.numberOfActivityAreas = data.activityAreas.length
    
    if (data.nvo === false) {
      this.nvo = false
    } else {
      this.nvo = true
    }

    if (data.isActive === false) {
      this.isActive = false 
    } else {
      this.isActive = true
    }

  }

  getFullAddress() {
    return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}!`
  }

  setNVOStatus() {
    this.nvo = true
    return this.nvo
  }

  setNonNVOStatus() {
    this.nvo = false
    return this.nvo
  }

  switchNVOStatus() {
    this.nvo = !this.nvo
    return this.nvo
  }

  getWorkingLocations() {
    let output = `Working locations: ${this.workingLocations.join(', ')}.`
    return output
  }

  getActivityAreas() {
    return this.activityAreas.join(', ')
  }

  setWorkingLocation(newWorkingLocation) {
    this.workingLocations.push(newWorkingLocation)
    this.numberOfWorkingLocations = this.workingLocations.length
    return this.workingLocations
  }

  setActivityArea(newActivityLocation) {
    this.activityAreas.push(newActivityLocation)
    return this.activityAreas
  }

  removeWorkingLocation(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedWorkingLocations
  
    return this.workingLocations
  }

  removeActivityArea(areaToRemove) {
    let udatedActivityAreas = this.activityAreas.filter(area => area !== areaToRemove)
    this.activityAreas = udatedActivityAreas
  
    return this.activityAreas
  }
}

// const company2Data = {
//   ceo: 'Doe John',
//   opened: 2010,
//   nvo: false,
//   companyCode: 1324878946,
//   employees: 15,
//   'company name': 'Company XYZ',
//   workingLocations: ['Lithuania', 'Poland'],
//   activityAreas: ['Tourism', 'B2C Sales'],
//   contacts: {
//     phone: '+37057687643',
//     email: 'companyxyz@company.lt',
//     address: {
//       country: 'Lithuania',
//       city: 'Kaunas',
//       street: 'Vilniaus st.',
//       apartment: 10,
//     }
//   },
// }

// const company2 = new Company(company2Data)

const company2 = new Company({
  ceo: 'Doe John',
  opened: 2010,
  nvo: false,
  companyCode: 1324878946,
  employees: 15,
  'company name': 'Company XYZ',
  workingLocations: ['Lithuania', 'Poland'],
  activityAreas: ['Tourism', 'B2C Sales'],
  contacts: {
    phone: '+37057687643',
    email: 'companyxyz@company.lt',
    address: {
      country: 'Lithuania',
      city: 'Kaunas',
      street: 'Vilniaus st.',
      apartment: 10,
    }
  },
})

console.log(company2)
console.log(company2.getFullAddress())
console.log(company2.getWorkingLocations())
console.log(company2.getActivityAreas())

company2.setWorkingLocation('Spain')
console.log(company2.getWorkingLocations())

const company3 = new Company({
  isActive: false,
  ceo: 'Doe John',
  opened: 2010,
  companyCode: 1324878946,
  employees: 15,
  'company name': 'Company ABC',
  workingLocations: ['Lithuania', 'Poland'],
  activityAreas: ['Tourism', 'B2C Sales'],
  contacts: {
    phone: '+37057687643',
    email: 'companyxyz@company.lt',
    address: {
      country: 'Lithuania',
      city: 'Vilnius',
      street: 'Vilniaus st.',
      apartment: 10,
    }
  },
})

console.log(company3)
console.log(company3.getFullAddress())