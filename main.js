function cotizarSeguro() {
    alert("Bienvenido al cotizador de seguros de automóvil");

    const nombre = prompt("Por favor, introduce tu nombre:");
    const edad = parseInt(prompt("Introduce tu edad:"));
    const tipoAuto = prompt("Introduce el tipo de automóvil (Hatch, SUV, PickUp):").toLowerCase();
    const historialAccidentes = confirm("¿Has tenido accidentes en los últimos 3 años? (Aceptar = Sí, Cancelar = No)");

    let costoBase;

    // Algoritmo condicional para determinar el costo base según el tipo de automóvil
    if (tipoAuto == "Hatch") {
        costoBase = 500;
    } else if (tipoAuto == "SUV") {
        costoBase = 1000;
    } else if (tipoAuto == "PickUp") {
        costoBase = 1500;
    } else {
        alert("Tipo de automóvil no válido. Por favor, inténtalo de nuevo.");
        return;
    }

    let costoFinal = costoBase;

    // Algoritmo condicional para ajustar el costo según la edad
    if (edad < 25) {
        costoFinal += 500;
    } else if (edad >= 25 && edad <= 60) {
        costoFinal += 200;
    } else if (edad > 60) {
        costoFinal += 400;
    }

    // Algoritmo condicional para ajustar el costo según el historial de accidentes
    if (historialAccidentes) {
        costoFinal += 300;
    }

    // Algoritmo con ciclo para aplicar descuentos por fidelidad (simulado)
    let añosCliente = parseInt(prompt("¿Cuántos años has sido cliente de nuestra aseguradora?"));
    for (let i = 0; i < añosCliente; i++) {
        costoFinal *= 0.98; // Aplicamos un descuento del 2% por cada año de cliente
    }

    // Mostrar resultado final
    alert(`${nombre}, el costo final de tu seguro es: $${costoFinal.toFixed(2)}`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Tipo de Automóvil: ${tipoAuto}`);
    console.log(`Historial de Accidentes: ${historialAccidentes ? "Sí" : "No"}`);
    console.log(`Años como Cliente: ${añosCliente}`);
    console.log(`Costo Final: $${costoFinal.toFixed(2)}`);
}