const readline = require(`readline-sync`)

const dato = readline.question(`Por favor ingrese su fecha de nacimiento en siguiente formato: (YYYY-MM-DD): `)
const fechaNacimiento = new Date(dato)
const anioNacimiento = fechaNacimiento.getFullYear()
const anioActual = new Date().getFullYear()

const edad = anioActual - anioNacimiento

if(edad < 12 ){
    console.log(`Tu edad es: ${edad}, eres un niño`)
}
else if(edad >= 12 && edad <= 17){
    console.log(`Tu edad es: ${edad}, eres un adolescente`)
}
else if(edad >= 18 && edad <= 64){
    console.log(`Tu edad es: ${edad}, eres un adulto`)
}
else{
    `Tu edad es: ${edad}, eres un adulto mayor`
}

const nota = Number(readline.question(`Ingresa tu nota del exámen:
    `))

if(nota >= 90 ){
    console.log(`tienes una A como calificación`)
}
else if(nota >= 80 && edad <= 89){
    console.log(`tienes una B como calificación`)
}
else if(nota >= 70 && edad <= 79){
    console.log(`tienes una C como calificación`)
}
else if(nota >= 60 && edad <= 69){
    console.log(`tienes una D como calificación`)
}
else if(nota < 60){
    console.log(`tienes una F como calificación`)
}
else{
    `Nota no válida`
}