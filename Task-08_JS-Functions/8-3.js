console.log("8.3. Калькулятор");

let zero = (example  = 'undefined') => expression(example , 0);
let one = (example  = 'undefined') => expression(example , 1);
let two = (example  = 'undefined') => expression(example , 2);
let three = (example  = 'undefined') => expression(example , 3);
let four = (example  = 'undefined') => expression(example , 4);
let five = (example  = 'undefined') => expression(example , 5);
let six = (example  = 'undefined') => expression(example , 6);
let seven = (example  = 'undefined') => expression(example , 7);
let eight = (example  = 'undefined') => expression(example , 8);
let nine = (example  = 'undefined') => expression(example , 9);

let plus = (example  = 'undefined') => action(example , '+');
let minus = (example  = 'undefined') => action(example , '-');
let times = (example  = 'undefined') => action(example , '*');
let dividedBy = (example  = 'undefined') => action(example , '/');


let symbs = new RegExp('[+\\-*/]');
function action(example , sign) {
  if (symbs.test(example )) {
    return "Error!";
  } 
  else {
    return sign + example ;
  }
}

function calculate(a, b, operator) {
  switch (operator) {
  case '+':
    return (a + b).toString();

  case '-':
    return (b - a).toString();
    
  case '*':
    return (a * b).toString();

  case '/':
    if (b / a === Number.POSITIVE_INFINITY) {
      return Number.POSITIVE_INFINITY.toString();
    }

    return parseInt(b / a).toString();
  
  default: return "Invalid";
  }
}

function expression(example , operator) {
  if (symbs.test(example )) {
    let operands = example .split(symbs);
    return calculate(Number(operands[1]), Number(operator), example [0]).toString();
  } 
  else {
    return operator.toString();
  }
}
console.log("Вводим: seven(times(five()))")
console.log("Получаем :", seven(times(five())))
console.log("Вводим: four(plus(nine()))")
console.log("Получаем :", four(plus(nine())))
console.log("Вводим: eight(minus(three()))")
console.log("Получаем :", eight(minus(three())))
console.log("Вводим: six(dividedBy(two()))")
console.log("Получаем :",  six(dividedBy(two())))
console.log("Вводим: eight(dividedBy(three()))")
console.log("Получаем :", eight(dividedBy(three())))
console.log("Вводим: three(times(three(times(three()))))")
console.log("Получаем :", three(times(three(times(three())))))
console.log("Вводим: two(plus(two(times(two(minus(one()))))))")
console.log("Получаем :", two(plus(two(times(two(minus(one())))))))
console.log("Вводим: zero(plus(one(dividedBy(one()))))")
console.log("Получаем :", zero(plus(one(dividedBy(one())))))
console.log("Вводим: one(dividedBy(zero()))")
console.log("Получаем :", one(dividedBy(zero())))
console.log("Вводим: one()")
console.log("Получаем :", one())