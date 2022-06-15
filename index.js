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
Get the first number from the array
add all other numbers to that first number to see if the two number combination adds up to the targer.
if yes return true.
if not
get the next number in the array and do the same thing.
continew going through the array until a match is found. 
if none return false.
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