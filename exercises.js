//Question 1

const isRealPalindrome = function(input){
  input = input.toLowerCase().split('');
  const newInput = input.filter(char => char.match(/[a-z0-9]/i));
  if(newInput.join('') === newInput.reverse().join('')){
    return true;
  }
  return false;
}

//Question 2
const runningTotal = function(arr){
  if( arr.length === 0){
    return [];
  }
  const totalArr = [];
  let sum = arr.reduce((accumulator, currentValue) => {
    totalArr.push(accumulator);
    return accumulator + currentValue;
    
    });
  
  totalArr.push(sum);
  return totalArr;
}

//Question 3
const swap = function(phrase){
  phrase = phrase.split(' ');
  
  let newPhrase = phrase.map(function(word){
    let lastLetter = word.charAt(word.length - 1);
    let firstLetter = word.charAt(0);
    if(word.length === 1){
      return word;
    }
    word = word.split('');
    word.pop()
    word.shift();
    word = word.join('');
    word = lastLetter + word + firstLetter;
    return word;
  });
  
  return newPhrase.join(' ');
}

//Question 4
let wordSizes = function(sentence){
  const sizes = {};
  sentence = sentence.split(' ');
  for(let word in sentence){
    
    if(!Object.keys(sizes).includes(sentence[word].length)){
      sizes[`${sentence[word].length}`] = 0;
    }
  }
  for(let counter in sentence){
    sizes[`${sentence[counter].length}`] += 1;
  }
  return sizes;
}

//Question 5
let union = function(arr1, arr2){
  const combinedArr = [];
  for(let num in arr1){
    if(!combinedArr.includes(arr1[num])){
      combinedArr.push(arr1[num]);
    }
  }
  for(let num in arr2){
    if(!combinedArr.includes(arr2[num])){
      combinedArr.push(arr2[num]);
    }
  }
  
  return combinedArr;
}

//Question 6
let firstRecurring = function(array){
  for(let num in array){
    if(array.indexOf(array[num]) !== array.lastIndexOf(array[num])){
      return array[num];
    }
  }
  return "";
}

//Question 7
let showMultiplicativeAverage = function(array){
  let product = array.reduce((acum,num)=> acum * num)
  let average = product / array.length;
  return average.toFixed(3);
}

//Question 8
let multiplyList = function(arr1, arr2){
  const newArr =[];
  for(let num in arr1){
    newArr.push(arr1[num] * arr2[num]);
  }
  return newArr;
}

//Question 9
let sequence = function(number){
  const seqArr = [];
  let counter = 1
  while(seqArr.length < number){
    seqArr.push(counter);
    counter += 1;
  }
  return seqArr;
}

//Question 10
let wordCap = function(phrase){
   phrase = phrase.split(' ');
  
  let newPhrase = phrase.map(function(word){
    let firstLetter = word.charAt(0);
    if(word.length === 1){
      return word;
    }
    word = word.split('');
    word.shift();
    word = word.join('');
    word = firstLetter.toUpperCase() + word.toLowerCase();
    return word;
  });
  
  return newPhrase.join(' ');
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
}