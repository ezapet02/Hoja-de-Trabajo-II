const readline = require(`readline-sync`)

const precioProducto = Number(readline.question(`Ingrese el precio del producto: `))
const porcentajeDescuento = (Number(readline.question(`Ingrese el porcentaje de descuento: `))) / 100

const precioFinal = precioProducto * (1 - porcentajeDescuento)

console.log(`El precio final con descuento es: Q${precioFinal}`)

const estatura = Number(readline.question(`
    Ingrese su estatura en centimetros por favor: `))

if(estatura >= 120 && estatura <= 200){
    console.log(`
        Tiene la estatura permitida, puede ingresar al juego mecánico`)
}
else{
    console.log(`
        No tiene la estatura permitida, no puede ingresar al juego mecánico`)
}
