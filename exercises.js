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
  for (const el of str) {
    if (el in obj) {
      return el;
    }
    obj[el] += 1;
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
