// Code your crewMass function here:
let defaultMass = 75000

function crewMass(array){
  let mass = 0
  
  for(let i = 0; i < array.length; i++){
    mass += array[i].mass
  }
  let totalMass = mass + defaultMass
  return totalMass
}


// Code your fuelRequired function here:
function fuelRequired(array){
  let fuelRequired = 0
  fuelRequired = Math.round((crewMass(array)/9.5)*10)/10

  for(let i = 0; i < array.length; i++){
    if(array[i].species === "dog" || array[i].species === "cat"){
      fuelRequired += 200
    }
    else{
      fuelRequired +=100
    }
  }
  console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired} kg of fuel`)
  return fuelRequired
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 console.log(crewMass(crew))
 console.log(fuelRequired(crew) + " fuel needed")


 