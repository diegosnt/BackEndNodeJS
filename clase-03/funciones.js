//Funcion declarada

function saludar(){
    console.log("Hola!!!");
}

saludar();
console.log(saludar)

// -----------------------------------
//funcion expresada / anonima

const saludar2 = function () {
    console.log("Hola2 !!")
}
saludar2()
console.log(saludar2)

// -----------------------------------
//funcion flecha
const saludar3 = () => {
    console.log("Hola3 !!")
}
saludar3()
console.log(saludar3)