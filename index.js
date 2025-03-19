function receivesAFunction(callback) {
    callback(); 
}
const sayHello = () => console.log("Hello, Computer!");
console.log(receivesAFunction(sayHello()));


function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}
const myFunction = returnsANamedFunction();
myFunction();


function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();