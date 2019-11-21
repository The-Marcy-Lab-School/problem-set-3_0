const isRealPalindrome = (str) => {
  const strArr = str.split('');
  const newStr = strArr.filter((sentence) => {
    if ((sentence >= 'a' && sentence <= 'z') || (sentence >= 'A' && sentence <= 'Z')) {
      return sentence;
    }
  });
  const arr1 = newStr.join('').toLowerCase();
  const arr2 = newStr.reverse().join('').toLowerCase();

  if (arr1 === arr2) {
    return true;
  }
  return false;
};

const runningTotal = (arr) => {
  let sum = 0;// starting number
  const total = arr.map((currentValue) => sum += currentValue);
  return total;
};

const swap = (str) => {
  const strArr = str.split(' ');
  const result = strArr.map((word) => {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  });
  return result.join(' ');
};

const wordSizes = (str) => {
  const obj = {};
  const newStr = str.split(' ');
  newStr.forEach((word) => {
    if (!obj[word.length] === 1) {
      obj[word.length] = 0;
    }
    obj[word.length] += 1;
  });
  return obj;
};

const union = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const resultArr = [];
  newArr.forEach((num) => {
    if (!resultArr.includes(num)) {
      resultArr.push(num);
    }
  });
  return resultArr;
};

const firstRecurring = (str) => {
  const obj = {};
  for (const letter of str) {
    if (letter in obj) {
      return letter;
    }
    obj[letter] += 1;
  }
  return '';
};

const showMultiplicativeAverage = (arr) => {
  const result = arr.reduce((total, num) => total * num);
  return (result / arr.length).toFixed(3);
};

const multiplyList = (arr1, arr2) => arr1.map((num, i) => num * arr2[i]);

const sequence = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    result.push(i);
  }
  return result;
};

const wordCap = (str) => {
  const newStr = str.split(' ');
  const result = newStr.map((word) => {
    const low = word.toLowerCase();
    return low[0].toUpperCase() + low.substring(1, low.length);
  });
  return result.join(' ');
};

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
