// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here

//? 1.1 SOLUTION
let newDiv = document.createElement('div')
document.body.append(newDiv)

//? 1.2 SOLUTION
let divWithParagraph = document.createElement('div')
let newParagraph = document.createElement('p')

document.body.append(divWithParagraph)
divWithParagraph.append(newParagraph)

//? 1.3 SOLUTION
let divWithMultParagraphs = document.createElement('div')

for (i = 0; i < 6; i++) {
  let newParagraph = document.createElement('p')
  divWithMultParagraphs.append(newParagraph)
}

document.body.append(divWithMultParagraphs)

//? 1.4 SOLUTION
let newP = document.createElement('p')
newP.innerText = 'soy dinámico!'

document.body.append(newP)

//? 1.5 SOLUTION
let subtitle = document.querySelector('h2')
subtitle.innerText = 'Wubba Lubba dub dub'

//? 1.6 SOLUTION
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let ul = document.createElement('ul')

for (const app of apps) {
  let li = document.createElement('li')
  li.innerText = app
  ul.append(li)
}

document.body.append(ul)

//? 1.7 SOLUTION
let eliminatedNodes = document.querySelectorAll('.fn-remove-me')

for (const eliminated of eliminatedNodes) {
  eliminated.remove()
}

//? 1.8 SOLUTION (Entiendo que lo tengo que insertar entre los div sin clase, ya que en el apartado 1.8 se refieren específicamente a los div con clase)
let insertedP = document.createElement('p')
insertedP.innerText = 'Voy en medio!'

let divs = document.querySelectorAll('div')

document.body.insertBefore(insertedP, divs[1])

//? 1.9 SOLUTION
let divsWithClass = document.querySelectorAll('.fn-insert-here')

for (const divWithClass of divsWithClass) {
  let pInsideDiv = document.createElement('p')
  pInsideDiv.innerText = 'Voy dentro!'
  divWithClass.append(pInsideDiv)
}
