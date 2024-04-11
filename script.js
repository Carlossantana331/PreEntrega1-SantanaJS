
//funcion  para imrpimir las tareas que tengo ingresadas
function listaTareas(tareas) {
    let lista = "Lista de tareas: \n";
    for (let i = 0; i < tareas.length; i++) {
        lista += (i + 1) + "- " + tareas[i] + "\n";
    }
    return lista;
}

//variables
let tareas = [];
let eleccion = (0)

//se detiene el programa hasta que sea false
let paro = true;

//mensaje de bienvenida
console.log(
    "Bienvenido a tu lista de tareas\n" 
)

//inicia el bucle hasta que el usuario decida detenerlo
while (paro){

    //comprueba si hay tareas ya asignadas y de ser asi las muestra en pantalla
    if (tareas.length !== 0){
        console.log(listaTareas(tareas))
    
    }else{
        console.log("Aun no hay tareas en la lista.");
    }

    eleccion = prompt("Elige una opcion:\n1-Crear tarea\n2-Eliminar tarea\n3-Salir");

    //verificar si la entrada no es un número válido
    if (isNaN(eleccion)) {
        console.log("Entrada inválida. Por favor, ingresa un número válido.");
        continue;
    }

    //convierte lo ingresado en un numero
    eleccion = parseInt(eleccion);


    switch (eleccion){
        
        //agrega una nueva tarea a la lista
        case 1:
            tareas.push(prompt("Por favor, ingrese una tarea nueva: "))
            break
        
        //elimina una tarea
        case 2:

            //verifica si hay tareas pendientes, y avisa si no las hay 
            if (tareas.length === 0) {
                console.log("No hay tareas para eliminar.");
            
            //llama a la lista de tareas y el usuario elige cual eliminar
            } else {
                console.log(listaTareas(tareas))
        
                let indiceEliminar = parseInt(prompt("Ingrese el numero de la tarea que desea eliminar: "));
                
                // Validar si el indice es correcto
                if (indiceEliminar >= 1 && indiceEliminar <= tareas.length) {
                    tareas.splice(indiceEliminar - 1, 1); //eliminar la tarea
                    console.log("Tarea eliminada.");
                } else {
                    console.log("numero invalido inválido.");
                }
            }
            break;

        //termina el bucle 
        case 3:
            console.log("Espero haberlo ayudado, adios")
            paro = false

            break;

        //en caso de que el numero ingresado por el usuario sea invalido
        default:
            console.log("Opción no válida. Por favor, elija una opción válida.")

    }
}

