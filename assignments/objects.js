// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const mitzi = {
  "id": 1,
  "email": "mmelloy0@psu.edu",
  "firstName":"Mitzi",
  "gender": "F",
}
const kennan = {
  "id":2,
  "email": "kdiben1@tinypic.com",
  "firstName":"Kennan",
  "gender": "M",

  speak: function() {
    return `Hello, my name is ${kennan.firstName}!`;
  }
}
const keven = {
  "id":3,
  "email": "kmummery2@wikimedia.org",
  "firstName": "Keven",
  "gender": "M",
}
const gannie = {
  "id":4,
  "email":"gmartinson3@illinois.edu",
  "firstName":"Gannie",
  "gender":"M",
}
const antonietta = {
  "id":5,
  "email": "adaine5@samsung.com",
  "firstName":"Antonietta",
  "gender": "F",

  multiplyNums: function(num1, num2) {
    return num1 * num2;
  }
}
// Collapse





// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.firstName);
// Kennan's ID
console.log(kennan.id);

// Keven's email
console.log(keven.email);

// Gannie's name
console.log(gannie.firstName);

// Antonietta's Gender
console.log(antonietta.gender);


// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70,
  speak: function() {
    return `Hello ${this.name}`
  },
 
  nestedObj: {
    name: 'George', 
    age: 50,
    speak: function() {
      return `Hello ${this.name}`;
    },
    grandChildObj: {
      name: 'Sam', 
      age: 30,
      speak: function() {
        return `Hello ${this.name}`;
      }
    }
  }
  
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.nestedObj.age);
// Log the name and age of the grandchild
console.log(parent.nestedObj.grandChildObj.name, parent.nestedObj.grandChildObj.age);
// Have the parent speak
console.log(parent.speak());
// Have the child speak
console.log(parent.nestedObj.speak());
// Have the grandchild speak
console.log(parent.nestedObj.grandChildObj.speak());


//EOF