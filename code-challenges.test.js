// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.


function secretCodeWordCreator (String) {
    let secretCodeWord = String.replace(/a/g, 4).replace(/A/g, 4).replace(/e/g, 3).replace(/E/g, 3).replace(/i/g, 1).replace(/I/g, 1).replace(/o/g, 0).replace(/O/g, 0)
    return secretCodeWord
}
console.log(secretCodeWordCreator(secretCodeWord1))
// L4ck4d41s1c4l
console.log(secretCodeWordCreator(secretCodeWord2))
// G0bbl3dyg00k
console.log(secretCodeWordCreator(secretCodeWord3))
// 3cc3ntr1c



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruits = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

function desiredFruitBasket (array, string) {
    mapFruit = array.map(element => element.toLowerCase())
    filterMapFruit = mapFruit.filter(value => value.includes(string))
    situatedFruit = filterMapFruit.map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())
     
    return situatedFruit
}

console.log(desiredFruitBasket(fruits, letterA))
// [ 'Mango', 'Apricot', 'Peach' ]
console.log(desiredFruitBasket(fruits, letterE))
// [ 'Cherry', 'Blueberry', 'Peach' ]
    


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.

function theHouseIsfull (array) {
sliceHouse = array.slice()
    for(let i = 0; i < array.length;) {
spliceHouse = sliceHouse.splice(i, 1)[0]
    if(sliceHouse.includes(spliceHouse)) {
        sliceHouse.splice(sliceHouse.indexOf(spliceHouse), 1)
     if(sliceHouse.includes(spliceHouse)) {
     return true
 }
 }else {
         i++
 }
       }
        return false
 }

 console.log(theHouseIsfull(hand1))
// true
 console.log(theHouseIsfull(hand2))
// false
console.log(theHouseIsfull(hand3))
// true


const fullHouse = (array) => {
    
       let sortArray = array.sort((a,b)=>a-b)
    
       if (sortArray[0] === sortArray[1] && sortArray[0] === sortArray[2] && sortArray[3] === sortArray[4]){
         return true
       }else if (sortArray[0] === sortArray[1] && sortArray[2] === sortArray[3] && sortArray[2] === sortArray[4])
       {return true
       }else
       return false
     }

    console.log(fullHouse(hand1))
    // true
    console.log(fullHouse(hand2))
    // false
    console.log(fullHouse(hand3))
    // false
    