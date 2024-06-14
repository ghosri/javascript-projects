// Declare and assign the variables below
let shuttle = "Determination"
let speed = 17500;
let distMars = 225000000
let distMoon = 384400
let milesToKilometers = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttle)
console.log(typeof speed)
console.log(typeof distMars)
console.log(typeof distMoon)
console.log(typeof milesToKilometers)

// Calculate a space mission below
let milesToMars = distMars * milesToKilometers
let hoursToMars = milesToMars / speed
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log(shuttle + " will take " + daysToMars + " days to reach Mars")
// Calculate a trip to the moon below
let milesToMoon = distMoon * milesToKilometers
let hoursToMoon = milesToMoon / speed
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(shuttle + " will take " + daysToMoon + " days to reach the Moon")
