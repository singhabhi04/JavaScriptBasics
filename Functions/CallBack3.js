// ── The main function ──────────────────────────────────────────
function orderCoffee(type, callback) {

  console.log(`Barista starts making: ${type}`);

  // Simulate time taken to make coffee (3 seconds)
  setTimeout(() => {

    const coffee = `Hot ${type} ☕`;   // coffee is ready!
    callback(coffee);                  // "Order ready!" → call YOU back

  }, 3000);

  // This line runs IMMEDIATELY — function doesn't wait
  console.log("Go sit down, we'll call you when ready...");
}


// ── You place your order ───────────────────────────────────────
orderCoffee("Latte", function(myCoffee) {

  // This is the callback.
  // It does NOT run now.
  // It runs ONLY when setTimeout fires (3 seconds later)
  console.log(`Got my order: ${myCoffee}`);
  console.log("Now I can drink it!");

});


// ── Your life doesn't stop ─────────────────────────────────────
console.log("Reading the menu...");
console.log("Checking my phone...");