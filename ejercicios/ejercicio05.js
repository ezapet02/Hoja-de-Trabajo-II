const readline = require(`readline-sync`)

let segundos = Number(readline.question(`Ingrese la cantidad que desea temporizar: `))


while (segundos >= 0){
    intervalo = segundos
    console.log(segundos)
     console.log(`Faltan ${intervalo} segundos`)
    segundos--
}
  console.log(`El tiempo finalizó`)


  let opcion = 0
  const hora = new Date().toLocaleTimeString()

do{
    let opcionMenu = Number(readline.question(`ingrese una de las siguientes opciones para continuar:
        1. Saludar
        2. Mostrar hora actual
        3. Salir
`))
        opcion = opcionMenu

        switch (opcion){
            case 1:
                console.log(`Hola, ¿cómo estás?`)
                break
            case 2:
                console.log(`la hora actual es: ${hora}`)
                break
            case 3:
                console.log(`Saliendo`)
                break

        }
}
while (opcion != `3`)