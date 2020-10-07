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
