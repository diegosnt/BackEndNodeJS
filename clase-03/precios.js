/*
Ejercicio Práctico
Calculando con Precisión

Ejercicio 1
Después de demostrar tus primeros pasos con Node.js, Matías y Sabrina te plantean un
reto más interesante.

“Imaginá que los precios de los productos del cliente están listos para
cargarse en el sistema”, te dicen. Pero hay un detalle: antes de enviarlos,
tenés que calcular el IVA del 21% y presentarlos de manera clara.

Tu misión:
1.​ Creá un array con 10 números que representen los precios de los productos.
2.​ Utiliza un método de array para calcular el precio con IVA incluido para cada valor.

Ejercicio 2
Ahora que tenés los valores con IVA calculados, es momento de mostrarlos
como un desarrollador profesional. Matías te desafía a usar template literals
para estructurar tu salida de esta forma:
El precio es: ${valor}.- IVA incluido.
Imprimí cada precio ajustado en la consola siguiendo este formato. Cada mensaje debe ser
claro y profesional, como si estuvieras preparando un reporte para el cliente.

¿Puedes demostrar tu capacidad para manejar datos y presentar resultados de manera
impecable?
¡Este es tu momento!
*/

articulos = ["Producto 1","Producto 2","Producto 3","Producto 4","Producto 5","Producto 6","Producto 7","Producto 8","Producto 9","Producto 10"];

precios = [10,21,3.5,4.15,5,6,7.8,8,9.2,10.2];

// console.table(articulos);

const iva = 21;
const iva_calaculo = 1+(iva/100);

// console.log(iva);
// console.log(1+(iva/100));

articulos.forEach((articulo, index) => {
    console.log(`El precio del ${articulo} es : ${precios[index]}.- IVA incluido: ${(precios[index] * iva_calaculo).toFixed(2)}`);
});
