const readline = require(`readline-sync`)

const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]

for (let i = 0; i < estudiantes.length; i++){

   const nombre = estudiantes[i]

     if (nombre.endsWith('a')) {
        console.log(`Bienvenida, ${nombre}`);
    } else {
        console.log(`Bienvenido, ${nombre}`);
    }
}

function promedioNotas(notas){
    let suma = 0

    for(let i = 0; i < notas.length; i++)
        suma += notas[i]

    const promedio = suma / notas.length
    console.log(`El promedio del grupo es: ${promedio}`)
}

promedioNotas(notas)
