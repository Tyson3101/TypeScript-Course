function gernerateError(message: string, code: number): never {
  // gives return value as never
  throw {
    message: message,
    errorCode: code,
  };
}

let result = gernerateError("an error errcured", 400);
console.log(result); // logs nothing, while void does, basically crashes script (need try catch to keep going)

// while(true) {} also returns never
