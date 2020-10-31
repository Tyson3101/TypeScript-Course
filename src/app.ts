const person = {
  name: "Tyson",
  favNumber: 4,
  hobbies: ["Coding", "Gaming"], // Type string[]
};

let favoriteActivities: any[]; // Anything can go in array
favoriteActivities = ["Hey", 25];

for (let hobbie of person.hobbies) {
  console.log(hobbie.toLowerCase()); // Already knows person.hobbies is type string[]
}

console.log(person.name);
