const person: {
  name: string;
  favNumber: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Tyson",
  favNumber: 4,
  hobbies: ["Coding", "Gaming"], // Type string[]
  role: [2, "author"], // type (number | string)[]
};

person.role.push("admin"); // Only want 2 elements

let favoriteActivities: any[]; // Anything can go in array
favoriteActivities = ["Hey", 25];

console.log(person.name);
