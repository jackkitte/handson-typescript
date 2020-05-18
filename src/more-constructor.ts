export { };

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('たまさん', 29);
console.log(me);
