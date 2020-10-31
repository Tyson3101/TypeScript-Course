function add(n1: number, n2: number, showResult: boolean, prefix: string) {
  if (showResult) console.log(prefix, n1 + n2);
  else return n1 + n2;
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPrefix = "The Number returned:";

add(number1, number2, printResult, resultPrefix);
