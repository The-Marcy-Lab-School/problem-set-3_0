// Question 1:
const isRealPalindrome = (sentence) => {
  const arrSent = sentence.toLowerCase().split('');
  const filteredArr = arrSent.filter((character) => character.match(/[a-z0-9]/));
  if (filteredArr.join('') === filteredArr.reverse().join('')) {
    return true;
  }
  return false;
};

// Question 2:
const runningTotal = (arrNum) => {
  let sum = 0;
  return arrNum.map((num) => sum += num);
};

// Question 3:
const swap = (sentence) => {
  const sentArr = sentence.split(' ');
  return sentArr.map((word) => {
    if (word.length === 1) {
      return word;
    }
    if (word.length === 2) {
      return word.split('').reverse().join('');
    }
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  }).join(' ');
};

// Question 4:
const wordSizes = (sentence) => {
  const letCount = {};
  const arrSent = sentence.split(' ');
  const filteredArr = arrSent.filter((character) => character.match(/[a-z]/gi));
  filteredArr.forEach((word) => {
    if (word.length in letCount) {
      letCount[word.length] += 1;
    } else {
      letCount[word.length] = 1;
    }
  });
  return letCount;
};

// Question 5:
const union = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const finalArr = [];
  newArr.forEach((num) => {
    if (!finalArr.includes(num)) finalArr.push(num);
  });
  return finalArr;
};

// Question 6:
const firstRecurring = (sentence) => {
  const repeated = [];
  for (const char of sentence) {
    if (repeated.includes(char)) {
      return char;
    }
    repeated.push(char);
  }
  return '';
};

// Question 7:
const showMultiplicativeAverage = (arrNum) => {
  const totalNum = arrNum.length;
  const ave = arrNum.reduce((product, num) => product * num);
  const multiAve = ave / totalNum;
  return multiAve.toFixed(3);
};

// Question 8:
const multiplyList = (arr1, arr2) => arr1.map((num, i) => num * arr2[i]);


// Question 9:
const sequence = (num) => {
  const seqArr = [];
  for (let i = 1; i <= num; i += 1) {
    seqArr.push(i);
  }
  return seqArr;
};

// Question 10:
const wordCap = (sentence) => {
  const sentArr = sentence.split(' ');
  const capArr = [];
  sentArr.forEach((word) => {
    if (word.match(/[a-z]/gi)) {
      capArr.push(word[0].toUpperCase() + word.substring(1, word.length).toLowerCase());
    }
    return word;
  });
  return capArr.join(' ');
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
