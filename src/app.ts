function add(
  n1: number,
  n2: number
): number /* type checks the return value data type as number*/ {
  return n1 + n2; // this returns data type number
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  // checks if cb is a function with a number paramater and what it will ignore what it returns as of the ignore
  cb(n1 + n2);
}

let combineValues: (a: number, b: number) => number; // only accepts functions that have 2 params that are numbers, and returns a number
combineValues = add; // Add has 2 params that are numbers, and returns a number

console.log(combineValues(8, 8)); // 16

addAndHandler(10, 20, (a) => {
  console.log(a);
});
