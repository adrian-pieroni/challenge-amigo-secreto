/*Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Tareas específicas:
 Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.*/



const inputAmigo = document.getElementById("input_amigo"),
/* botonAgregar = document.getElementById("boton_agregar"),*/
 botonSortear = document.getElementById("sortear_amigo"),
 listaAmigos = document.getElementById("listaAmigos"),
 listaSorteado = document.getElementById("resultado");

 const amigos = [];

/*Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/

const validarInput = (textoInput) => textoInput && textoInput.trim().length > 0;

/*Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.*/

const agregarAmigo = () => {
  const nombre = inputAmigo.value;
  if (!validarInput(nombre)) alert("Ingrese un nombre valido");
  else {
   listaAmigos.innerText += `${nombre}\n`;
  amigos.push(nombre);
  inputAmigo.value = "";
  }
}


const sortearAmigo = () => {
  if(amigos.length == 0) {
    alert("No hay amigos-");
    return;
  }
  const aleatorio = Math.floor(Math.random() * amigos.length); 
  listaSorteado.innerText =`El amigo secreto es: ${amigos[aleatorio]}`;
};


