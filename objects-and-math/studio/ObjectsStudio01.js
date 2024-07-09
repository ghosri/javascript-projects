// Code your selectRandomEntry function here:
// function selectRandomEntry(array){
//   let randomID = array[Math.floor(Math.random()*(array.length))]
//   return randomID;
// }




// Code your buildCrewArray function here:
// function buildCrewArray(arr1, arr2){


// for(let i = 0; i < chosenCandidates.length; i++){
//   let j = 0
//   while(animals[j].astronautID != chosenCandidates[i]){
//     j++
//   }
//   crew[i] = animals[j]
// }
// return crew
// }

// let crew = []
let chosenID = []
let chosenCandidates = []
let idNumbers = [291, 414, 503, 599, 796, 890];

// while(chosenCandidates.length < 3){
//   let alreadyChosen = selectRandomEntry(idNumbers)

//   if(!chosenCandidates.includes(alreadyChosen)) {
//   chosenCandidates.push(alreadyChosen)
//   }
  
// }
// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];


// Code your template literal and console.log statements:
console.log(selectRandomEntry(idNumbers))
console.log(buildCrewArray(chosenID, chosenCandidates))
console.log(`${chosenCandidates[0].name}, ${chosenCandidates[1].name}, and ${chosenCandidates[2].name} are going to space!`)

function selectRandomEntry(array){
  let randomID;
  
  for(let i = 0; i < 3; i++){
    randomID = Math.round(Math.random()*(array.length-1))
    chosenID[i] = array[randomID]
    array.splice(randomID, 1)
  }
    
  return chosenID
}

function buildCrewArray(array1, array2){
  for(let i = 0; i < chosenID.length; i++){
    let j = 0
    while(animals[j].astronautID != array1[i]){
      j++
    }
    chosenCandidates[i] = animals[j]
    }
    return chosenCandidates
}