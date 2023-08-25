const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray,);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray,);
let resultsInsert = perf.stop();


console.log('Results for the largeArray,');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//Sum Zero, Extra Credit: O(1)

let addToZero =[1, 2, 3, -2]; 
let sum= 0

for (let i = 0; i < addToZero.length; i++) {
  if (sum === 0) {
    console.log(true)
  } else  {
    console.log(false)
  }
}

//Unique Characters, Extra Credit: O(n^2)

let word = "Moonday"
let characterArray = word.split("")

let isBool = true
for(let i = 0; i<characterArray.length; i++){
    for(let j = 0; j<characterArray.length; j++){
        if(i != j && (characterArray[i] === charArray[j])){
            isBool = false
        }
    }
}
console.log(isBool)

//Pangram Sentence, Extra Credit: O(n)


function isPangram(string){
    let strArr = string.toLowerCase();
    let sentence = "The quick brown fox jumps over the lazy dog.".split('');
    
    for (let i = 0; i < sentence.length; i++) {
      if(strArr.indexOf(sentence[i]) < 0){
        return false;
      }
    }
    return true;
  }

  //longest word, Extra Credit O(n)
  function longestWord(array)
  {
    let longWord = array[0].length;
    let greet = array[0];
    for ( let i = 1; i < array.length; i++) {
        let long = array[i].length;
        if (long > longWord) {
            greet = array[i];
            longWord = long;
        }
    }
    return greet;
}
console.log(longestWord(["hi", "bye", "welcome"]));

  


