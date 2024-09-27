// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood', //! Uy, uy, uy... Voy a poner falta: El álbum es "Reign IN Blood" 🤘 jajajajajajaja 😉
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

// CÓDIGO PARA CORREGIR EL ERROR DEL ÁLBUM EN LA POSICIÓN [1]:
albums[1] = 'Reign in Blood'

//? SOLUTION
let body = document.querySelector('body')
let ul = document.createElement('ul')

for (const album of albums) {
  let li = document.createElement('li')
  li.innerText = album

  ul.append(li)
}

body.append(ul)
