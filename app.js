// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Implementa una función para agregar amigos.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

//Inicializo la lista de amigos como un array vacío.
let listaAmigos = [];

//inicializo la variable nuevoAmigo
//let nuevoAmigo = ""

//Pido el ingreso del nuevo amigo.
//nuevoAmigo = prompt("Ingrese su nuevo amigo");
let listaDeAmigos = [];

//Función que agrega un amigo a la la lista listaDeAmigos[]
function agregarAmigo() {
    // Obtener el elemento del input por su ID
    const inputAmigo = document.getElementById('amigo').value;

  
    // Obtener el valor ingresado en el input

  
    // Hacer algo con el valor obtenido (ejemplo: mostrar en consola)
    console.log(`El nombre ingresado es: ${inputAmigo}`);
    console.log(inputAmigo);
    // Limpiar el input (opcional)
   // inputAmigo.value = '';

listaDeAmigos.push(inputAmigo);

console.log(listaDeAmigos);
}

//Generar un bucle para que se repita el agredao y gurdado de amigos en la lista.

//Indicar la condición de salida del bucle.