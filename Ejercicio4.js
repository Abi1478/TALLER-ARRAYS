let productos = ["Galletas" , "Papas" , "Gaseosa" , "Chocolate" , "Caramelos"]
let stock = [5, 3 , 4, 2, 6]

function mostrarInventario() {
    alert(
        "0. " + productos[0] + " (Stock: " + stock[0] + ")\n" +
        "1. " + productos[1] + " (Stock: " + stock[1] + ")\n" +
        "2. " + productos[2] + " (Stock: " + stock[2] + ")\n" +
        "3. " + productos[3] + " (Stock: " + stock[3] + ")\n" +
        "4. " + productos[4] + " (Stock: " + stock[4] + ")\n"
    );
}

function comprarProducto(){
    while(true){
        mostrarInventario()
        let codigo = prompt("Ingrese el código del producto (0 - 4) o 'salir' para terminar:")

        if(codigo.toLowerCase() === "salir") {
            alert("Saliendo...");
            window.location.href = "index.html"
        }

        codigo = parseInt(codigo)
        if(isNaN(codigo) || codigo < 0 || codigo >= productos.length) {
            alert ("Código inválido, intente de nuevo.")
            continue;
        }

        if(stock[codigo] > 0) {
            let pago = Number(prompt("Ingrese $1 para comprar" + productos[codigo] + ":"))
            if(pago === 1) {
                stock[codigo] --
                alert("Has comprado " + productos[codigo] + ". ¡Disfrutalo!")
            } else {
                alert("Pago incorrecto. Intente nuevamente.")
            }
        } else {
            alert("El producto está agotado.")
            sugerirProducto();
        }
    }
}

function sugerirProducto() {
    for(let i = 0; i < stock.length; i ++) {
        if(stock[i] > 0) {
            alert("Te sugerimos: " + productos[i])
            return;
        }
    }
    alert("Lo sentimos, todos los productos están agotados.")
}

function menu(){
    let opcion
  
    do{
      opcion = Number(prompt("Maquina Expendedora \n 1. Mostrar inventario \n 2. Comprar \n 3. Salir \n Ingrese una opción:"))
      
      if(opcion <1 || opcion >3) {
        alert("Opción no válida. Intente de nuevo.")
      continue
      }
      switch(opcion){
        case 1: 
        mostrarInventario();
        break;
  
        case 2: 
        comprarProducto();
        break;
  
        case 3:
          alert("Saliendo...");
          window.location.href = "index.html"
        break;
      }
    } while(opcion !== 3)
  }
  menu();