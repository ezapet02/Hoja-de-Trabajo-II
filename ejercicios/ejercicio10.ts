enum Prioridad{
    ALTA = "🔴",
    MEDIA = "🟡",
    BAJA = "🔵"
}

enum EstadoTarea{
    Pendiente = "PENDIENTE",
    En_Progreso = "EN PROGESO",
    Finalizada = "FINALIZADA"

}

interface Tarea{
    id: number
    titulo: string
    completada: boolean
    prioridad: Prioridad
    estado: EstadoTarea
}

class GestorTareas {
    private tareas: Tarea[]=[]

    agregarTarea(titulo: string, prioridad: Prioridad){
       const nuevaTarea: Tarea = {
        id: Date.now(),
        titulo: titulo,
        completada: false,
        prioridad: prioridad,
        estado: EstadoTarea.Pendiente
       }
        this.tareas.push(nuevaTarea)
    }

 
    
    listarTareas(): void{
    this.tareas.forEach(tarea => {
      const prioridadModificada = tarea.prioridad.charAt(0) + tarea.prioridad.slice(1).toLowerCase()
      const  estadoModificado = tarea.estado.charAt(0) + tarea.estado.slice(1).toLowerCase()
      console.log(`[${prioridadModificada}] ${tarea.titulo} - Estado: ${estadoModificado}`)
    })
    }

}

const gestor = new GestorTareas()
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
gestor.agregarTarea("ordenar mi cuearto", Prioridad.BAJA)
 
gestor.listarTareas()
