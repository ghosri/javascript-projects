let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.round(Math.random()*10)}
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.round(Math.random()*10)}
}

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.round(Math.random()*10)}
}

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.round(Math.random()*10)}
}

let crew = {superChimpOne, salamander, chimpTwo, beagle, tardigrade}

function crewReport(crewMember){
   return (`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} year(s) old and weight ${crewMember.mass} kilos. Their ID number is ${crewMember.astronautID}`)
   
}

function fitnessTest(arr){
   let counterArr = []
   for (let i = 0; i < arr.length; i++){
      let steps = 0
      let counter = 0
      while(steps < 20){
         steps += arr[i].move()
         counter++
      }
      counterArr[i] = (`${arr[i].name} took ${counter} turns to reach 20 steps.`)
   }
   return counterArr
}


console.log(crewReport(salamander))

console.log(fitnessTest(crew))

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

