
const number1 = 18;

const number2 = 9;

let math ="Math using " + number1 + " and " + number2 + " we'll be using multiplcation and division." ;
console.log("Math using " + number1 + " and " + number2 + " we'll be using multiplication division.")

function multiplication(number1, number2){
    let equalToo = number1 * number2;
    console.log(+ number1 + " multiplied by " + number2 + " equals too " + equalToo + ".")
}
function division(number2, number1){
    let equalToo = number2 / number1;
    console.log(+ number2 + " divided by " + number1 + " equals too " + equalToo + ".")
}

let mult = number1 * number2;
let div = number2 / number1;

multiplication(9,18);
division(18,9);

document.write("<h1>Multiplication and Division with 9 and 18</h1>")

alert("There is math in here")

prompt("Do you like math?")