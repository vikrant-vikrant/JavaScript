class Student {
  name;
  age;
  grade;
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  getInfo() {
    console.log(
      `I am ${this.name}, ${this.age} Years old and i study in ${this.grade} ,`
    );
  }
}

const stu1 = new Student("vikrant", 23, "12th");
console.log(stu1);
stu1.getInfo();

class parent extends Student {
  constructor(papa, name, age, grade) {
    super(name, age, grade);
    this.papa = papa;
  }
  show() {
    console.log(
      `I am ${this.papa}, my son name is ${this.name}, he is ${this.age} years old in ${this.grade}`
    );
  }
}

const papa = new parent("ram", "vishal", "21", "12th");
console.log(papa);
papa.show();