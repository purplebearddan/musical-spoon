# Errors in JS

## Try Catch Recap

Imagine you are playing a game and you make a mistake. Instead of the game just crashing and stopping, it tells you that you made a mistake and gives you a chance to fix it. This is what error handling in JavaScript is all about.

In JavaScript, errors can occur when you write code that the computer doesn't understand or when the computer encounters a problem that it doesn't know how to handle. Instead of crashing your whole program, you can use error handling to catch the error and take action to fix it or let the user know that something went wrong.

One way to handle errors in JavaScript is by using a try...catch block. Here's an example:

```js
try {
  // Some code that might throw an error
  let x = y + 1;
} catch (err) {
  // Handle the error
  console.log('There was an error: ' + err.message);
}
```

In this example, we have a try block that contains some code that might throw an error. Specifically, we're trying to add `1` to a variable `y`, but `y` is not defined, so this will `throw` an error.

The `catch` block is where we handle the error. In this case, we're just logging a message to the console that tells us there was an error and gives us the error message.

By using error handling in JavaScript, we can make our programs more robust and user-friendly by gracefully handling errors instead of just crashing.

## Promises

Imagine you asked your friend to do something for you, but they can't do it right away. They tell you they will do it later, and they promise to let you know when it's done. That's basically what promises are in JavaScript.

In JavaScript, a promise is an object that represents a value that might not be available yet, but will be sometime in the future. A promise can either be fulfilled, meaning the value is available and the promise is "resolved", or rejected, meaning there was an error and the promise is "rejected".

One common use of promises is for asynchronous operations, like fetching data from a server or waiting for a user to click a button. Promises allow us to write code that "waits" for a value to be available before moving on to the next step.

Here's an example of using a promise in JavaScript:

```js
// Create a new promise
const myPromise = new Promise((resolve, reject) => {
  // Do some asynchronous operation
  setTimeout(() => {
    // If everything went well, resolve the promise
    resolve('Success!');
    
    // If there was an error, reject the promise
    // reject('Oops, something went wrong!');
  }, 2000);
});

// Use the promise
myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
```

In this example, we create a new promise called `myPromise`. Inside the promise, we do some asynchronous operation using `setTimeout` to simulate a delay of 2 seconds. If everything goes well, we call `resolve()` and pass in the value "Success!". If there's an error, we call `reject()` and pass in an error message.

Outside the promise, we use the `.then()` method to "listen" for the promise to be resolved. When the promise is resolved, we log the result to the console. We also use the `.catch()` method to handle any errors that might occur during the promise.

Promises can be a bit tricky to understand at first, but they're an important part of writing asynchronous JavaScript code that's easy to read and maintain.


## Async JS

JavaScript is a single-threaded language, which means it can only execute one thing at a time. However, many tasks in JavaScript are `asynchronous`, meaning they take some time to complete and the program needs to wait for them to finish before moving on to the next task. Examples of `asynchronous` tasks include making network requests, reading or writing to files, and waiting for user input.

Asynchronous JavaScript (or async JavaScript) is a way of writing code that can handle these `asynchronous` tasks without blocking the main thread of execution. This means that other parts of the program can continue to run while the `asynchronous` task is being performed.

There are several ways to handle `asynchronous` tasks in JavaScript, including callbacks, promises, and async/await syntax.

Callbacks are functions that are passed as arguments to other functions and are called when an `asynchronous` task is complete. For example, if you want to make an HTTP request using the `XMLHttpRequest` object, you can pass a callback function to a `load` event handler, which will be called when the `response` is received.

Promises provide a way to handle `asynchronous` tasks in a more structured way than callbacks. A promise is an object that represents a value that might not be available yet but will be sometime in the future. Promises can be chained together to form a sequence of `asynchronous` tasks, and they can be used with the `.then()` and .catch() methods to handle success and error cases, respectively.

`async`/`await` is a newer syntax that was introduced in `ES2017`. It allows you to write *`asynchronous` code that looks more like synchronous code*, which can be easier to read and understand. The `async` keyword is used to define a function that contains `asynchronous` tasks, and the `await` keyword is used to wait for the result of an asynchronous task before moving on to the next line of code.

Here's an example of using async/await to make an HTTP request:

```js
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

In this example, the `getData()` function is defined as `async`, which means it can contain `asynchronous` tasks. The *`fetch()` function is used to make an `HTTP request` to a `URL`*, and *the `await` keyword is used to wait for the response to be received*. Once the response is received, the `json()` method is called on it to extract the `JSON data`, and the `await` keyword is used again to wait for that to complete. Finally, the data is logged to the console.

Overall, `asynchronous` JavaScript is an important concept to understand if you want to write efficient and responsive web applications. By using `callbacks`, `promises`, or `async`/`await` syntax, you can handle asynchronous tasks in a way that doesn't block the main thread of execution and allows your program to continue running smoothly.

## Challenge

Create a webpage that allows the user to enter a GitHub Username, When the user submits the form, use the GitHub API to retrieve information about the user's repositories.

Display a list of the username's repos, including the name, descriptions and number of stars.

When the user clicks on a repo it should take them to the repo on GitHub.

This challenge would allow you all to practice using the GitHub API to retrieve data, as well as using async/await syntax to handle asynchronous requests. Additionally, this challenge could be expanded to include more features, such as allowing the user to sort the repositories by different criteria or displaying a visual representation of the data using a chart or graph.

## Resources

### W3 Schools

- [Try...Catch](https://www.w3schools.com/js/js_errors.asp)
- [Promises](https://www.w3schools.com/js/js_promise.asp)
- [Async and Await](https://www.w3schools.com/js/js_async.asp)

### MDN Docs

- [Try...Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
