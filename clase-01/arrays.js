let frutas = ["Pera", "Banana", "Manzana", "Frutilla"];
const verduras = ["Tomate", "Lechuga", "Cebolla"];

console.table(frutas);
console.log("Cantidad de elementos: " + frutas.length);
console.log("");

frutas.push("Uva");
frutas.unshift("Pomelo");
console.table(frutas);
console.log("Cantidad de elementos: " + frutas.length);
console.log("");

frutas.pop();
frutas.shift();
console.table(frutas);
console.log("Cantidad de elementos: " + frutas.length);
console.log("");

const frutasEnTexto = frutas.join("; ");
console.log(frutasEnTexto);
console.log("");

const frutasEnMayus = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMayus); 
console.table(frutasEnMayus); 
console.log("");

const frutasLargas = frutas.filter(fruta => fruta.length > 5);
console.table(frutasLargas);
console.log("");


const todos = frutas.concat(verduras);
const listaReducida = todos.reduce((acum, item) => acum + " | " + item);
console.table(todos);
console.log(listaReducida);
console.log("");

frutas.forEach((fruta, index) => {
    console.log(`Fruta #${index + 1}: ${fruta}`);
});
console.log("");

for (const verdura of verduras) {
    console.log(`Verdura: ${verdura}`);
}
