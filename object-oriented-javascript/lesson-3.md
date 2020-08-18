# Object Oriented Javascript

## Lesson 3 Classes and Objects

### Introduction

Add an object with properties and methods

```
{
  age: 2,
  name: cyrus,
  processor: 'i7'
  Ram: 32,
  Disk: 500,
  config: function() {
    console.log(`Computer spec: ${this.name} ${this.processor}`);
  }
}

```
### Constructor Function
To instantiate a new object

```
new SoftwareDeveloper();
```

* New Keyword
* Note first letter is capitalised
* Persists data - using `this`
* No explicit return - the object created is returned
* If New omitted - function called (value will be undefined)
* instanceOf shows constructor function

Example:

```
function SoftwareDeveloper() {
  this.favoriteLanguage = 'JavaScript';
}
```

Create a new object

```
let developer = new SoftwareDeveloper();
```

Constructors can have parameters/arguments
```
function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}
```

Example - Test
```
function Sandwich(bread, meat, vegetables) {
  this.bread = bread;
  this.meat  = meat.slice();
  this.vegetables = vegetables.slice();
}
```


Further Reading

* [The new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) on MDN
* [The instanceof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) on MDN

### The `this` Keyword

* function --> `this` refers to the object
* object --> `this` refers to the function
* `this` is set when an object calls it (Runtime)
* `this` is a reserved word


Different scenarios

| Invoke | Call | Style | Code |
|--------|------|-------|------|
| Call   | `new`   | method | function |
| `this` | {}      | object itself | global object |
| Example | `new` Cat | bailey.sayName() | introduce() | 


* Call a constructor - `this` is the new object
* Use the `new` keyword and this is the object
* Invoke a function `this` is the `window` global object
* Or we can define what `this` means - see next section!
 
Further Research
[The this operator on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### Setting Our Own `this`

Two additional ways to invoke a function
* call() - directly invoked onto a function
* apply()

Example - Call
* Takes parameters as comma seperated list
* Need the number of arguments beforehand

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo; 
}

multiply.call(window, 3, 4);

Base function
```
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
```

Override function - use the base function and override specific properties (i.e. title)
```
const pride = {
  title: 'Pride and Prejudice'
};

const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'
```

Example - Apply

* Apply takes parameters as an array
* Dont need to know the number of arguments beforehand

```
multiply.apply(window, [3, 4]);
```

Base function
```
const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
```
Override
```
mockingbird.describe.apply(pride);
// 'Pride and Prejudice is a classic novel'
```


With a parameter

```
const andrew = {
  name: 'Andrew'
};

function introduce(language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

introduce.call(andrew, 'JavaScript'); // Call
introduce.apply(andrew, ['JavaScript']);  // Apply
```

Callbacks and `this`

* Save `this` with anonymous closure - ensures the value is saved
* Save `this` with bind()


Bind
* is a method that is called on a function
* returns a new function that when called, has `this` set to the provided object

Example:
```
driver.displayName.bind(car);
```

Further Research
* Kyle Simpson's [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
* [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) on MDN
* [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on MDN
* [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) on MDN

### Prototypal Inheritance: Subclasses

### Lesson Summary

## Course Outro
