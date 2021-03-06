// CODE here for your Lambda Classes


// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, 
// I am from Bedrock where name and location are the object's own props


class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }

}

const jimmy = new Person({
  name: 'Jackie',
  location: 'Bedrock',
  age: 44,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  specialty: 'C',
  grade: 'b',
  favInstructor: 'Jimmy',
  subject: 'css',
  favSubjects: 'everything',
});

console.log(jimmy.speak());

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase
// 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments
// and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.specialty = studentAttributes.specialty;
    this.favLanguage = studentAttributes.favLanguage;
    this.catchPhrase = studentAttributes.catchPhrase;
    this.subject = studentAttributes.subject;
  }

  demo() {
    return `Today we are learning about ${this.subject} and ${this.name}`;
  }

  grade() {
    return `receives a ${this.name} and a ${this.subject}  a perfect score on`
  }
}





// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out
// that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name
// has begun sprint challenge on {subject}


class Student extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.previousBackground = instructorAttributes.previousBackground;
    this.className = instructorAttributes.className;
    this.favSubjects = instructorAttributes.favSubjects;
  }

  listsSubjects() {
    return `all of the favorite subjects are ${this.favSubjects}`;
  }

  praAssignment() {
    return `Student ${this.name} has submitted a PR for ${this.subject}`
  }

  sprintChallenge(subject) {
    return `Student ${this.name} has begun sprint challenge on ${this.subject} `
  }
}


// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces 
//to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject
// and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp() {
    return `${this.name} announces to channel`;
  }

  debugsCode() {
    return `${this.name} debugs ${this.subject} code on ${this.subject} `
  }

}


const phoenix = new Person({
  name: 'Rodney',
  location: 'California',
  age: 40,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'backend',
  catchPhrase: `Don't forget the coffee`,
  className: 245,
  favInstructor: 'Francis',
  subject: 'HTML5',
  grade: 'B',
  favSubjects: 'C#',
});


const logan = new Person({
  name: 'Rodney',
  location: 'California',
  age: 40,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'backend',
  catchPhrase: `Don't forget the coffee`,
  className: 245,
  favInstructor: 'Francis',
  subject: 'HTML5',
  grade: 'B',
  favSubjects: 'C#',
});



const daniel = new Student({
  name: 'Danny',
  location: 'italy',
  age: 24,
  gender: 'male',
  favLanguage: 'C++',
  specialty: 'Full-Stack',
  catchPhrase: `Don't forget the coffee`,
  className: 111,
  favInstructor: 'Gabe',
  subject: 'SQL Injection',
  grade: 'A',
  favSubjects: 'C#',
});




const frank = new ProjectManagers({
  name: 'Bob',
  location: 'California',
  age: 20,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Full-Stack',
  catchPhrase: `Don't forget the coffee`,
  className: 007,
  favInstructor: 'Gabe',
  subject: 'SQL Injection',
  grade: 'A',
  favSubjects: 'C#',
});





const michael = new ProjectManagers({
  name: 'Michael',
  location: 'Kings Landing',
  age: 37,
  gender: 'alien',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the stove in the oven`,
  subject: 'web-programming',
  className: 919,
  favSubjects: 'shadowing',
  grade: 'only the best grade',
  favInstructor: 'Jake',
});


const fox = new Student({
  name: 'Rocky',
  location: 'Moon',
  age: 34,
  gender: 'alien',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the planet earth`,
  specialty: 'C++',
  grade: 'b',
  className: 007,
  favInstructor: 'Gabe',
  subject: 'Database maintance',
  favSubjects: 'Php',
});


const travis = new Student({
  name: 'Rocky',
  location: 'Moon',
  age: 34,
  gender: 'alien',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the planet earth`,
  specialty: 'C++',
  grade: 'b',
  className: 007,
  favInstructor: 'Gabe',
  subject: 'Database maintance',
  favSubjects: 'Php',
});






const mickey = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget to eat man`,
  className: 007,
  favInstructor: 'Gabe',
  subject: 'hacking',
  grade: 'A',
  favSubjects: 'Php',
});



const chuck = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget to eat man`,
  className: 007,
  favInstructor: 'Gabe',
  subject: 'hacking',
  grade: 'A',
  favSubjects: 'Php',
});



console.log(michael.standUp());
console.log(fox.sprintChallenge());
console.log(frank.debugsCode());
console.log(travis.sprintChallenge());
console.log(mickey.demo());
console.log(mickey.grade());
console.log(logan.speak());
console.log(phoenix.speak());