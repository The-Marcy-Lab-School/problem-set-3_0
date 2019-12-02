// NUMBER1
const isRealPalindrome = (str) => {
  const strArr = str.split('');
  const newStr = strArr.fliter((sentence) => {
    if (strArr.match(/a-zA-Z/g));
    return sentence;
  });
  const arr1 = newStr.join('').toLowerCase();
  const arr2 = newStr.reverse().join('').toLowerCase();

  if (arr1 === arr2) {
    return true;
  }
  return false;
};

// NUMBER 2
const runningTotal = (arr) =>{
  let total = 0
  const running = arr.map((currentValue) => total += currentValue);
  return running;
}


// NUMBER 3
const swap = (str) => {
  const arrStr = str.split(' ');
  arrStr.map((element) => element.unshift(element.slice(-1)));
  return arrStr.join(' ');
}

// NUMBER 4
const wordSizes = (str) =>{
  let lengthCount = {};
  str.split(' ').forEach(word => {
      if(str.length === 0){
        return lengthCount;
        }
        if (word.length in lengthCount) {
            lengthCount[word.length] += 1;
        }
        else {
            lengthCount[word.length] = 1;
        }
    });
    return lengthCount;
}

// NUMBER 5
const union = (arr1, arr2) => {
  let combined = arr1.concat(arr2);
  let newArr = [];
  combined.forEach((num) => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });
  return newArr;
}

// NUMBER 6
const firstRecurring = (str) =>{
  let letterCounter = [];
    for (let i = 0; i < str.length; i ++) {
        if (str[i] in letterCounter) {
            return str[i];
        } else {
            letterCounter[str[i]] = 0;
        }
    }
    return '';
}
// NUMBER 7
const showMultiplicativeAverage = (arr) => {
  return arr.reduce((total, number) => (total * number) / arr.length).toFixed(3);
}

// NUMBER 8
const multiplyList = (arr1, arr2) =>{
  let newArr = [];
  for(let i = 0; i< arr1.length; i++){
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}

// NUMBER 9
function sequence(limit) {
  let sequence = []; 
  for(let i = 1; i<= limit; i++){
    sequence.push(i);
  }
  return sequence;
}

// NUMBER 10 
function wordCap(str){
  let newStr = str.split(' ').map(word =>{
    if(word.match(/[a-z]/ig)){
      return word[0].toUpperCase() + word.substring(1);
    }
  });
  return newStr.join(' '); 
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


//
