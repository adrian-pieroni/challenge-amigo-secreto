

//Implementa una función para agregar amigos.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

//Inicializo la lista de amigos como un array vacío.
let listaAmigos = [];


//nuevoAmigo = prompt("Ingrese su nuevo amigo");
let listaDeAmigos = [];

//Función que agrega un amigo a la la lista listaDeAmigos[]
function agregarAmigo() {
    // Obtener el elemento del input por su ID
    const inputAmigo = document.getElementById('amigo').value;

    // Hacer algo con el valor obtenido (ejemplo: mostrar en consola)
    console.log(`El nombre ingresado es: ${inputAmigo}`);
    console.log(inputAmigo);

   //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push()
    if (inputAmigo == ""){
    alert("Debes ingresar un nombre válido");} else {
    listaDeAmigos.push(inputAmigo);
    console.log(listaDeAmigos);
    limpiarCaja();
    }
    return listaAmigos;
}
 // Limpiar el input (opcional)

 function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja ='';
 }

 function limpiarCaja(){
    let valorCaja = document.getElementById('amigo').value="";
  
 }

//Generar un bucle para que se repita el agredao y gurdado de amigos en la lista.

//Indicar la condición de salida del bucle