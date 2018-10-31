/* 
To determine "this", look on how and where the function was invoked

4 rules:
 - Implicit Binding
 - Explicit Bidning
 - new Binding
 - window Binding
*/

/* ========================================================================== */
/* Rule #1. Implicit Binding. */
// Left of the Dot at call time
let me = {
  name: 'Dan',
  age: 25,
  sayName() {
    console.log(this.name);
  }
};
me.sayName(); // Dan

/* ========================================================================== */
/* Rule #2. Explicit Bidning */
// call, apply, bind
let sayName = function(lng1, lng2, lng3) {
  console.log(
    `My name is ${this.name} and I know ${lng1}, ${lng2} and ${lng3}`
  );
};
let max = {
  name: 'Max',
  age: 35
};

// The call() method calls a function with a given this value and arguments provided individually.
sayName.call(max, 'javascript', 'typescript', 'elm');
// The apply() method calls a function with a given this value, and arguments provided as an array
sayName.apply(max, ['haskell', 'lisp', 'ocaml']);
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, and arguments provided individually.
const callFn = sayName.bind(max, 'swift', 'objective-c', 'c++');
callFn();

/* ========================================================================== */
/* Rule #3. new Bidning */
let Person = function(age, name) {
  // js creates new object and sets this to it: this = {}
  this.age = age;
  this.name = name;
};
let alex = new Person(22, 'Alex');

/* ========================================================================== */
/* Rule #4. window Binding */
// If rules #1 - #3 are not applied, then rule #4
let sayAge = function() {
  console.log(this.age);
};
sayAge(); // this.age = undefined
window.age = 55;
sayAge(); // this.age = 55
