// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js')

test('One euro should be 1.206 dollars', () => {

    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5*1.2

    expect(dollars).toBe(expected)
})

test('One dollar should be 115.60 yens', ()=>{
    const yens = fromDollarToYen(3.5)
    const expected = 3.5 * 115.60

    expect(yens).toBe(expected)
})

test('One yen should be 0.006384 pounds', ()=>{
    const pounds = fromYenToPound(35)
    const expected = 35 * 0.006384

    expect(pounds).toBe(expected)
})