
// TASK 1 //  
 
// function DNACode(dna) { 
//     const complement = { 
//         'A': 'T', 
//         'T': 'A', 
//         'C': 'G', 
//         'G': 'C' 
//     }; 
 
 
//     let changeCode = ''; 
//     for (let i = 0; i < dna.length; i++) { 
//         let base = dna[i]; 
//         changeCode += complement[base]; 
 
//     return changeCode; 
// } 
 
 
// console.log(DNACode("ATTGC"));  
// console.log(DNACode("GTAT")); 



//TASK2 
 
 
// function contamination(text, char){ 
//     return console.log(char.repeat(text.length)) 
//   } 
   
   
//   contamination("abc", "z") 
 

// TASK 3 
 
// function  getNumberFromString(number) { 
//     let reqem = number 
//     let onlyNumber = "" 
//     for (let i = 0; i < reqem.length; i++) { 
//         if (Number(reqem.charAt(i))) { 
//             onlyNumber = onlyNumber + reqem.charAt(i) 
//         } 
         
//     } 
//     return console.log(onlyNumber); 
// } 
 
// getNumberFromString("hell5o wor6ld") 


// TASK 4 
// function nameWord(params) { 
//     let word = params 
//     word = word.replaceAll("!", "") 
//     console.log(word + "!"); 
// } 
 
// nameWord("!Hi! H!i!") 


//TASK 6 
// function stringy(text){ 
//       let binaryText = "" 
//       for (let i = 0; i < text.length; i++) { 
//         if (i%2 === 0) { 
//             binaryText += "1" 
//         } else { 
//         binaryText += "0"}; 
 
     
// }return console.log(binaryText); 
// } 
 
// stringy("STERLING")


// TASK 7 
 
// function input(word){ 
//     if (word === word.toUpperCase()){  
//         return console.log("true"); 
//     } 
//     else console.log("false") 
// } 
 
// input("HELLO")


// // TASK 8 
// function myFunction(number, str) { 
//     return console.log(str.repeat(number)); 
// } 
 
 
// myFunction(2, "Hello")



// TASK 9 
// function changeWord (word) { 
//     let word1 = word 
//     let mirrorWord = ""; 
//     for (let i = word1.length; i >= 0; i--) { 
//         mirrorWord = mirrorWord + soz.charAt(i) 
         
//     } 
 
//     return console.log(mirrorWord); 
 
// } 
 
 
 
// changeWord('world') 
// changeWord('drow')


// TASK 10 
 
// function marginWords(text) { 
//    let newText = text.replaceAll(" ", "" ) 
//    return console.log(newText); 
// } 
 
// marginWords("Lorem ipsum dolar sit") 
// marginWords("8aaaaa dddd r")




// String PART 3


//TASK 1
                      
                        
// function solution(text, letters) {
//    if (text.endsWith(letters)) {
//     return console.log(true); 
//    } else {
//     return console.log(false); 
//    }
// }



// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false




// TASK 2



// function solve(text) {
//     upperCase = 0
//     lowerCase = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text.charAt(i) === text.charAt(i).toUpperCase()) {
//             upperCase += 1
//         }
//           else  {lowerCase += 1}
//     }    

//     if (upperCase <= lowerCase) { 
//         console.log(text.toLowerCase())

//     } else {
        
//         console.log(text.toUpperCase());;}

//     }

// solve("coDe")
// solve("CODe")
// solve("COde")












