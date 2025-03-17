const cola = [];
const capacidadMaxima = 7

function agregarCliente() {
  if(cola.length < capacidadMaxima) {
    let nombre = prompt("Ingrese el nombre del cliente:")
    if(nombre) {
      cola.push(nombre)
      alert(`${nombre} ha sido agregado a la cola.`)
    }
  }
}

function atenderCliente() {
  if(cola.length > 0){
    let atendido = cola.shift();
    alert(`${atendido} ha sido atendido.`)
  } else {
    alert("No hay clientes en la cola.")
  }
}

function mostrarCola() {
  alert("Clientes en la cola: \n " + (cola.length > 0?cola.join(" \n ") : alert("La cola está vacía!")))
}

function menu(){
  let opcion

  do{
    opcion = Number(prompt("Cola de atención al cliente \n 1. Agregar cliente \n 2. Atender cliente \n 3. Mostrar cola \n 4. Salir \n Ingrese una opción:"))
    
    if(opcion <1 || opcion >4) {
      alert("Opción no válida. Intente de nuevo.")
    continue
    }
    switch(opcion){
      case 1: 
      agregarCliente();
      break;

      case 2: 
      atenderCliente();
      break;

      case 3:
      mostrarCola();
      break;

      case 4:
        alert("Saliendo...");
        window.location.href = "index.html"
      break;
    }
  } while(opcion !== 4)
}
menu();