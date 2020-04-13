// The person constructor, our base pseudo-class, what the other classes inherit from
class Person {
    // This is the Person constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        alert(`Greetings, I am ${this.name}.`);
    }

    sleep() {
        alert(`I am going to sleep now. My name is ${this.name}.`);
    }
}

class Teacher extends Person {
    constructor(name, age, dept) {
        // step 1 is to call the parent constructor
        // available in new keyword: super - looks at whatevery is to the right of extends
        super(name, age);

        // then set your own properties unique to this child class
        this.dept = dept;
    }

    // this will overwrite the greet function you inherited from Person
    greet() {
        alert(`Hello, I am ${this.name}. I work in the ${this.dept}.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greet() {
        alert(`Hello, I'm ${this.name} and I'm majoring in ${this.major}.`);
    }
}

let p1 = new Person('John Jacobs', 29);
let t1 = new Teacher('Jasmine Jones', 26, 'Math');
let s1 = new Student('Jerico Jameson', 20, 'Computer Science');

console.log(p1);
console.log(t1);
console.log(s1);

p1.greet();
t1.greet();
s1.greet();

p1.sleep();
t1.sleep();
s1.sleep();
