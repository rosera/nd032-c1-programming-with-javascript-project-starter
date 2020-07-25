# Object Oriented Javascript

## Lesson 2 Functions at Runtime

### Introduction

```
function greet() {
    console.log('Functions are cool!');
}
```

Functions act as an object - that are invoked with ()


#### First-Class Functions

Functions can:
* Be stored in variables
* Be returned from a function
* Be passed as an argument into another function


##### Functions can return Functions ?!?
Function returns a single value
Function that return another Function are a `higher-order function`

```
function myFunction() {
    alert('Message 1!');

    return function () {
      alert('Message 2!');
    };
}
```

Functions can be assigned to a variable

```
const myFunction = doSomething();
```

Example: Higher Order Function 

```
const higherOrderFunction = function (){
    return function (){return 8};
}
```

### Callbacks

Note: 

* Function that takes other functions as argument - higher-order function
* Function that is passed as an argument into another function - callback

```
function callbackExample(num, callbackFunction){
  return num + callbackFunction();
}

function returnsThree() {
  return 3;
}

// Call the callback function
callbackExample(2, returnsThree);
```


Arrays Example:
```
const sweetsExample = [ 'bonbon', 'gum drops', 'mint imperials' ];

sweetsExample.forEach(function(sweet) {
    console.log('I like ' + sweet); 
});
```

Map Example:
Note: Maps return a new Array!
```
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(music) {
    return music.name + " by " + music.artist + " sold " + music.sales + " copies" 
});

console.log(albumSalesStrings);
```

Filter Example:
Note:
* Called on an Array
* Takes a function as an argument
* Returns a new Array

```
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(function(music){
  if (music.name.length >= 10 && music.name.length <= 25){
      return music.name;
  }
});

console.log(results);
```


### Scope

Note: The code inside a function has access to

* The functions arguments
* Local variables declared within the function
* Variables from its parent function scope
* Global variables

JavaScript is function scoped - functions have access to all its own
variables as well as global variables.

Naming conflicts are resolve based on scope chain - i.e. from inner to
outer/local to global.

#### Further Research

[Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
[Douglas Crockford's discussion of block scoped variables](https://www.youtube.com/watch?v=Ji6NHEnNHcA&t=26m9s)
[Blocking Scope Rules - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#Description)
[Functions and Function scope - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)


### Closures

Note: The process of a function retaining access to its scope is called
`closure`. A combination of the function and 
[lexical environment](http://es5.github.io/#x10.2)

* The function itself
* The code (scope chain) where the function was declared

Closures:
* Ensure a function maintains a reference to its parents scope
* If a reference to a parent function is still accessible, the scope persists

```
function expandArray(){
    let myArray = [1, 1, 1];
    
    return function() {
        myArray[myArray.length] = 1;
        return myArray;
    }
}
```

Garbage Collection
JavaScript manages memory with automatic `garbage collection`.

* If there are no references
* resources freed


#### Further Reading

[Memory Management on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
[Closures on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
[Lexical Environments in the ES5 spec](http://es5.github.io/#x10.2)


### Immediately-Invoked Function

Immediately-invoked function expressions (IIFE)

* Can be used to create private state
* Support Named/Anonymous functions


Function declaration
```
function fooHello() {
  return 'Hello';
}
```

Anonymous Function declaration
```
const myFunc = function () {
  return 'Hello';
}
```

Named Function declaration
```
const myFunc = function fooHello() {
  return 'Hello';
}
```

IIFE 

* Called immediately after it is defined

Called without arguments
```
(function fooHello() {
    return 'Hello';
  }
)();
```

Called with arguments
```
(function fooHello(name) {
    return ('Hello' + name);
  }
)();
```

Alternative declaration [Douglas Crockford](https://www.youtube.com/watch?feature=player_detailpage&v=taaEzHI9xyY#t=2020s)

```
(function fooHello(name) {
    return ('Hello' + name);
  }
());
```

### Lesson Summary  


Further Research

[Addy Osmani's Leanrng JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

