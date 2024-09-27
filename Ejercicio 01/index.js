// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

// 1.3 Usa querySelector para mostrar por consola todos los p

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

//? 1.1 SOLUTION
let button = document.querySelector('.showme')
console.log(button)

//? 1.2 SOLUTION
let title = document.querySelector('#pillado')
console.log(title)

//? 1.3 SOLUTION
let paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

//? 1.4 SOLUTION
let pokemons = document.querySelectorAll('.pokemon')
console.log(pokemons)

//? 1.5 SOLUTION
let dataTestMeNodes = document.querySelectorAll('[data-function="testMe"]')
console.log(dataTestMeNodes)

//? 1.6 SOLUTION
console.log(dataTestMeNodes[2])
