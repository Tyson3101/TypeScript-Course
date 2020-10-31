enum Role {
  ADMIN = 5, // ADMIN = Starting Number (Text or whatever), default 0
  READ_ONLY, // defualt plus 1 of last element of enum, or can redefine with number, string,etc
  AUTHOR, // same as read only
}

const person = {
  name: "Tyson",
  favNumber: 4,
  hobbies: ["Coding", "Gaming"], // Type string[]
  role: Role.ADMIN, // type (number | string)[]
};

let favoriteActivitites: any[]; // Just normal array (Basically ignores type checking, plain javascript)
favoriteActivitites = ["Hey", "Hi"];

if (person.role === 0) {
  console.log(" Is Admin!");
}
