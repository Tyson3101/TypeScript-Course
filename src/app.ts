function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number")
    // if number
    result = input1 + input2;
  else result = input1.toString() + input2.toString(); // if string (we make sure it is a string or number in the paramaters so only else can be if string)
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Tyson", "Mat"); // want to make it accept numbers AND string.
console.log(combinedNames);
