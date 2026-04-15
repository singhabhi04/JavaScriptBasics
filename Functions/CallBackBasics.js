//A callback is just a function you give to another function, so it can call it later.

// 🧨 Why do we even need callbacks?
// Because JavaScript is asynchronous.

// Meaning:

// Some tasks take time (API calls, timers, file reading)

// JS doesn’t want to freeze the page

// So it says:
// “Give me a function to run when the slow task finishes.”

// That function = callback.

function doHomeWork(subject, callback){
    console.log(`I am doing ${subject} homework`)
    callback()
}

function finished() {
    console.log("I finished my homework!");
}

doHomeWork("Maths",finished)

// Why this is a callback?
// finished is not executed immediately

// It is given to doHomework

// doHomework decides when to run it

