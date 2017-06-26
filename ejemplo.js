var assert = require('assert'); // en esta linea cargamos un modulo de node.js puede ser should 
function ejercicio1(arr, numero) {
    var res = 0;
    if (Array.isArray(arr))
        res = arr.reduce((n, m) => n * m);
    else if (!isNaN(arr))
        res = arr;
    if (!isNaN(numero))
        res = res * numero;
    return res;
}

describe("Ejercicio 1", function() { // describe: agrupa las pruebas
    it("arr = [4,4,5,12] y numero = 9 debe ser 8640", function() { //it:   define cada uno de las casos de prueba
        assert.equal(ejercicio1([4, 4, 5, 12], 9), 8640);
    });
    it("arr = [4,2,5,12] y numero = 0 debe ser 0", function() { //it:   define cada uno de las casos de prueba
        assert.equal(ejercicio1([4, 2, 5, 12], 0), 0);
    });
    it("arr = [4,2,5,12] y numero = nada debe ser 480", function() { //it:   define cada uno de las casos de prueba
        assert.equal(ejercicio1([4, 2, 5, 12]), 480);
    });
});