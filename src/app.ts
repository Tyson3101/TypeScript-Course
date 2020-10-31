let userInputUnknown: unknown;
let userNameUnknown: string;

let userInputAny: any;
let userNameAny: string;

userInputUnknown = 3;
userInputUnknown = "Tyson";
userInputUnknown = userInputUnknown; // Error: Type 'unknown' is not assignable to type 'string'

userInputAny = 3;
userInputAny = "Tyson";
userNameAny = userInputAny; // No Error

/*
  Do extra type check with unknown as it can check if is string, while any wont check and just assign it self
*/
if (typeof userInputUnknown === "string") {
  userNameUnknown = userInputUnknown;
}

console.log(userNameUnknown);
