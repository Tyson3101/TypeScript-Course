function add(
  n1: number,
  n2: number
): number /* type checks the return value data type as number*/ {
  return n1 + n2; // this returns data type number
}

function printResult(num: number): void {
  console.log("Result: " + num); // data type void
  // if nothing is returned, means has the data type void
  // in javascript it would just be undefined
  //return "Result: " + num; = this is a string
}

console.log(printResult(add(5, 10))); // console logs undefined.
