var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Matrix de numeros:", numberArray);

function above5Filter(value) {
    return value > 5;
}
var FiltroMatrixNumeros = numberArray.filter(above5Filter);
console.log("Matriz de números filtrados: ", FiltroMatrixNumeros);

var ListaCompras = [
    "Leche", "Donas", "Galletas", "Chocolate", "Peanut Butter", "Pepto Bismol", 
    "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Lista de Compras: ", ListaCompras);

var valorbúsqueda = "Bismol";
function containFilter(value) {
    return value.indexOf(valorbúsqueda) !== -1;
}

var BusquedaListaCompras = ListaCompras.filter(containFilter);
console.log("Lista de compras buscada: ", BusquedaListaCompras);