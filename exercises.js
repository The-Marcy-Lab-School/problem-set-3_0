//1
const isRealPalindrome = word => {
  let filteredWord = word.toLowerCase().split('').filter(letter => {
    return letter.match(/[a-z0-9]/);
  }).join('');
  return isPalindrome(filteredWord);
};

function isPalindrome (word) {
  return word.split('').reverse().join('') === word;
}

//2
function runningTotal (arrayIn) {
    let running = [];
    if (arrayIn.length === 0) return running;
    let adder = arrayIn.reduce((total, num) => {
        running.push(total);
        return total + num;
    });
    running.push(adder);
    return running;
}


//3
function swap (str) {
    let strArr = str.split(' ');
    return strArr.map(word => {return swapped(word)}).join(' ');
}

function swapped (word) {
    if (word.length === 1) return word
    if (word.length === 2) return word.split('').reverse().join('')
    return word.substring(word.length - 1) + word.substring(1, word.length - 1) + word[0]
}

//4
function wordSizes (phrase) {
    const sizesCount = {};
    let wordsArr = phrase.split(' ');
    wordsArr.forEach(word => {
        if (word.length in sizesCount) {
            sizesCount[word.length] += 1
        } else {
            sizesCount[word.length] = 1;
        }

    });
    return sizesCount;
}

//5
function union (array1, array2) {
    let combinedArr = [];
    array1.forEach(num => {
        if (!combinedArr.includes(num)) {
            combinedArr.push(num);
        }
    });
    array2.forEach(num => {
        if (!combinedArr.includes(num)) {
            combinedArr.push(num);
        }
    });
    return combinedArr;
}

//6
function firstRecurring (word) {
    const letterCounts = {};
    //let wordArr = word.split('');
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] in letterCounts) {
            return word[i];
        } else {
            letterCounts[word[i]] = 0;
        }
    }
    return '';
}

//7
function showMultiplicativeAverage (arrayIn) {
    let product = arrayIn.reduce((total, num) => {
        return total * num;
    });
    product = product / arrayIn.length;
    return product.toFixed(3);
}

//8
function multiplyList (array1, array2) {
    return array1.map((number, i) => {
        return number * array2[i]
    });
}

//9
function sequence (limit) {
    let sequence = [];
    for (let i = 0; i < limit; i += 1) {
        sequence.unshift(limit - 1 * i);
    }
    return sequence;
}

function wordCap (phrase) {
 let wordsArr = phrase.toLowerCase().split(' ');
 return wordsArr.map(word => {
    return word.replace(/./, word[0].toUpperCase());
 }).join(' ');
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
