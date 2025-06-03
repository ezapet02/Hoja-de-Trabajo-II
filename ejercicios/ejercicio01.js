const readline = require(`readline-sync`)

const nombre = readline.prompt({prompt: `Ingrese su nombre:  `})
const edad = Number(readline.prompt({prompt: `Ingrese su edad:  `}))
const pregunta = readline.prompt({prompt: `Ingrese su estado (activo/inactivo):  `})
const estado = pregunta.toLocaleLowerCase() === `activo`

console.log(`
    Hola, me llamo ${nombre}, tengo ${edad} años y estoy activ@: ${estado}
    `)

console.log(`La variable nombre es de tipo: ${typeof(nombre)}, La variable edad es de tipo: ${typeof(edad)}, y La variable estado es de tipo: ${typeof(estado)}
`)

let valorNulo = null
let valorNoAsignado 

console.log(`
    valorNulo
    valorNoAsignado 
   `)
console.log(`La variable valorNulo es de tipo: ${typeof(valorNulo)}, La variable valorNoAsignado es de tipo: ${typeof(valorNoAsignado)}`)