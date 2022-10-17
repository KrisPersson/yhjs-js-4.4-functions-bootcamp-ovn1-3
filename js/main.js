// Övning 1

/* Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.
 Anropa funktion och console.log svaret. 
 Tips! Du kan skriva .length på en variabel som är en sträng för att få längden. */

function returnLength(str) {
    return str.length
}

console.log(returnLength('Hello world!'))


// Övning 2

/* 
Skriv en funktion som plockar ut året från en sträng i datumformat.
 Använd substring(startIndex, endIndex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. 
 Funktionen ska ta en parameter, som ska vara en sträng. 
 Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. 
 Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.
*/


function extractYear(date) {

    const regex = /[1-2][90]\d{2}-[01]\d{1}-[0123]\d{1}/

    if (regex.test(date) && (date.substring(5, 7) < 13) && (date.substring(8) < 32)) {
        const year = date.substring(0, 4)
        console.log(year)
    } else {
        console.log('Wrong format (YYYY-MM-DD)')
    }
}

extractYear('1987-12-14')


// Övning 3

/*
Skriv en funktion som tar tre parametrar. 
De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
Utför beräkningen och returnera summan och skriv ut. 
Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) och varje operation ska vara sin egen funktion. 
Tips! Här kan typeof vara bra att använda https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/

function calculate(num1, num2, op) {
    let result = 0
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof op === 'string'){
        if (op === '+') {
            result = add(num1, num2)
        } else if (op === '-') {
            result = subtract(num1, num2)
        } else if (op === '*') {
            result = multiply(num1, num2)
        } else if (op === '/') {
            result = divide(num1, num2)
        } else {
            return 'Non-valid operator'
        }
        return result
    } 
}

console.log(calculate(1, 2, '+'))

function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}