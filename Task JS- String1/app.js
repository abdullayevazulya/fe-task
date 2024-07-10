// // TASK1
// let text = "John Doe"; // 7
// let text1 = "A beautiful game"; // 14
// let newText = text.replaceAll(" ", "")
// let newText1 = text1.replaceAll(" ", "")
// console.log(newText.length, newText1.length)


// TASK2

// let fullName = prompt(`adinizi ve soyadinizi daxil edin`);
// let userName= fullName.slice(0, fullName.indexOf(" "));
// let userSurname= fullName.slice(fullName.indexOf(" ")+1);
// console.log(userSurname, userName );

// // TASK3
// let num1 = 16792
// let num2 = 5437
// let numberMulti = num1 * num2
// console.log(String(numberMulti)[6])

// // TASK4
// let balance = prompt(`"000.00" formatinda reqem daxil edin`, "530.90")
// let manat = balance.slice(0, balance.indexOf("."))
// let qepik = balance.slice(balance.indexOf(".")+1)
// console.log(`sizin balansinizdaki mebleg: ${manat} manat ${qepik} qepikdir`);

// // TASK5
// let fullName = prompt("adinizi soyadinizi ve atanizin adini qeyd eleyin, Məmmədov Ramil Qurban")
// let userName = fullName.slice(fullName.indexOf(" ")+1, fullName.indexOf(" ")+2)
// let userPatronymic = fullName.slice(fullName.lastIndexOf(" ")+1, fullName.lastIndexOf(" ")+2)
// let userSurname = fullName.slice(0,fullName.indexOf(" "))

// console.log(`${userSurname} ${userName} ${userPatronymic}`)

// TASK7
// function findDotInText (text) {
//     let a = text
//     let dot = a.indexOf(".")
//     return console.log(dot);
// }

// findDotInText("Lorem. Ipsum")

// TASK8

// function numberOrNot() {
//      let userInput = prompt("metn daxil edin")
//      for (let i = 0; i < userInput.length; i++) {

//          if (!isNaN(userInput.charAt(i))) {
//          return console.log("sizin metninizde reqem var")
//          }
//      }
//  console.log("sizin metninizde reqem yoxdur")
// }

// numberOrNot()


// // TASK 9

// function repeatedSymbolCounter(string, char) {
//     let word = string
//     let letter = char

//     let splitWord = word.split(letter)
//     let howManyPieces = splitWord.length-1
//     console.log(howManyPieces)
// }

// repeatedSymbolCounter("success", "c"); // 2



// TASK10 
// const text="LoreM" 
// console.log(text.toLocaleLowerCase().replace("l","L"));//ilk tapdigini geri donderir ,replaceALL ise her bir T boyudur 
 

// // TASK11 
// const text = new String("LOREM IPSUM") 
// console.log(text.toLocaleLowerCase());



// // TASK12 
// const firsttext="Kamil" 
// console.log(firstext.replace("K","R")); 
 
// TASK 13

// function removeCharacterFromString(word) {
//     let removeText = word.slice(1)
//     return removeText
// }

// console.log(removeCharacterFromString("Lorem ipsum dolar sit amet"));

// // TASK 14

// function checkIsEmail(email){
//     let endingOfMails = ["@email.com" , "@outlook.com" , "@gmail.com" ,"@mail.ru" , "@yahoo.com", "@yandex.com"]
//     function checkFirstStep(){
//     for (let ending of endingOfMails) {
//         if (email.endsWith(ending)){
//             return true;
//         }
//     } 
//     return false
// }
    
    
//     if (email.includes(".") && checkFirstStep()) {
//         return console.log("email is valid")
//     }  else console.log("email is not valid!! check your Email address!!")
// }

// checkIsEmail("@outlook.com")



