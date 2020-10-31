type Combinable = number | string; // union types
type CombinableResultConverstions = "as-number" | "as-text"; // union and literal types

function combine(
  input1: Combinable, // checks number or string as type showed up before
  input2: Combinable,
  resultConversion: CombinableResultConverstions // only allow the type defined as CombinableResultConverstions as 3rd paramater
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();
  if (resultConversion === "as-number") return parseFloat(result);
  else return result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Tyson", "Mat", "as-text"); // want to make it accept numbers AND string.
console.log(combinedNames);
