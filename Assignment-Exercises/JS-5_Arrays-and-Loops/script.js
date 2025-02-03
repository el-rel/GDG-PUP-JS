let favoriteMovies = [
  'Inception',
  'The Matrix',
  'Interstellar',
  'The Dark Knight',
  'Pulp Fiction',
]

for (let i = 0; i < favoriteMovies.length; i++){
  console.log(`Movie ${i + 1}: ${favoriteMovies[i]}`)
}

console.log("")

let index = 0;
while (index < favoriteMovies.length){
  console.log(`Movie ${index + 1}: ${favoriteMovies[index]}`)
  index++;
}