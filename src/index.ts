interface Human {
  name: string;
  age: number;
  gender: string;
}
const Person = {
  name: "yallu",
  age: 29,
  gender: "male",
};
function sayHi(person: Human): string {
  return `Hello ${person.name}, you are ${person.age}`;
}

console.log(sayHi(Person));
