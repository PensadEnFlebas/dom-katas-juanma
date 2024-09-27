// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

//? 1.1 SOLUTION
let body = document.querySelector('body')
let newButton = document.createElement('button')
newButton.id = 'btnToClick'
newButton.innerText = 'Click here'

newButton.addEventListener('click', (click) =>
  console.log(`Información del evento: `, click)
)

body.append(newButton)

//? 1.2 SOLUTION
let focusEvent = document.querySelector('.focus')

focusEvent.addEventListener('focus', (focus) => {
  console.log(`Valor del input tras focus: `, focusEvent.value)
})

//? 1.3 SOLUTION
let inputEvent = document.querySelector('.value')

inputEvent.addEventListener('input', (input) => {
  console.log(`Valor del input: `, inputEvent.value)
})
