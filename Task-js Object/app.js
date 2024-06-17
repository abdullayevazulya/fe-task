// task1
// const user ={
//     username:"Zulya",
//     surname:"Abdullayeva",
//     gender:"Qadin",
//     birthday:"21.06.2001",
// };
// console.log(user.birthday);

// task2
// const user ={
//        username:"Zulya",
//        surname:"Abdullayeva",
//        gender:"Women",
//        birthday:"21.06.2001",
//    };

//    for (const key in user) {
//   console.log(`${key}:${user[key]}`);
//    }

// //  task4
// let user = {
//     name: "Zulya",
//     age: 23,
    
//     // Yaş değiştiren metod
//     setAge() {
//         user.age = +prompt('yasinizi daxil edin');
//     },

//     // Qalan illeri  dönderen metod
//     getYearsBeforeRetirement: function() {
//         const retirementAge = 65; // Pensiya yasi
//         const yearsLeft = retirementAge - user.age;
//         if (yearsLeft > 0) {
//             return yearsLeft;
//         } else {
//             return 0; // Eğer istifadecinin  yaşı pensiya yaşına catdisa, 0 dondersin
//         }
//     }
// };

// user.setAge();

// let yearsLeft = user.getYearsBeforeRetirement();
// console.log(`${user.name} adlı şəxsin pensiyaya qədər qalan illərinin sayı: ${yearsLeft}`);

// // task5
// function prop2Taker(obj) {
//    console.log(obj[`prop-2`]);
// }
// prop2Taker({ one: 1, 'prop-2': 2}); // 2 olmalıdır
// prop2Taker({ 'prop-2': 'two', prop: 'test'}); // 'two' olmalıdır



// // task6
// function propertyTaker(obj, propertyName) {
//     return obj[propertyName];
// }


// console.log(propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent')); 
// console.log(propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country'));
// console.log(propertyTaker({ name: 'ali', age: 12 }, 'name')); 





// // task7
// function existsAndTruthy(obj,propName) {

// if(obj[propName]){
//     return true;
// }else{
//     return false;
// }

// }
// console.log(existsAndTruthy({a:1,b:2,c:3},'b'))// true  
// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y')) // false (obyektde 'y' var amma falsy-di ona gore false) 
// console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z') )// false (obyektde 'z' yoxdu ona gore false)