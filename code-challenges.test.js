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

describe ("secretCodeWordCreator", () => {
    it ("Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {

        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        
        expect (secretCodeWordCreator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect (secretCodeWordCreator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect (secretCodeWordCreator(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

// create a function call secretCodeWordCreator
// secretCodeWordCreator will have one parameter which will be a string
// create a variable secretCodeWord
// secretCodeWord will equal the string.replace
// string.replace will replace all instances of A,a with 4, E,e with 3, I,i with 0 and O,o with 0
// return sercetCodeWord

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

describe ("desiredFruitBasket", () => {
    it ("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {

        const fruits = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
       // Expected output: ["Cherry", "Blueberry", "Peach"]
        
        expect (desiredFruitBasket(fruits, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect (desiredFruitBasket(fruits, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// Create a function call desiredFruitBasket
// secretCodeWordCreator will take two parameters which will be an array and string
// Use .map to lowercase all the letters in the string in the array 
// Use .filter to return the value of the array that .include the letter in the string
// Use .map to .toUpperCase characters at 0 index, then start to .toLowerCase at index 1
// Return situatedFruit

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

describe ("fullHouse", () => {
    it ("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {

       const hand1 = [5, 5, 5, 3, 3]
       // Expected output: true
       const hand2 = [5, 5, 3, 3, 4]
       // Expected output: false
       const hand3 = [5, 5, 5, 5, 4]
       // Expected output: false
        
        expect (fullHouse(hand1)).toEqual(true)
        expect (fullHouse(hand2)).toEqual(false)
        expect (fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.

// Create a function call theHouseIsfull
// theHouseIsfull will take one parameter which will be an array
// Use .sort to arrange from lowest to highest
// Use the .slice to cut array and slice instances of a full house
// Now this is the part of my code where I realized that I will have to create every instance of a full house
// I started reseaching other functions to simplify the process and I came across a code that worked successfully. 

// The function I started to create before my research...
function theHouseIsfull (array) {

    let sortArray = array.sort((a,b)=>a-b)

    sliceHouse = sortArray.slice()

    spliceHouse = sliceHouse.splice(i, 1)[0]
      if(sliceHouse.includes(spliceHouse)) {

    sliceHouse.splice(sliceHouse.indexOf(spliceHouse), 1)
      if(sliceHouse.includes(spliceHouse)) {
     return true
 }
 }else {
         i++
 }
       
        return false
 }

 console.log(theHouseIsfull(hand1))
// true
 console.log(theHouseIsfull(hand2))
// false
// My issue with the code I started... gives a true for (hand3)
console.log(theHouseIsfull(hand3))
// true

// The code that I found and built on works perfect
// The code create all instances of a full house
// This problem was challenging for me because of the level of complexity in creating instances for all possiblies of a full house

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
    