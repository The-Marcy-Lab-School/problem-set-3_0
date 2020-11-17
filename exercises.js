// Question 1
const isRealPalindrome = (str) => {
  //remove all punctuation from str and make it lowercase
  //create a new string that is the reverse of str
  //if those two strings are the same, you have a palindrome
  let strippedString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let reverseString = strippedString.split("").reverse().join("");
  return strippedString === reverseString;
};

// Question 2
const runningTotal = (arr) => {
  //initialize an empty newArray
  //initialize a sum variable to 0
  //iterate through the inputArray
    //add the array element to our sum 
    //push the sum into the newArray
  //return the newArray
  const newArray = []
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArray.push(sum);
  }
  return newArray;
};

// Question 3
const swap = (sentence) => {
  //create an array from the input sentence using .split()
  //iterate through the array
    //each element in the array is a word (string)
    //strings are immutable, so turn that word into an array so you can mutate it
    //save the first and last letter into variables
    //swap the first and last letter
  //join() the array into a single string and return it
  const array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    const letterArray = word.split("");
    const firstLetter = letterArray[0];
    const lastLetter = letterArray[letterArray.length - 1];
    letterArray[0] = lastLetter;
    letterArray[letterArray.length - 1] = firstLetter;
    array[i] = letterArray.join("");
  }
  return array.join(" ");
};

// Question 4
const wordSizes = (sentence) => {
  //create an empty object
  //split the setence to make an array of each word
  //iterate through the words 
    //get the length of the word and use that as the object key
    //if the key doesn't exist in the object, add it with a value of 1
    //if it does exist in the object, increment its value by 1
  //return the object
  const obj = {};
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let length = words[i].length;
    if( length in obj) {
      obj[length] += 1;
    } else {
      obj[length] = 1;
    }
  }
  return obj;
};

// Question 5
const union = (arr1, arr2) => {
  //combine the two input arrays and save it as a variable bothArray
  //create an empty newArray as the eventual return value
  //iterate through bothArray
    //if the element is not already in newArray
      //push the element into the newArray
  //return newArray which contains all numbers but no duplicates
  const bothArray = [...arr1, ...arr2];
  const newArray = [];
  for (let i = 0; i < bothArray.length; i++) {
    if(!newArray.includes(bothArray[i])) {
      newArray.push(bothArray[i]);
    }
  }
  return newArray;
};

// Question 6
const firstRecurring = (word) => {
  //for through the string starting at the first letter until the end of the string
    //for through the string again starting at the second letter until the end of the string
      //if the letter from your outer loop is equal to the letter from your inner loop
        //return that letter
  //if your loop didn't find any recurring letter, return the empty string outside the loops
  for (let i = 0; i < word.length; i++) {
    for (let j = i+1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return word[i];
      }
    }
  }
  return ""
};

// Question 7
const showMultiplicativeAverage = (arr) => {
  //initialize a productAccumulator variable to 1
  //iterate through the inputArray
    //reassign productAccumulator to be productAccumulator multiplied with the current array element
  //calculate average as the productAccumulator divided by the length of the array
  //return the average fixed to 3 decimal places (use the toFixed() method)
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return ( product / arr.length ).toFixed(3)
};

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  //create an empty newArray
  //iterate through one of the arrays, it doesn't matter which one since they are the same length
    //using the current index, get the numbers from both arrays
    //multiply them together
    //and push that value into newArray
  //return newArray
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i] * arr2[i]);
  }
  return newArray
};

// Question 9
const sequence = (num) => {
  //create an empty newArray
  //create a for loop from 1 to the input number
    //push each value into newArray
  //return newArray
  const newArray = [];
  for (let i = 1; i <= num; i++) {
    newArray.push(i)
  }
  return newArray
};

// Question 10
const wordCap = (sentence) => {
  //split the sentence into an array of words
  //iterate through each word 
    //lowercase the entire word
    //turn it into an array so it's mutable
    //capital the first letter
    //join it back into a single word (string)
    //update the element in the original array to the new capitalized word
  //join the word array back into and sentence and return it
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase()
    const lettersArray = word.split("");
    lettersArray[0] = lettersArray[0].toUpperCase();
    words[i] = lettersArray.join("")
  }
  return words.join(" ")
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
};
