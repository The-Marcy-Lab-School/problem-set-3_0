function isPalindrome (word) {
  return word.split('').reverse().join('') === word;
}

const isRealPalindrome = (word) => {
  const filteredWord = word.toLowerCase().split('').filter((letter) => letter.match(/[a-z0-9]/)).join('');
  return isPalindrome(filteredWord);
};

// 2
function runningTotal (arrayIn) {
  const running = [];
  if (arrayIn.length === 0) return running;
  const adder = arrayIn.reduce((total, num) => {
    running.push(total);
    return total + num;
  });
  running.push(adder);
  return running;
}
function swapped (word) {
  if (word.length === 1) return word;
  if (word.length === 2) return word.split('').reverse().join('');
  return word.substring(word.length - 1) + word.substring(1, word.length - 1) + word[0];
}

// 3
function swap (str) {
  const strArr = str.split(' ');
  return strArr.map((word) => swapped(word)).join(' ');
}

// 4
function wordSizes (phrase) {
  const sizesCount = {};
  const wordsArr = phrase.split(' ');
  wordsArr.forEach((word) => {
    if (word.length in sizesCount) {
      sizesCount[word.length] += 1;
    } else {
      sizesCount[word.length] = 1;
    }
  });
  return sizesCount;
}

// 5
function union (array1, array2) {
  const combinedArr = [];
  array1.forEach((num) => {
    if (!combinedArr.includes(num)) {
      combinedArr.push(num);
    }
  });
  array2.forEach((num) => {
    if (!combinedArr.includes(num)) {
      combinedArr.push(num);
    }
  });
  return combinedArr;
}


// 6
function firstRecurring (word) {
  const letterCounts = {};
  // let wordArr = word.split('');
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] in letterCounts) {
      return word[i];
    }
    letterCounts[word[i]] = 0;
  }
  return '';
}

// 7
function showMultiplicativeAverage (arrayIn) {
  let product = arrayIn.reduce((total, num) => total * num);
  product /= arrayIn.length;
  return product.toFixed(3);
}

// 8
function multiplyList (array1, array2) {
  return array1.map((number, i) => number * array2[i]);
}

// 9
function sequence (limit) {
  const finalSequence = [];
  for (let i = 0; i < limit; i += 1) {
    finalSequence.unshift(limit - 1 * i);
  }
  return finalSequence;
}

function wordCap (phrase) {
  const wordsArr = phrase.toLowerCase().split(' ');
  return wordsArr.map((word) => word.replace(/./, word[0].toUpperCase())).join(' ');
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
