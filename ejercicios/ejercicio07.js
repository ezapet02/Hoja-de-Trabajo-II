const readline = require(`readline-sync`)

    const base = Number(readline.question(`Ingrese la base del triágulo: `))
    const altura = Number(readline.question(`Ingrese la altura del triágulo: `))
function calcularAreaTriangulo(base, altura){

    return (base * altura)/ 2
}

function mostrarSaludo(){
      const dato = readline.question(`Ingrese su nombre: `)

      console.log(`\n Hola, ${dato}. Bienvenid@ al sistema de geometría`)
}

mostrarSaludo()

console.log(`\n El area del triangulo es: ${calcularAreaTriangulo(base, altura)}`)

