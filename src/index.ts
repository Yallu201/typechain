class Human {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yallu = new Human("yallu", 29);
function sayHi(person: Human): string {
  return `Hello ${person.name}, you are ${person.age}`;
}

console.log(sayHi(yallu));
