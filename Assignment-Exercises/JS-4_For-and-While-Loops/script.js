// scripts.js

// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

for (let i = 1; i <= 5; i++){
  console.log(`Number: ${i}`)
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Reading", // Example hobby
  "Writing", // Example hobby
  "Cycling",
  "Hiking",
  "Cooking",
  "Drawing",
  "Gaming",
  "Gardening",
  "Photograph",
  "Traveling"
];

let index = 0;
while (index < hobbies.length) {
  // Log each hobby and see if it works in the console
  console.log(`Hobby ${index + 1}: ${hobbies[index]}`)
  index++;
}

for (let i = 0; i <= hobbies.length; i++){
  console.log(`Hobby ${i + 1}: ${hobbies[i]}`)
}