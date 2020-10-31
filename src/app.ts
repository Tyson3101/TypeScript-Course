/*
interface Named {
  name: string;
}

function sayName(o: Named) {
  console.log(o.name); // Doesnt log cause error is catched with the interface
}

const bottle = {
  litres: 1,
};

sayName(bottle); // Need name object

*/

interface Printable {
  print();
}

const Tyson = {
  name: "Tyson",
  age: 546,
  print: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old!`);
  },
};

function bottle(p: Printable) {
  //Checks if object pass contains a print function
  p.print();
}

bottle(Tyson); // logs My name is Tyson and I am 546 years old!
