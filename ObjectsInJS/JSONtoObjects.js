

// ⭐ 1. Convert JSON → JavaScript Object
// JSON is always a string.
// To convert it into a real JS object, you use:

// ✅ JSON.parse()

const jsonData = `
{
  "name": "Abhishek",
  "skills": ["JS", "Python"]
}
`;

const obj = JSON.parse(jsonData);

console.log(obj.name);   // Abhishek
console.log(obj.skills); // 