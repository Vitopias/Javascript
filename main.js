let seguirOperando = true;
let valorDolar = 810;
let valorEuro = 842;
let valorReal = 100;

while (seguirOperando) {
    let calculadora = Number(prompt(`Bienvenido al portal para compras en el exterior! Indique su operación:
1. Conversor de moneda.
2. Aplicar impuesto.
3. Salir.`));

    if (calculadora === 1) {
        let cambios = Number(prompt(`Ingrese qué tipo de cambio quiere hacer:
1. ARS - USD
2. ARS - EUR
3. ARS - BRL
4. USD - ARS
5. EUR - ARS
6. BRL - ARS`));

        let cantidad = Number(prompt("Ingrese la cantidad a convertir:"));

        switch (cambios) {
            case 1:
                let resultadoUSD = cantidad / valorDolar;
                alert(`El cambio es de $${resultadoUSD.toFixed(2)}`);
                break;
            case 2:
                let resultadoEUR = cantidad / valorEuro;
                alert(`El cambio es de €${resultadoEUR.toFixed(2)}`);
                break;
            case 3:
                let resultadoBRL = cantidad / valorReal;
                alert(`El cambio es de R$${resultadoBRL.toFixed(2)}`);
                break;
            case 4:
                let resultadoARSUSD = cantidad * valorDolar;
                alert(`El cambio es de ARS$${resultadoARSUSD.toFixed(2)}`);
                break;
            case 5:
                let resultadoARSEUR = cantidad * valorEuro;
                alert(`El cambio es de ARS$${resultadoARSEUR.toFixed(2)}`);
                break;
            case 6:
                let resultadoARSBRL = cantidad * valorReal;
                alert(`El cambio es de ARS$${resultadoARSBRL.toFixed(2)}`);
                break;
            default:
                alert("Ingrese una opción válida del 1 al 6.");
        }
    } else if (calculadora === 2) {
        const suma = (x, y) => x + y;
        const resta = (x, y) => x - y;
        const iva = (precio) => precio * 0.21;

        let precioProducto = Number(prompt("Ingrese el precio del producto"));
        let descuento = Number(prompt("Si tiene un descuento, ingrese el descuento a aplicar."));
        let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

        alert(`El total con el impuesto aplicado es de $${nuevoPrecio.toFixed(2)}`);
    } else if (calculadora === 3) {
        seguirOperando = false;
        alert("Gracias por usar nuestro servicio. ¡Hasta luego!");
    } else {
        alert("Ingrese una opción válida del 1 al 3.");
    }
}