# Object Oriented Javascript

## Lesson 1 Objects - create, access and modify

### Objects in Depth 

1. Create an Array
* uses `[]`
* Ordered
* Indexed

Example code

```
let a = 1;
let b = 'Hello';
let c = true;
let d = [1,2,3]

const mixedArray = [a, b, c, d];

console.log (mixedArray);
```

Access elements using an index
mixedArray[0];

2. Create an Object
* uses `{}`
* Unordered
* Key/Value pair

Example code
```
const menu = {
    name: 'Salted Caramel Ice Cream',
    price: 2.95,
    ingredients: ['butter', 'ice cream', 'salt', 'sugar']
};

console.log(menu);
```

Access elements using dot notation and square bracket notation
menu.name;
menu['name'];

### Create and Modify Properties

#### Creating Objects

// Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject = new Object();

#### Modifying Properties

const myObject = {
  name: 'Rich',
  age: 5
}

// Update the age property
myObject.age += 1;


#### Add Properties

const myObject = {};

myObject.flag = true;
myObject.name = 'Rich';

#### Remove Properties

myObject.item = 'hello'
delete myObject.item;

* Returns true on success

#### Methods

A methods is a property of an object with a value of a function.

Example:
```
object.method()
```

#### Anonymous Functions

Anon Function
```
function() {
}
```

Named Function
```
function namedFunction() {
}
```


#### This Keyword
* `this` methods can access and manipulate an objects properties
* `this` is a reserved word in JavaScript


#### Object Functions
```
let chameleon ={
    color: 'green',
    changeColor: function () {
        if (this.color === 'green') {
          this.color = 'pink';
        }
        else
          this.color = green;
    }
}
```

When using 
```
const myObject = new Object();
```

Two new methods are available 
* `Object.keys()`
* `Object.values()`

const myObject = {
  apple: 'green',
  banana: 'yellow',
  cherry: 'red'
}

Return an array - strings, order same as a for loop
Object.keys(myObject);   // ['apple', 'banana', 'cherry']

Return an array - order same as a for loop
Object.values(myObject); // ['green', 'yellow', 'red']

#### Global Variables

Global variables automatically become a property on Window objects  

Global Var
var myGlobal = 'Hello';

window.myGlobal === myGlobal; // true

Note: Only defining variables with the var keyword will add them to 
the `window` object. Neither `let` or `const` behave in this way.


#### Further Research

[JavaScript: The Good Parts](http://javascript.crockford.com/)
[JavaScript: The Good Parts](https://www.goodreads.com/book/show/2998152-javascript)



