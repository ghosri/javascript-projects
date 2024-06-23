/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
for(let i = 0; i <= 20; i++){
  console.log(i)
}
for(let i = 3; i <= 29; i+=2){
  console.log(i)
}
for(let i = 12; i >=-14; i-=2){
  console.log(i)
}
for(let i = 50; i >= 20; i--){
  if(i % 3 == 0){
    console.log(i)
  }
  else{}
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let var1 = "LaunchCode"
let var2 = [1, 5, 'LC101', 'blue', 42]

for(let i = 0; i < var2.length; i++){
  console.log(var2[i])
}
for(let i = 10; i >= 0; i--){
  console.log(var1[i])
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let even = []
let odd =[]
for(let i = 0; i < arr1.length; i++){
  if(arr1[i] % 2 == 0){
    even.push(arr1[i])
  }
  else{
    odd.push(arr1[i])
  }
}
console.log(even)
console.log(odd)