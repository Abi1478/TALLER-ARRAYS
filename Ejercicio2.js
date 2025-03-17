let saldo = 0;
let transacciones = [];

function consultarSaldo(){
  alert(`Saldo actual: $${saldo}`)
}

function depositar(){
  let monto = Number(prompt("Ingrese el monto que desea depositar:"))
  if(isNaN(monto) || monto <= 0){
    alert("Error: El monto debe ser un número positivo.")
  } else {
    saldo += monto
    registrarTransaccion(monto)
    alert (`Deposito exitoso: $${monto}`)
  }
}

function retirar(){
  let monto = Number(prompt("Ingrese el monto que desea retirar:"))
  if(isNaN(monto) || monto <=0){
    alert("Error: El monto debe ser un número positivo.")
  } else if(monto > 500){
    alert("Error: No se puede retirar mas de $500 en una sola transacción.")
  } else if(monto > saldo) {
    alert("Error: Saldo insuficiente")
  } else {
    saldo -= monto
    registrarTransaccion(-monto)
    alert(`Retiro exitoso: $${monto}`)
  }
}

function registrarTransaccion(monto){
  if(transacciones.length >= 5){
    transacciones.shift()
  }
  transacciones.push(monto)
}

function mostrarTransacciones(){
  if(transacciones.length === 0){
    alert("No hay transacciones recientes")
  } else {
    alert("Ultimas transacciones: \n" + transacciones. join(" \n"))
  }
}

function menu(){
  let opcion

  do{
    opcion = Number(prompt("Cajero Automático Fajis \n 1. Consultar saldo \n 2. Depositar dinero \n 3. Retirar dinero \n 4. Ver últimas transacciones \n 5. Salir \n Ingrese una opción:"))
    
    if(opcion <1 || opcion >5) {
      alert("Opción no válida. Intente de nuevo.")
    continue
    }
    switch(opcion){
      case 1: 
      consultarSaldo();
      break;

      case 2: 
      depositar();
      break;

      case 3:
      retirar();
      break;

      case 4:
      mostrarTransacciones();
      break;

      case 5:
        alert("Gracias por usar el cajero ¡Hasta Luego!");
        window.location.href = "index.html"
      break;
    }
  } while(opcion !== 5)
}
menu();