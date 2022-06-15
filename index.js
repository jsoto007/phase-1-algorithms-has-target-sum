function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let start = 0; start < array.length - 1; start++) {
    for (let i = start + 1; i < array.length; i++) {
      if (array[i] + array[start] === target) {
        return true
      }
    }
  }
  return false;
}





/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  iterates over the array from front to end and end to front 


*/

/*
  Add written explanation of your solution here
    iterates over the array
  adds all numbers and conpares then to the target.
  returns the number the numbers that add up to the target.
  if No number add up to the target return none add up to the target.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;