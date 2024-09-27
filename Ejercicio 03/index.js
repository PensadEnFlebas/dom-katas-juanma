// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

//? 1.1 SOLUTION
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

let ul = document.createElement('ul')

for (const countrie of countries) {
  let li = document.createElement('li')
  li.innerText = countrie
  ul.append(li)
}

document.body.append(ul)

//? 1.2 SOLUTION
let removedElement = document.querySelector('.fn-remove-me')
removedElement.remove()

//? 1.3 SOLUTION
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

let newUl = document.createElement('ul')

for (const car of cars) {
  let li = document.createElement('li')
  li.innerText = car
  newUl.append(li)
}

let divCars = document.querySelector('[data-function="printHere"]')

divCars.append(newUl)

//? 1.4 SOLUTION (cambio el título del array para avitar coincidencia con el del ejercicio 1.1)
const images = [
  { title: 'Random image 1', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random image 2', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random image 3', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random image 4', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random image 5', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

let card = document.querySelector('body')

for (const image of images) {
  let imageDiv = document.createElement('div')
  let imageTitle = document.createElement('h4')
  imageTitle.innerText = image.title
  let randomImage = document.createElement('img')
  randomImage.src = image.imgUrl
  randomImage.alt = image.title

  //SIGUIENTE CÓDIGO PERTENECE AL EJERCICIO 1.6
  let deleteButton = document.createElement('button')
  deleteButton.innerText = 'eliminate this card'

  deleteButton.addEventListener('click', () => {
    imageDiv.remove()
  })
  //FIN CÓDIGO DE EJERCICIO 1.6

  imageDiv.append(imageTitle)
  imageDiv.append(randomImage)
  //SIGUIENTE CÓDIGO PERTENECE AL EJERCICIO 1.6
  imageDiv.append(deleteButton)
  //FIN CÓDIGO DE EJERCICIO 1.6
  card.append(imageDiv)
}

//? 1.5 SOLUTION (en la función, la condición que propongo es (cards.lenght > 1) en vez de (cards.lenght > 0) para evitar que elimine el div ya existente con el atributo [data-function="printHere"])
let eraseButton = document.createElement('button')
eraseButton.innerText = 'eliminate last card'

eraseButton.addEventListener('click', () => {
  let cards = document.querySelectorAll('div')

  if (cards.length > 1) {
    cards[cards.length - 1].remove()
  }
})

document.body.append(eraseButton)

//? 1.6 SOLUTION
// LA SOLUCIÓN ESTÁ INCLUIDA Y ESPECIFICADA EN EL APARTADO "1.4 SOLUTION"
