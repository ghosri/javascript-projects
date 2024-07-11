function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let random = Math.round(Math.random()*arr.length-1)
  return arr[random]
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray