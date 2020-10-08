# Udacity Nanodegree: Intermediate JavaScript
## Title: Intermediate JavaScript
## Course: nd032

The goal of the [Intermediate JavaScript Nanodegree program](https://www.udacity.com/course/intermediate-javascript-nanodegree--nd032) is to prepare students for roles in web development, server-side application development, and desktop development that require a more advanced set of JavaScript skills. This program will also prepare students with the skills required to use JavaScript frameworks like React, Angular, and Vue.
[Udacity Blog Post](https://blog.udacity.com/2020/07/introducing-the-intermediate-javascript-nanodegree-program-from-udacity.html)

## Object Oriented Javascript

| Lesson | Name |
|--------|------|
| 1      | [Objects in Depth](https://github.com/rosera/javascript-intermediate/blob/master/object-oriented-javascript/lesson-1.md) |
| 2      | [Functions at Runtime](https://github.com/rosera/javascript-intermediate/blob/master/object-oriented-javascript/lesson-2.md) |
| 3      | [Classes and Objects](https://github.com/rosera/javascript-intermediate/blob/master/object-oriented-javascript/lesson-3.md)   |
| 4      | [Object-Oriented Design Patterns](https://github.com/rosera/javascript-intermediate/blob/master/object-oriented-javascript/lesson-4.md) |
| 5      | [Project: Dinosaurs](https://github.com/rosera/javascript-intermediate/blob/master/object-oriented-javascript/project-dinosaur.md) |


Project: Create a user generated infographic

## Functional Programming

Project: Create a Mars Rover dashboard

## Asynchronous Programming in Javascript

Resources:
* [Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [Async Javascript: Callbacks, Promises and Async/Await](https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/)
* [Eloguent JavaScript Ch 13-15](https://eloquentjavascript.net/)
* [MDN Intro to Async Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)


| Lesson | Name |
|--------|------|
| 1      | [Introduction to Async Programming]() | 
| 2      | [Exercise: Asynchronous Programming]() |
| 3      | [Solution: Async Programming]() |
| 4      | [Why Async Programming]() |
| 5      | [Tools, Environment and Dependencies]() |
| 6      | [Project: UdaciRacer Simulator]() |

Project: Build a UDACIRACER Simulator game


Example Mock API chaining

```
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000)
}

const fetchSession = mockAPI({ id: "123765" })
const fetchUser = mockAPI({ firstname: "Bob" })
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ])

const runCallbacks = () => {
    fetchSession("session-id", (session) => {
        fetchUser(session, (user) => {
            fetchUserFavorites(user, (favorites) => {
                console.log(favorites)
            })
        })
    })
}

const runCallbacksFlat = () => {
    const handleFavorites = (favorites) => {
        console.log(favorites)
    }

    const handleUser = (user) => {
        fetchUserFavorites(user, handleFavorites)
    }

    const handleSession = (session) => {
        fetchUser(session, handleUser)
    }

    fetchSession("session-id", handleSession)
}
```


Example Mock API chaining Error Handling

```
const mockAPI = (returnValue) => (arg, success, failure) => {
    setTimeout(() => success(returnValue), 2000)
}

const fetchSession = mockAPI({ id: "123765" })
const fetchUser = mockAPI({ firstname: "Bob" })
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ])

const handleError = error => {
    // you can put more custom logic here
    console.log(error)
}

const runCallbacks = () => {
    fetchSession("session-id", session => {
        fetchUser(session, (user) => {
            fetchUserFavorites(user, (favorites) => {
                console.log(favorites)
            }, handleError)
        }, handleError)
    }, handleError)
}

runCallbacks();
```

[Understanding JavaScript Callbacks and best practices](https://adrianmejia.com/callbacks-concurrency-in-javascript-node/)

What is the purpose of a callback in an asynchronous function

* A callback function is the action to be taken once the asynchronous action completes
* It is the way for information retrieved or resulting from the asynchronous action to become available for use in the rest of the program.
* A callback being the event scheduled to happened next, after the asynchronous action is completed.


#### Glossary

| Term | Definition |
|------|------------|
| Blocking | A process that blocks the thread even when idle or waiting for a response.|
| Non-Blocking | A process that, while operating (which might be waiting for a response from an external service), allows the thread to move on and continue executing the program. This pattern is essential for efficient use of a thread. |
| Asynchronous | For managing a single thread. Synonymous with non-blocking in most cases, but can refer to an entire program whereas a program is not typically referred to as non-blocking. | 
| Parallel | For multi-threaded programs ( which will not be JavaScript ). Refers to using two or more threads and running separate processes on them simultaneously. | 
| Concurrent | For multi-threaded programs. Refers to a program that switches between multiple operations. Appears to do many things at once while only operating on one thread at a time. |
| Thread | Where computers do work. Can also be thought of as a single process. Can do one thing at a time, works linearly through a block of code. |
| Single Threaded | Meaning a program can only run on one thread. JavaScript will almost always be single threaded. |
| Multi Threaded | Some languages have the ability to spin up new threads and manage work across multiple threads. Work that takes place across multiple threads is called multi-threaded |
| Callback Hell | Long chains of callbacks that end up in an increasingly indented spiral.| 
| Exception Handling |Exception handling means writing code that expects errors to occur and handles them gracefully. Programs with good exception handling can handle errors without crashing or becoming unusable, and instead give their users and developers helpful insight into what went wrong. |


#### JavaScript Promise States

![JavaScript Promise States](https://github.com/rosera/javascript-intermediate/blob/master/images/javascript-promise-states.png?raw=true)

#### Promise Chaining

* then() clause will alway run in linear order
* multiple then() clauses can be used
* data returned used as the argument to next then()
* An error will stop the chain and execute the catch()

```
// ---------------- PROMISE CHAINING WITH DATA & ERRORS 
new Promise((resolve, reject) => {
    alert('A')
    resolve(['B', 'C', 'D']);
    // reject();
})
.then((data) => {
    // throw new Error('Error at B');
    alert(data.shift());
    return data;
})
.then((data) => {
    throw new Error('Error at C');
    alert(data.shift());
    return data
})
.then((data) => {
    // throw new Error('Error at D');
    alert(data.shift());
    return data
})
.catch((error) => {
    console.log(error)
    alert(error);
})
```

#### Revisit the Mock API example using Promises

Callback version
```
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runCallbacks = () => {
    fetchSession("session-id", (session) => {
        fetchUser(session, (user) => {
            fetchUserFavorites(user, (favorites) => {
                console.log(favorites);
            });
        });
    });
};
```

Promise version
```
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runPromises = () => {
    return fetchSession("session-id")
        .then(session => fetchUser(session))
        .then(user => fetchUserFavorites(user))
        .then(favorites => console.log(favorites))
        .catch(error => console.log("oops!"));
};
```

#### Fetch with Promises

GET Request
```
// Note that we have to use a Node package called node-fetch to use fetch on the backend
const fetch = require('node-fetch');

// GET
fetch('http://localhost:8080')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));
```

POST Request
```
// Note that we have to use a Node package called node-fetch to use fetch on the backend
const fetch = require('node-fetch');

// POST
fetch('https://url-with-desired-data', {
    method: 'POST', // Other options: PUT, PATCH, DELETE
    mode: 'cors', // Other options are: 'no-cors', 'same-origin', and the default: 'cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: {"data": "This is json"} // body data type must match "Content-Type" header
  })
.then(response => response.json())
.catch(error => console.log(error))
```

Fetch Examples for Request Verbs
```
// Create a GET request to http://localhost:3000

fetch('http://localhost:3000')
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a POST request to http://localhost:3000
const postData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'POST', 
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a PUT request to http://localhost:3000
const putData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'PUT',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a DELETE request to http://localhost:3000

const deleteData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'DELETE',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))
```


#### Promise.allSettled

* Promise.allSettled not supported in all browsers
* Requires Node.js > 12.9.0

```
const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Stranger in a Strange Land");
});

Promise.allSettled([book1, book2, book3, book4])
.then(results => {
    console.log(results)
    results.forEach(result => console.log(result.value))
})
.catch(error => console.log(error));
```

#### Promise.all

This method is almost exactly the same time as Promise.allSettled except for what it returns and how it handles rejected Promises. It takes in an array of Promises and waits for them to resolve, but the first time it encounters a rejected Promise, it stops waiting for any further Promises and runs its catch clause. If no Promises reject, it returns an array of the values returned by them. Again like Promise.allSettled, Promise.all returns a Promise, so the resulting array is available in the following then.

```
const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Stranger in a Strange Land");
});

Promise.all([book1, book2, book3, book4])
.then(results => {
    console.log(results);
    results.forEach(result => console.log(result.value));
})
.catch(error => console.log(error));
```

#### Promise.Race

Promise.race also takes an argument of an array of Promises, but instead of waiting for them all to resolve, it only waits for the fastest one. Whatever Promise fulfills first, whether is resolves or rejects. It will pass the value from the resolution or the error from the rejection to its then statement.

```
const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Sorry, not available!");
});

Promise.race([book1, book2, book3, book4])
.then(result => {
    console.log(result);
})
.catch(error => console.log("Error!", error));
```

#### Try/Catch

```
try {
   // undeclared variable being used in an operation causes an error
   foo/2
} catch (err) {
   console.error(err.message);
} finally {
   console.log('I run last');
}
```

Try statement: Use the it with MAP

```
const printStatusMessage = (status) => {
    try {
        const animalsList = animalsByConservationStatus(status);
        let names = animalsList.map(animal => animal.common_name);
        message = `Animals listed as ${status} are: ${names.join(', ')}`;
        console.log(message);
    } catch(error) {
        console.error(error);
        console.log(`There are no animals with status: ${status}`);
    };
};

printStatusMessage("critical");
printStatusMessage("extinct");
```

Catch Statement: Check if items exist in a list
```
endangeredAnimals = ["saola", "green turtle", "amur leopard", "deer"];

const printAnimalMessage = (animal) => {
    try {
        const info = fetchAnimalByName(animal);
        const message = `The ${info.common_name} is ${info.conservation_status} on the endangered list`;
        console.log(message);
    } catch(error) {
        console.error(`There was a problem fetching: ${animal}`);
    };
};

endangeredAnimals.forEach(animal => printAnimalMessage(animal));
```

Finally Statement: Display a message for all animals whether found or not

```
animal1 = "vaquita";
animal2 = "mouse";

const printAnimalFacts = (animal) => {
    try {
        const info = fetchAnimalByName(animal);
        const message = `The ${info.common_name} (${info.species}) is an endangered animal with ${info.population !== null ? info.population : "an unkown number of"} individuals in the wild in their home region of ${info.region}`;
        console.log(message);
    } catch(error) {
        console.error(error)
    } finally {
        console.log(`The ${animal} was searched.`)
    }
};

printAnimalFacts(animal1);
printAnimalFacts(animal2);
```

#### Async/Await

You should use Async/Await when:
* The results from multiple Promises will be used together.
* You need perform a lot of logic after one or multiple Promises resolve
* Logic in a synchronous-style function would be cleaner than in a .then chain (this is mostly personal preference)

You shouldn't use Async/Await if:
* You don't need to use the await word in the function
* You just want the function to return a promise (instead use Promise.new from the promises lesson)

Think carefully about using Async/Await because:
* It will change the output of the function. If other parts of the program rely on the output of that function, changing it to async will have unexpected consequences

Example using Promises
```
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runPromises = () => {
    return fetchSession("session-id")
        .then(session => fetchUser(session))
        .then(user => fetchUserFavorites(user))
        .then(favorites => console.log(favorites))
        .catch(error => console.log("oops!"));
};
```

Example using Async/Await
```
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runAsync = async () => {
    try {
        const session = await fetchSession("session-id");
        const user = await fetchUser(session);
        const favorites = await fetchUserFavorites(user);
        console.log(favorites);
    } catch (error) {
        console.log("oops!");
    }
}
```

Async

// arrow function example
```
const myAsyncFunction = async ( ) => {
  // ...
};
```

// named function example
```
async function myAsyncFunction() {
  // ...
};
```

Await
```
const myAsyncFunction = async ( ) => {
    const myVal = await promise1();
};
```

#### Interview Questions

What is the difference between Asynchronous and Parallel programming?

* Asynchronous is for single-threaded programs and is concerned with using non-blocking code to make the most efficient use of a single thread as possible.
* Parallel is a means of managing multi-threaded programs in which tasks are split between completely separate threads and execute simultaneously.

In your own words, explain the difference between blocking and non-blocking code. You might use an example from life or a tech example like an API request.
* blocking task stopping all progress in a set of steps
* process moving past non-blocking task that had moved work somewhere else
* a blocking task stopping all progress in a set of steps
* a process moving past non-blocking task that had moved work somewhere else

What are the advantages of using Promises over Callbacks?
* Promises allow for cleaner syntax in long asynchronous flows Promises avoid callback hell Promises more explicit error handling Promise states make it easier to control the entire timeline of an asynchronous flow


Explain the purpose of the finally clause in Promises.
* Finally runs after either the final .then or .catch
* Finally is for logic that you want to run in either the resolve or reject case
* It is optional and should only be added if you have a reason to use it

Name one Promise method for handling multiple Promises and give one use case for when you might need it.

* Promise.All You need information from multiple sources and you expect them all to resolve. You can use this in any case where it would be considered an error for any of the Promises to reject.
* Promise.AllSettled You need to make many requests and get an overview of which requests failed or succeeded, for instance if you need to poll multiple resources to which are available.
* Promise.Race You only care about the fastest of a set of Promises. If you are building a timeout or a request that is time sensitive and not important after a certain amount of time, this would be the method to use.


Explain when you would use Async/await in JavaScript.
* doing an action that requires using the results of many Promises.
* doing an action with many Promises and it does not fit to use the Promise methods like Promise.all or Promise.race.
* you are working the result value of a Promise, and not a pending Promise object.
