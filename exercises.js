// Question 1
const isLetter = (char) => char >= 'a' && char <= 'z';

const isRealPalindrome = (word) => {
  const charArr = word.toLowerCase().split('');
  const alphaNumsArr = charArr.filter((char) => isLetter(char) || typeof char === 'number');
  return alphaNumsArr.join('') === alphaNumsArr.reverse().join('');
};

// Question 2
const runningTotal = (numArr) => {
  let total = 0;
  return numArr.map((num) => {
    total += num;
    return total;
  });
};

// Question 3
const swap = (sentence) => {
  const sentArr = sentence.split(' ');
  const swappedArr = sentArr.map((word) => {
    if (word.length === 1) return word;
    if (word.length === 2) return word.split('').reverse().join('');
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  });
  return swappedArr.join(' ');
};

// Question 4
const wordSizes = (sentence) => {
  return sentence.split(' ').reduce((counts, word) => {
    counts[word.length] = counts[word.length] + 1 || 1;
    return counts;
  }, {});
};

// Question 5
const union = (arr1, arr2) => {
  const newArr = [];

  arr1.concat(arr2).forEach((num) => {
    if (!newArr.includes(num)) newArr.push(num);
  });

  return newArr;
};

// Question 6
const firstRecurring = (word) => {
  const occurrences = [];
  for (let letter of word) {
    if (occurrences.includes(letter)) return letter;
    occurrences.push(letter);
  }

  return '';
};

// Question 7
const showMultiplicativeAverage = (nums) => {
  const average = nums.reduce((product, num) => product * num) / nums.length;
  return average.toFixed(3);
};

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  return arr1.map((_, idx) => arr1[idx] * arr2[idx]);
};

// Question 9
const sequence = (limit) => {
  const result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
};

// Question 10
const wordCap = (sentence) => {
  const sentenceArr = sentence.toLowerCase().split(' ');
  return sentenceArr.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
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
