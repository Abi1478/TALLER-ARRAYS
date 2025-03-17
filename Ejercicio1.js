let habitaciones = Array(10).fill(0);

function mostrarHabitaciones(){
  let estado = habitaciones.map((h, i) => `Habitación ${i}: ${h === 0? "Libre" : "Ocupada"}`).join("\n")
  alert("El estado de las habitaciones: \n" + estado)
}

function reservarHabitacion(){
  let libres = habitaciones.map((h,i) => (h === 0? i: -1)).filter(i => i!==-1)

  if(libres.length === 0) {
    alert("No hay habitaciones disponibles!")
    return;
  }

  let num = parseInt(prompt(`Habitaciones libres: ${libres.join(", ")}\n Ingrese el número de habitación que desea reservar:`))

  if(habitaciones[num] === 0) {
    habitaciones[num] = 1
    alert("Habitación " + num + " reservada con exito.")
  } else {
    alert("Esta habitación ya se encuentra ocupada.")
  }
}

function liberarHabitacion(){
  let ocupadas = habitaciones.map((h, i) => (h === 1? i: -1)).filter(i => i!==-1)

  if(ocupadas.length === 0) {
    alert("No hay habitaciones ocupadas")
    return;
  }

  let num = parseInt(prompt(`Habitaciones ocupadas: ${ocupadas.join(", ")} \n Ingrese el número de habitación que desea liberar:`))

  if(habitaciones[num] === 1) {
    habitaciones[num] = 0
    alert("Habitación" + num + "liberada con exito.")
  } else {
    alert("Esta habitacion ya se encuentra libre")
  }
}

function iniciarSistema() {
  let opcion

  do{
    opcion = Number(prompt("Sistema de reservas de Hotel Doris \n 1. Ver estado de habitaciones \n 2. Resevar una habitación \n 3.Liberar una habitación \n 4. Salir \n Ingrese una opción:"))
    
    if(opcion <1 || opcion >4) {
      alert("Opción incorrecta, elija una válida")
    continue
    }
    switch(opcion){
      case 1: 
      mostrarHabitaciones();
      break;

      case 2: 
      reservarHabitacion();
      break;

      case 3:
      liberarHabitacion();
      break;

      case 4:
        alert("Saliendo del sistema...");
        window.location.href = "index.html"
      break;
    }
  } while(opcion !== 4)
}
iniciarSistema()


