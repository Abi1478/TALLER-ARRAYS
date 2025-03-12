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
    habitaciones = 1
    alert("Habitación" + num + "reservada con exito.")
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
    habitaciones = 0
    alert("Habitación" + num + "liberada con exito.")
  } else {
    alert("Esta habitacion ya se encuentra libre")
  }
}

function iniciarSistema() {
  let opcion

  do{
    opcion = prompt("Sistema de reservas de Hotel Doris \n 1. Ver estado de habitaciones \n 2. Resevar una habitación \n 3.Liberar una habitación \n 4. Salir \n Ingrese una opción:")
  }while(opcion !==4)
}



