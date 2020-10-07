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

What is the difference between Asynchronous and Parallel programming?

* Asynchronous is for single-threaded programs and is concerned with using non-blocking code to make the most efficient use of a single thread as possible.
* Parallel is a means of managing multi-threaded programs in which tasks are split between completely separate threads and execute simultaneously.

In your own words, explain the difference between blocking and non-blocking code. You might use an example from life or a tech example like an API request.
* blocking task stopping all progress in a set of steps
* process moving past non-blocking task that had moved work somewhere else
* a blocking task stopping all progress in a set of steps
* a process moving past non-blocking task that had moved work somewhere else


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
