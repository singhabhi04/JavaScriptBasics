// ⭐ 2. Convert JavaScript Object → JSON
// To convert a JS object into JSON (string format), use:

// ✅ JSON.stringify()

const user = {
  name: "Abhishek",
  age: 36,
  skills: ["JS", "Python"]
};

const jsonString = JSON.stringify(user);

console.log(jsonString);

console.log(typeof jsonString);
