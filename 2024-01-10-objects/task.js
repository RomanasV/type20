// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// const company1 = new Object()
const company1 = {}

// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company ABC'

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2005

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 4564643213867

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 35

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'John Doe'

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = true

// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Latvia']

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['B2B Sales', 'Marketing']

// 2.9. Property „contacts", kuris turės:
// company1.contacts = new Object()
company1.contacts = {}

//       2.9.1. „phone"
company1.contacts.phone = '+370345348714'

//       2.9.2. „email"
company1.contacts.email = 'companyabc@company.lt'

//       2.9.3. „address", kuris turės:
company1.contacts.address = {}

//           2.9.3.1. „country"
company1.contacts.address.country = 'Lithuania'

//           2.9.3.2. „city"
company1.contacts.address.city = 'Vilnius'

//           2.9.3.3. „street"
company1.contacts.address.street = 'Vilniaus st.'

//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15

console.log(company1)

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getFullAddress = function() {
  return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`
}
console.log(company1.getFullAddress())

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVOStatus = function() {
  this.nvo = true
  return this.nvo
}
console.log(company1.setNVOStatus())

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVOStatus = function() {
  this.nvo = false
  return this.nvo
}
console.log(company1.setNonNVOStatus())

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVOStatus = function() {
  this.nvo = !this.nvo
  return this.nvo
}
console.log(company1.switchNVOStatus())
console.log(company1.switchNVOStatus())
console.log(company1.switchNVOStatus())

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function() {
  let output = `Working locations: ${this.workingLocations.join(', ')}.`
  return output
}
console.log(company1.getWorkingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function() {
  return this.activityAreas.join(', ')
}
console.log(company1.getActivityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.setWorkingLocation = function(newWorkingLocation) {
  this.workingLocations.push(newWorkingLocation)
  return this.workingLocations
}
console.log(company1.setWorkingLocation('Germany'))

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.setActivityArea = function(newActivityLocation) {
  this.activityAreas.push(newActivityLocation)
  return this.activityAreas
}
console.log(company1.setActivityArea('Tourism'))

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function(locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
  this.workingLocations = updatedWorkingLocations

  return this.workingLocations
}
console.log(company1.removeWorkingLocation('Germany'))

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function(areaToRemove) {
  let udatedActivityAreas = this.activityAreas.filter(area => area !== areaToRemove)
  this.activityAreas = udatedActivityAreas

  return this.activityAreas
}
console.log(company1.removeActivityArea('Tourism'))
console.log(company1.removeActivityArea('Marketing'))



const company2 = {
  'company name': 'Company XYZ',
  opened: 2010,
  companyCode: 1324878946,
  employees: 15,
  ceo: 'Doe John',
  nvo: false,
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

  getFullAddress() {
    return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`
  },

  setNVOStatus: function() {
    this.nvo = true
    return this.nvo
  },

  setNonNVOStatus: function() {
    this.nvo = false
    return this.nvo
  },

  switchNVOStatus() {
    this.nvo = !this.nvo
    return this.nvo
  },

  getWorkingLocations: function() {
    let output = `Working locations: ${this.workingLocations.join(', ')}.`
    return output
  },

  getActivityAreas: function() {
    return this.activityAreas.join(', ')
  },

  setWorkingLocation: function(newWorkingLocation) {
    this.workingLocations.push(newWorkingLocation)
    return this.workingLocations
  },

  setActivityArea: function(newActivityLocation) {
    this.activityAreas.push(newActivityLocation)
    return this.activityAreas
  },

  removeWorkingLocation: function(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter(location => location !== locationToRemove)
    this.workingLocations = updatedWorkingLocations
  
    return this.workingLocations
  },

  removeActivityArea: function(areaToRemove) {
    let udatedActivityAreas = this.activityAreas.filter(area => area !== areaToRemove)
    this.activityAreas = udatedActivityAreas
  
    return this.activityAreas
  },
}

console.log(company2)
console.log(company2.getFullAddress())

console.log(company2.nvo)
company2.setNVOStatus()
console.log(company2.nvo)
company2.setNonNVOStatus()
console.log(company2.nvo)
company2.switchNVOStatus()
console.log(company2.nvo)
company2.switchNVOStatus()
console.log(company2.nvo)

console.log(company2.getWorkingLocations())
console.log(company2.getActivityAreas())

console.log(company2.setWorkingLocation('France'))
console.log(company2.setActivityArea('Marketing'))

console.log(company2.removeWorkingLocation('France'))
console.log(company2.removeActivityArea('Marketing'))