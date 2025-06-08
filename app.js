// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
    
}

// Declaramos una funcion con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // Convetimos el valor a yenes
    let valueInyen = valueInDollar * 156.5;
    // Retornamos el valor en yenes 
    return  valueInyen;
}

// Declaramos una funcion con el nombre exacto "fromDollarToPound"
const fromYenToPound = function(valueInyen){
    // Convetimos el valor a Pound
    let valueInPound = valueInyen * 0.87;
    // Retornamos el valor en Pound 
    return  valueInPound;
}
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound}
console.log("Dolar: " + fromEuroToDollar(1), "yen: " + fromDollarToYen(3.5), "Pound: " + fromYenToPound(3.5))