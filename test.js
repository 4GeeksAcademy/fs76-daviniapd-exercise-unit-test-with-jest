// Importar la función sum del archivo app.js
const  { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
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
});


test("55 euros should be 58.85 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(55);
    const expected = 55 * 1.07;
    expect(fromEuroToDollar(55)).toBe(58.85);
});

test("2.14 dollars should be 313 japan yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2.14);
    const expected = (2.14 / 1.07) * 156.5;
    expect(fromDollarToYen(2.14)).toBe(313);
});

test("7 dollars should be 1023.8317757009345 japan yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(7);
    const expected = (7 / 1.07) * 156.5;
    expect(fromDollarToYen(7)).toBe(1023.8317757009345);
});

test("306 japan yen should be 1.7010862619808307 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(306);
    const expected = (306 / 156.5) * 0.87;
    expect(fromYenToPound(306)).toBe(1.7010862619808307);
}); 

test("1095.5 japan yen should be 6.09 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(1095.5);
    const expected = (1095.5 / 156.5) * 0.87;
    expect(fromYenToPound(1095.5)).toBe(6.09);
}); 