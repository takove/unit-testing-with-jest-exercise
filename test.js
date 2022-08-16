const { sum } = require('./app');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 134.24 yens", function(){
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(1)

    const expected = 1 * 134.24; 
    
     expect(fromDollarToYen(1)).toBe(134.24); 
})

test("Three hundred yens should be 1.85 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(162.27)

    const expected = 162.27 * 0.0062; 
    
     expect(fromYenToPound(162.27)).toBe(1); 
})