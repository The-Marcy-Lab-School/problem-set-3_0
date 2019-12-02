// Question 1
const exercises = require('./exercises');

test('Question 1: isRealPalindrome', () => {
  expect(exercises.isRealPalindrome('madam')).toBe(true);
  expect(exercises.isRealPalindrome('Madam')).toBe(true);
  expect(exercises.isRealPalindrome("Madam, I'm Adam")).toBe(true);
  expect(exercises.isRealPalindrome('356653')).toBe(true);
  expect(exercises.isRealPalindrome('123ab321')).toBe(false);
});

xtest('Question 2: runningTotal', () => {
  expect(exercises.runningTotal([2, 5, 13])).toEqual([2, 7, 20]);
  expect(exercises.runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
  expect(exercises.runningTotal([3])).toEqual([3]);
  expect(exercises.runningTotal([])).toEqual([]);
});


xtest('Question 3: swap', () => {
  expect(exercises.swap('Oh what a wonderful day it is')).toBe("hO thaw a londerfuw yad ti si");
  expect(exercises.swap('Abcde')).toBe("ebcdA");
  expect(exercises.swap('a')).toBe("a");
});

xtest('Question 4: wordSizes', () => {
  expect(exercises.wordSizes('Four score and seven.')).toEqual({ "3": 1, "4": 1, "5": 1, "6": 1 });
  expect(exercises.wordSizes("What's up doc?")).toEqual({ "2": 1, "4": 1, "6": 1 });
  expect(exercises.wordSizes("I ate her lunch")).toEqual({ "1": 1, "3": 2, "5": 1 });
});

xtest('Question 5: union', () => {
  expect(exercises.union([1, 3, 5], [3, 6, 9])).toEqual([1, 3, 5, 6, 9]);
  expect(exercises.union([2, 2, 2, 2], [10, 5, 2])).toEqual([2, 10, 5]);
});

xtest('Question 6: firstRecurring', () => {
  expect(exercises.firstRecurring('reuben')).toBe("e");
  expect(exercises.firstRecurring('anne')).toBe("n");
  expect(exercises.firstRecurring('restaurant')).toBe("a");
  expect(exercises.firstRecurring('paul')).toBe("");
});

xtest('Question 7: showMultiplicativeAverage', () => {
  expect(exercies.showMultiplicativeAverage([3, 5])).toBe("7.500");
  expect(exercies.showMultiplicativeAverage([2, 5, 7, 11, 13, 17])).toBe("28361.667");
});

xtest('Question 8: multiplyList', () => {
  expect(exercises.multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
  expect(exercises.multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);
});

xtest('Question 9: sequence', () => {
  expect(exercises.sequence(5)).toEqual([1, 2, 3, 4, 5]);
  expect(exercises.sequence(3)).toEqual([1, 2, 3]);
  expect(exercises.sequence(1)).toEqual([1]);
});

xtest('Question 10: wordCap', () => {
  expect(exercises.wordCap('four score and seven')).toBe("Four Score And Seven");
  expect(exercises.wordCap('the javaScript language')).toBe("The Javascript Language");
});
