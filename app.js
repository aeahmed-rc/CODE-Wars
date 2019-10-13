
// Problem 1
// Write function makeUpperCase.
function makeUpperCase(str) {

return str.toUpperCase();
  // Code here
}

// Problem 2
// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
return x.split(' ').join('')
}


// Problem 3
// Messi goals function
// Messi is a soccer player with goals in three leagues:
//
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
//
// Note: the input will always be valid.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
let sum=laLigaGoals+copaDelReyGoals+championsLeagueGoals
return sum
  // code goes here
}



// Problem 4

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
let sum=roll*2 + position
return sum
  // return the new position
}

// Problem 5
// You are given two angles (in degrees) of a triangle.
//
// Write a function to return the 3rd.

function otherAngle(a, b) {
  return c=180-(a+b) ;
}
