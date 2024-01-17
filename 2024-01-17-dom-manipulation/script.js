// Paselektinti HTML elementą
const paragraph = document.querySelector('p')
paragraph.textContent = 'Labas'
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">rytas</span>'

// Sukurti HTML elementą
const spanElement = document.createElement('span')
spanElement.textContent = '!'

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement)

// After - prideda su JS sukurtą HTML elementą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement)

// Remove - pašalina HTML elementą iš DOM
spanElement.remove()

const newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aliquid sint dolorem harum quo quibusdam cum libero similique laudantium iste, dolores accusantium eligendi voluptatum recusandae eveniet nobis? Minima, repudiandae odit.'

paragraph.after(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase'
console.dir(newParagraph.className)

// newParagraph.className = 'trecia-klase'
// newParagraph.className = newParagraph.className + ' trecia-klase'
newParagraph.className += ' trecia-klase'

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase')
newParagraph.classList.add('penkta-klase', 'sesta-klase')
newParagraph.classList.add('penkta-klase')

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('pirma-klase')
newParagraph.classList.remove('antra-klase', 'trecia-klase')
newParagraph.classList.remove('penkiolikta-klase')

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('ketvirta-klase', 'pirma-klase')

// Prideda klasę prie HTML elemento jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę turi
newParagraph.classList.toggle('toggle-klase') // pridėjo
newParagraph.classList.toggle('toggle-klase') // pašalino
newParagraph.classList.toggle('toggle-klase') // pridėjo
newParagraph.classList.toggle('toggle-klase') // pašalino

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'))
console.log(newParagraph.classList.contains('antra-klase'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id'

const link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

// link.href = 'https://google.com'
// link.target = '_blank'

link.setAttribute('href', 'https://google.com')
// link.setAttribute('target', '_blank')

const linkAttribute = 'target'
link.setAttribute(linkAttribute, '_blank')

console.log(link.getAttribute('href'))
console.log(link.href)

console.log(link.getAttribute(linkAttribute))

// link.removeAttribute('target')
link.removeAttribute(linkAttribute)

console.dir(link.style)

// link.style.border = '2px solid black'
// link.style.padding = '5px 10px'
// link.style.display = 'inline-block'
// link.style.fontSize = '20px'

link.style = `background-color: green; 
              color: white;
              border: 2px solid black;
              padding: 5px 10px;
              display: inline-block;
              font-size: 20px;
              text-decoration: none;
              text-transform: uppercase;`

link.classList.add('button')