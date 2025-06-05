
interface Usuario {
    nombre: string
    edad: number
    activo: boolean
    correo?: string
}

interface InformacionLogin{
    correo: string
    clave: string
    recaptcha: boolean
}

const usuarioActual: Usuario = {

        nombre: "Eduardo",
        edad: 23,
        activo: true,
        correo: "ejemplo01@gmail.com"
        
}

function loguear(info:InformacionLogin):void {

    if (
        info.correo.includes("@") && info.correo.includes(".") &&
        info.clave.length >= 6 &&
        info.recaptcha == true
    ){console.log(`Acceso permitido`)}
    else{
        console.log(`Datos inválidos`)
    }

}

 const datosLogin: InformacionLogin = {
    correo: 'correoejemplo2@gmail.com',
    clave: 'programacion',
    recaptcha: true
 }

 loguear(datosLogin)