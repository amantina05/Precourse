// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let curr = arr[i];
    newArr.push(curr++);
  }
  return newArr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  return arr.push(item);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  return arr.unshift(item);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let string = words[0];
  for (let i = 0; i < words.length; i++){
    string = string + ' ' + words[i];
  }
  return string;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i < arr.length; i++){
    let curr = arr[i];
    if(curr.includes(item)){
      return true;
    }
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
    let curr = numbers[i];
    total = total + curr;
  }
  return total;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total = 0;
  let avg;
  for (let i = 0; i < testScores.length; i++){
    let curr = testScores[i];
    total = total + curr;
  }
  avg = total / testScores.length;
  return avg;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest = 0;
  for (let i = 0; i < numbers.length; i++){
    let curr = numbers[i];
    if (curr > largest){
      largest = curr;
    }
  }
  return largest;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  var product= 1;

  for (let i=0; i < arguments.length; i++) {
    if (arguments.length >= 1) {
      product = product * arguments[i];
    }
  }
  if (arguments.length === 0) {
    product = 0;
  }
  return product;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
