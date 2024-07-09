// Code your orbitCircumference function here:
let circumference;
 let altitude = 2000
 let speed = 28000;
 function orbitCircumference(){
   circumference = 2*Math.PI*altitude
   return circumference
 }
 console.log(orbitCircumference())

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitCircumference, orbitSpeed){
  let time;
  let distance = numOrbits*orbitCircumference
  time = (Math.round(distance/orbitSpeed*100))/100
  
  console.log(`The mission will travel ${distance} km and it will take around ${time} hours`)
  return time
}
console.log(missionDuration(5, circumference, speed))

// Copy/paste your selectRandomEntry function here:

// Code your oxygenExpended function here:
function oxygenExpended(member){
  time = missionDuration(3, circumference, speed)
  walker = member[Math.round(Math.random()*2)]
  console.log(`${walker.name} will perform the space walk, which will last for ${time} hours and require ${(Math.round(walker.o2Used(time)*1000))/1000} kgs of oxygen`)
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
oxygenExpended(crew)

 

 

function selectRandomEntry(array){
  let randomID;
  
  for(let i = 0; i < 3; i++){
    randomID = Math.round(Math.random()*(array.length-1))
    chosenID[i] = array[randomID]
    array.splice(randomID, 1)
  }
    
  return chosenID
}

