
function palindrome(string) {
  let array;
  array = string.split('');
  let reverseCopy = array.reverse().join('');
  
  if (reverseCopy === string) {
    return true;
  }
  else {
    return false;
  }
};


const isRealPalindrome = function(str){
  let strippedWord = str.toLowerCase().split('').filter(char => char.match(/[a-z0-9]/)).join('');
  return palindrome(strippedWord);
}

const runningTotal = function(array) {
  if(array.length === 0){
    return array;
  }
  let newArr =[];
  newArr[0]= array[0];
  for(let i = 1; i < array.length; i += 1){
    newArr[i] = array[i] + newArr[i - 1] ;
  }
  return newArr;
}
runningTotal([2,5,13]);

const swap = (str) => {
  let strArr = str.split(' ');
  let result = strArr.map(word => {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.substring(1,word.length - 1) + word[0];
  }); 
  return result.join(' ');
};
swap("I am having a bad day");

const wordSizes = function(arr) {
  let wordObj = {};
  let wordArr = arr.split(' ');
  wordArr.forEach ((letter) => {
    if(`${letter.length}` in wordObj){
      wordObj[`${letter.length}`] += 1;
    }else{
      wordObj[`${letter.length}`] = 1;
    }
  });
  return wordObj;
}
wordSizes('The is my name');

const union = function(array,arrayTwo){
  let combinedArr= [];
  array.forEach(function(number){
    if(!combinedArr.includes(number)) combinedArr.push(number);
  });
  arrayTwo.forEach(function(number){
    if(!combinedArr.includes(number)) combinedArr.push(number);
  });
  return combinedArr;
}

union([1,2,3],[2,3,4,5]);

const firstRecurring = function (str){
  let strObj = {};
  for(let letter of str){
    if(letter in strObj){
      return letter;
    }
    else{
      strObj[letter] = 1;
    }
  }
  return '';
};
firstRecurring('reuben'); 

const showMultiplicativeAverage = function(array){
 let total =  array.reduce(function(number,numberTwo){
      return number * numberTwo
  });
  return (total / array.length).toFixed(3);
};

showMultiplicativeAverage([3,5]);

const multiplyList = function(array,arrayTwo){
  let combineArr = [];
  array.forEach(function(value, index){
    combineArr.push(array[index] * arrayTwo[index]);
  })
  return combineArr;
};

multiplyList([3, 5, 7], [9, 10, 11]);

const sequence = function(num){
  let arrNum= []; 
  let counter = 1;
  while(counter <= num){
    arrNum.push(counter);
    counter += 1;
  };
  return arrNum;
};
sequence(5);

const wordCap = function(str){
  let strArr = str.toLowerCase().split(' ');
  let result = strArr.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return result.join(' ');
};

 wordCap('four score and seven');


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
