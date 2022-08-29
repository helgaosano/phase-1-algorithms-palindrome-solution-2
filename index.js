function isPalindrome(word) {
  // Write your algorithm here
  
for (let i = 0; i < word.length / 2; i++) {
  const x = word.length - 1-i;
  if (word[i] !== word[x]) {
    //if letters don't match, return false
      return false;
    }
  }
  //if letters match, return true
  return true;
}
isPalindrome("racecar");

/* 
  Add your pseudocode here

  iterate over a string from its first index to its middle index
  compare the characters 
  if the letters don't match return false 
  else return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
