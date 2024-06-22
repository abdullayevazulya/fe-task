

// // // TASK2
// function Calculator() {
// this.num1=0;
// this.num2=0;
// this.read =function () {
//      this.num1= +prompt("Birinci ededi daxil edin")
//      this.operation=prompt("operatoru daxil edin")
//      this.num2=+prompt("Ikinci ededi daxil edin ")
//     }


// this.math = function () { 
//     switch (this.operation) { 
//         case "+": 
//             console.log(`Result: num1 + num2 = ${this.num1 + this.num2} `); 
//             break; 
//         case "-": 
//             console.log(`Result: num1 + num2 = ${this.num1 - this.num2} `); 
//           break; 
//         case "*": 
//             console.log(`Result: num1 + num2 = ${this.num1 * this.num2} `); 
//           break; 
//         case "/": 
//             console.log(`Result: num1 + num2 = ${this.num1 / this.num2} `); 
//           break; 
//     } 
// } 
 

// }

// const calc1 = new Calculator();
// calc1.read();
// calc1.math();








// TASK1
// function User(fullName) { 
//         this.fullname = ""; 
//         this.creditLimit = 1000; 
//         this.balans = 50; 
//         this.precentOfMinPayment = 10; 
//         this.borc; 
        
//         this.getBalance = function ()  { 
//             if (this.balans === 0 && this.creditLimit < 1000) { 
//                 this.borc =  (1000 - this.creditLimit) + ((1000-this.creditLimit)/100 * this.precentOfMinPayment) 
//                 console.log(`Sizin borcunuz ${this.borc}`);  
//             } else if (this.balans > 0) {  
//                 console.log(`sizin balansiniz: ${this.balans}`); 
//             } else { 
//                 console.log(`sizin borcunuz yoxdur`); 
//             } 
//         }; 
     
//         this.withdraw = function (amount) { 
//             if (amount > this.balans + this.creditLimit) { 
//                 console.log(`almaq isteyiniz mebleg coxdur`); 
//             } else if (amount > this.balans ) { 
//                 const diff = amount - this.balans; 
//                 this.balans = 0; 
//                 this.creditLimit -= diff; 
//                 console.log(`cixilan mebleg ${amount} AZN. Balans: ${this.balans} AZN, Kredirt limiti: ${this.creditLimit} AZN`); 
//             } else { 
//                 this.balans = this.balans - amount;  
//                 console.log(`cixilan mebleg ${amount} AZN. Balans: ${this.balans} AZN`); 
     
//             } 
//         } 
//         this.refill = function (amount) { 
//            this.borc =  (1000 - this.creditLimit) + ((1000-this.creditLimit)/100 * this.precentOfMinPayment) 
             
//              if (this.balans === 0 && this.borc > 0){ 
//                 if (amount >= this.borc) { 
//                     amount -= this.borc; 
//                     this.borc = 0; 
//                     this.balans += amount; 
//                     console.log(`sizin borcunuz tamamile odenildi. Balansiniz: ${this.balans}`); 
//                 } else{ 
//                     this.borc -= amount; 
//                     console.log(`Sizin borcunuzun mueyyen hissesi odenildi. Balansiniz: ${this.balans}. Borcunuz: ${this.borc} `); 
     
//                 } 
                 
//             } 
//         } 
//      } 
     
     
//     const client = new User(`Zulya`); 
     
//     client.withdraw(500) 
//     client.getBalance() 
//     client.refill(100)