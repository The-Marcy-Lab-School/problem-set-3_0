//1
const isRealPalindrome = (text) => {
  let alphabet = /^[a-z0-9A-Z]+$/i;     //used a regex
  let txtArray = text.toLowerCase().split("");    
  
  let newTxtArray = txtArray.filter(sentence => {
    if (sentence.match(alphabet)){
      return sentence;
    }
  });
  
  let arr1 = newTxtArray.join('');
  let arr2 = newTxtArray.reverse().join('');
  
  if(arr1 === arr2) {
    return true;
  } 
  return false;
}

//2
const runningTotal = function(numberArray) {
  let sum = 0; 
  let runningSum = numberArray.map(element => sum += element);
  return runningSum;
}

//3
function swap(sentence) {
  const sentenceArr = sentence.split(' ');
  return sentenceArr.map(word => swapped(word).join(' '));
}

function swapped(word) {
  if(word.length === 1) return word;
  if(word.length === 2) return word.split('').reverse().join(' ');
  return word[word.length-1] + word.substring(1, word.length-1) + word[0];
}

//4
/* 
  1. Take in a sentence
  2. Transform the sentence into an array 
  3. Check length of each word 
  4. Add length value as property to object and increment value by 1
  
  the length in order to add value to the object value
  
*/

function wordSizes(sentence) {
  const sentenceArr = sentence.split(' ');
  
  return sentenceArr.reduce((count, word) => {
      count[word.length] = count[word.length] + 1 || 1;
      return count;
  }, {});
}


//5
/* 1. Take in two arrays
  2. Have a new array where the arrays are combined to not contain duplicates
  3. Add first array to the empty array
  4. Go through the secong array then add any elements that are not already in array
*/

function union(arr1, arr2) {
   const newArr = [];
   
  arr1.concat(arr2).forEach(number => {
    if(!newArr.includes(number)) newArr.push(number)
  });
  return newArr;
}

//6
/*
  1. Take in a string
  2. Transform into array Go through array 
  3. Could use an object to check values and return the first value that is more than 1
*/

function firstRecurring(word) {
  // const wordArr = word.split('');
  const occurances = [];
  
  for(let letter of word) {
    if(occurances.includes(letter)) 
      return letter;
    occurances.push(letter);
  }
  return '';
}


//7
function showMultiplicativeAverage(numbers) {
  let average = numbers.reduce((product, num) => product * num) / numbers.length;
  return average.toFixed(3);
}

//8
function imperativemultiplyList(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr
}

function multiplyList(arr1, arr2) {
  const result = [];
  arr1.forEach((num, i) => result.push(num * arr2[i]));
  return result;
}

//9
/*
  1. Take in number
  2. Make empty new array
  3. Add number input as first element
  4. subtract the value by 1 and push to the front of new array => turn into string => reverse => make into array again lol
*/

function sequence(number) {
  const numSequence = [];
  
  numSequence.push(number);
  for(let i = 0; i <= number; i++){
    number -= 1;
    numSequence.unshift(number);
  }
  
  return numSequence;
}


//10
/*
  1. Transform string into array
  2. For each word uppercase the first index of the word, then move onto next word
  3. When done with last element join the array into a string
  4. Returns the now changed string. 
*/

function wordCap(string) {
  const strArr = string.toLowerCase().split(' ');
  return strArr.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}

// The below code connects this JS fil to our test file
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
