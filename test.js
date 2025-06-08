// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('Si sumo 14 mas 9 deberia darme 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 1556.5 Yen",function(){
    const {fromDollarToYen} =require ('./app.js')

    //Uso la funcion como debe ser usada
    const Yen = fromDollarToYen (3.5);

    // Si 1.07 dolar en yens seria de 156.5, entonces debe ser (3.5 * 156.5)
    const expected= 3.5 * 156.5;
    // Hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("One yen should be 0.87 Pound",function(){
    const {fromYenToPound} =require ('./app.js')

    //Uso la funcion como debe ser usada
    const GBP = fromYenToPound (3.5);

    // Si 1.07 dolar en yens seria de 156.5, entonces debe ser (3.5 * 156.5)
    const expected= 3.5 * 0.87;
    // Hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.045);
})