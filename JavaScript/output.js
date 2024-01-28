   // var trees = ["pine","apple","oak","maple","cherry"];
   // delete trees[3];
   // console.log(trees.length);    // op = 5 


//=================================================

// console.log("10"+ 20 + 30);  // 102030     starting string converts everything to string

// console.log("10"+50-30);

//===================================

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);  //undefined , Aas inside an IIFE the this refers to window object 
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();


//==============Destructuring===========================

// var student = {
//     name: 'John',
//     age: '27',
//     colleege: 'SRCC'
// }

// const {name, age, colleege} = student;
// console.log(name, age, colleege);


//=======================================================Required IMP========================

// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
//   console.log(b);
//   console.log(a);


//======================SETS============================


// const ages = [26,25,23,25,26,22,21,56,58];
// const dupages = Array.from(new Set(ages));
// var newSet = new Set();
// console.log(ages);
// console.log(newSet.add(dupages));


//==============================================

// console.log ('abcd'.reverse()); // wont work as it needs to be accessed from thhe prototype
//should print dcba

// String.prototype.reverse = function() {
//     return this.split('abcd').reverse();
// }


//==========================================

// function test() {
//     console.log(a);
//     console.log(foo());
     
//     var a = 1;
//     function foo(){
//         return 2;
//     }
// }
// test();


//===============SettimeOut , Setinterval=============================

// setTimeout(function(){
//     console.log("hello");
// },2000);

// //==================
// setInterval(function(){
//     console.log("HELLO HELLO")
// },3000);

//===========================


//  function sortArr() {
//     var arr = [1,8,203,6,80];
//     let sorted = arr.sort((a,b)=>a-b);
//     console.log(sorted);
//  }
//  sortArr();

 //============================================

//  var obj = {
//     name :'SAATISHH',
//     getName : function () {
//         console.log(this.name);
//     } 
//  }
//  var getName = obj.getName;
//  var obj2 = {name : 'Satish', getName};
//  obj2.getName();


 //======================================

//  let myFunc = function() {
//     console.log(varNum);
//     console.log(letNum);

//     var varNum = 2;    // scope thing : ans is undefined
//     let letNum = 1;    //  cannot access let before initialization , hence reference error
//  };
//  myFunc();


 //============================================

//  const arrNum = [1,2,3,4,5,6,7,8,9,10];
//  const mapResult = arrNum.map(aNum => {
//     return aNum+1;
//  });
 
//  const forEachResult = arrNum.forEach(myFunction);
//  function myFunction(index, item) {
//     var ex = (item + 3);
//     console.log(ex);
//  }
//  console.log(mapResult, "The Result for forEach is:  " + forEachResult);

// map will return an newly operted array of the same length but in case of foreach it will be undefined as it does not return any 
//array it only operates on each element of the array 

//======================================MAP========================================================


// var arr = [1,2,3,4,5,6,7,8,9];
// const multip5 = arr.map(num => {
//     return num*5;
// });
// console.log (multip5);

// ======//OR================

// const multip = (num) => {
//     return num *5;
// }

// const res = arr.map(multip);
// console.log(res);


//===========================FILTER=====================

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// const org1 = arr.filter(num => {
//     if(num %3 == 0){
//         return num;
//     }
// });

// const org = arr.filter(res => res%3 == 0);

// console.log(org);
// console.log(org1);


// let arr = [1,1,0,1,0,1,1,0,1,1,1,0,1];

// var ones = arr.filter(val =>{
//  return val == 0;
// });

// console.log(ones.length);

//=========================== REDUCE===========================

// var arr = [1,2,3,4,5,6,7,8,9];

// function addition(num, index){
//     var addi = num + index;
//     return addi;
// }
// const add = arr.reduce(addition);
// console.log(add);   


//=======================SET=======================================

// var a = [1,2,3,4,3,4,5,9,9,10,4,3,5,6,7,8];
// console.log(a.length);
// var newSet = new Set(a);
// console.log(newSet);
// console.log(newSet.size);


//===========================CLONING AN OBJECT=============================================


// var a = {
//     name: "satish",
//     age : 28,
// }

// var k = JSON.stringify(a);
// console.log(k);

// var s = JSON.parse(k);
// console.log(s);


// var obj = {name: "the name is satish",age : 28}
// var obj1 = obj;     
// console.log(obj,obj1);


// obj1.country = "India";  /// this will add India to both  because Objects are reference types. So when you use =, it copied the pointer to the memory space it occupies. Reference types don't hold values, they are a pointer to the value in memory
// console.log(obj);
// console.log(obj1);  


//Hence we can use ===============

// const obj2 = Object.assign(obj);
// console.log(obj2);
// obj2.country = "INDIA";
// console.log(obj2);

//=========or===Spread operator for cloning=======

// const obj3 = {...obj};
// obj3.country = "INDIA";
// console.log(obj3);

//======================================= Using object.assign=============================
// const food = { beef: '🥩', bacon: '🥓' };

// const cloneFood = Object.assign({}, food);

// console.log(cloneFood);
//op : { beef: '🥩', bacon: '🥓' }


//======================Find the length of an object==========================================

// var abc = {'a1':1, 'a2':2,'a3':3};
// var a = Object.keys(abc).length;
// console.log(a);

//=================================================================

// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// console.log("Length of array :" +arr.length);

// arr.push(10,11,12,13);
// console.log(arr);
// console.log("New Length = "+arr.length);


///==========================Object.entries return the key value in an array (consisting inside a array collection)===============


// var obj = {'a1':1, 'a2':2,'a3':3};
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));


//=============================

// function isEligible() {
//     var age = [24,56,1,12,11,10];
//     return age>=18;
// }

//=======================copying values in js=============

// let a = 10;
// let b = 20;

// console.log([a,b]=[b,a]);

//===========================================

// console.log(1 +"2");
// console.log(1 +"2"+"2");
// console.log(1 + +"2"+"2");
// console.log(1 + -"1"+"2");
// console.log(+"1" + -"1"+"2");
// console.log("A" -"B"+"2");
// console.log("A" -"B" + 2);

//=====================Code in index.html file to run==========================


// for( var i = 0 ; i<5; i++)  {
//     var btn = document.createElement('button');
//     btn.addEventListener('click',function() {
//         console.log(i);
//     });
//     document.body.appendChild(btn);      // for var it will create 5 buttons and clickin on each will give 5 on console.  with let  each button will show it sindividual values 1,2,3,4
// }

//====================================================

// const obj = {
//     a : "ob1",
//     b : "ob2",
//     a : "ob3"
// }
// obj.d = "obj4"
// console.log(obj);   //    {a:obj3 , b:obj2}

//==========================================================

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);  //not defined
// }
// getAge();

//===================================
// function getAge(...args) {
//     console.log(typeof args);  // object
// }
// getAge();

//========================================

// const shape = {
//     radius : 10,
//     diameter() {
//         return this.radius*2;
//     },
//     perimeter : () => this.radius*Math.PI*this.radius
// }
// console.log(shape.diameter(), "is the diameter"); //20
// console.log(shape.perimeter(),"Is the perimeter"); //  NaN , As this keyword inside an object will refer to the window object and not th eobject.


//=====================================================

// var a;
// function h() {
//     if(a) {
//         var a = 10;
//         console.log(a);
// }
//     }     
// h();

//=========================================================

// function greet() {
//     let a = 'hello';

//     // variable b cannot be used here
//     if(a == 'hello'){
//         // variable b can be used here
//         let b = 'world';
//         console.log(a + ' ' + b);
//     }

//      // variable b cannot be used here
//     console.log(a + ' ' + b); // error
// }
// // variable a cannot be used here

// greet();


//===========================================================

// var a = 2;
// for(let a = 0; a < 3; a++) {
//     console.log('hello');
// }
// console.log(a); // 3


//===========================================================

// let a = 2;
// for(let a = 0; a < 3; a++) {
//     console.log('hello');
// }
// console.log(a); // 2

//===================================================

// Array.prototype.last = function() {
    
//     var num=[] ;
//     if (this.length > 0) {
//         return this[this.length-1];
       
//     }else {
//         return -1;
//     }
// };

//   const arra =[null, {}, 3];
//   const arr = [];
//   console.log(arr.last()); 
//   console.log(arra.last()); //3


//=======================================================

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// console.log(arr2.push(arr3)); // returns the lengthof the whole array
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


//================================================

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));
 
//==============================================

// let arr = [ 
//     { name : 'a', status : 'p'},
//     { name : 'b', status : 'f'},
//     { name : 'c', status : 'p'},
//     { name : 'd', status : 'f'},
//     { name : 'e', status : 'p'}
//     ];
    
//     var arr2 = arr.filter(res => res.status =='p').map(res=>res.name);
//     console.log(arr2);


    //============================IFFE=========================

    //example=======

    // (function square(num){
    //     console.log(num*2);
    // })(5);



    // (function (x)  {
    //     return (function (y) {
    //         console.log(x);
    //     })(2);
    // })(1);
    

    //========================function Scope================

    // for(var i=0; i< 5 ;i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     }, i*1000)
    // }
    
//=============================hoisting ============================

// var x = 20;

// var fun = function() {
//     console.log(x);  // undefined as it searches in the local scope and there is no value as x while its hoisted 
//     var x = 21;
// }
// fun();  


// ==========================PARAMS VS ARGS==================================

// function multiply(...nums) {  //Params
//     console.log(nums)
// }

// var  arr = [5,6]

// multiply(...arr); //Args

// //ex-------

// const fn = (a, b, x,y, ...numbers) => {
//     console.log(x,y,numbers)
// };

// fn(2,3,4,5,6,7,8);


//=================CLOSURE================ 

// for(var i = 0 ; i< 3; i++) {
//     function inner(i) {
//         setTimeout(()=>{
//             console.log(i);    //using var only printing the diffrent diffrent i values 0,1,2 . shift it into a closure
//         },i*1000);
//     }
//    inner(i);
// };


//================counter using closure==================

// function counter () {
//     var _countter = 0;

//     function add(increment) {
//         _countter += increment;
//     }

//     function retrive() {
//        return "Counter "+ _countter;
//     }

//     return {add, retrive,}; 
// }

// const c = counter();
//  c.add(10);
//  c.add(5);

//  console.log(c.retrive());  


 //==========================implicit and explicit binding========================

//  var obj = {
//     name : "Satish",
//     display : function() {
//         console.log(this.name);
//     },
//  };

// var obj = {
//     name : "Satish",
//     display : () => {
//         console.log(this.name);  //// with arrow function it will show nothing, as here this refers to window object. and it has no "name"
//     },
//  };
//  var obj1 = {
//     name : 'ABC'
//  };


//  obj.display(); // Satish
//  obj.display.call(obj1); // ABC


//=============================================

// const month = ['Jan','April','May','June','July'];

// console.log(month.splice(0,2,'Feb','Mar'));
// console.log(month);

// console.log(month.slice(1,3))

//====================================================

// console.log([10]+[10]);

//===================================Frequency Sort=========================================

// const arr = [1, 1, 2, 2, 2, 3];
// const frequencySort = (arr = []) => {
//    let map = {};
//    for (let i = 0; i < arr.length; i++) {
//       map[arr[i]] = (map[arr[i]] || 0) + 1;
//    };
//    return arr.sort((a,b) => map[b] - map[a] || b - a);
// };
// frequencySort(arr);
// console.log(arr);


//=============================Print Duplicate only elements from the array==============================


// var array = [2,2,2,1,5,6,4,5,3];
// const uniqueSet = new Set(array);
// console.log(uniqueSet);
//       const filteredElements = array.filter(currentValue => {
//             if (uniqueSet.has(currentValue)) {
//                uniqueSet.delete(currentValue);
//             }
//             else {
//                return currentValue;
//             }
//          }
//       );
//       console.log(filteredElements);


      //======================================OR===========NOT Working but idea===========================


      // // indexOf() and filter()
      // var array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
      //  function findDuplicates(arr) {
      //    var aarFUnction = arr.filter((currentValue, currentIndex) =>
      //    arr.indexOf(currentValue) !== currentIndex);
      //    console.log(aarFUnction)
      // }
  

//==============================SET========================


//    var ages = [2,2,1,5,6,4,5,3];
//    var uArr = Array.from(new Set(ages));
// var newSet = new Set();
// console.log(newSet.add(uArr));



//===================================Filter and Map ===============================

// let users = [
//    {name:'Tina',age:24},
//    {name:'Dinesh',age:10},
//    {name:'Isha',age:23},
//    ];
   
//    var userAge = users.filter(res => res.age >= 20).map(res => res.name);
//    console.log(userAge);\



//============================Destructuring=================

// const person = {
//    name : 'Satish',
//    age : 27
// }

// const {name , age } = person;

// console.log(name , age);

//=================================================================
 

// console.log(x)
// var x = 1;

// console.log(x)
//  x = 1;


// let obj = { a: 1}
// obj.b = 2
// console.log(obj)


//============================Higher order function ======================

// const radius = [1,2,3,4];

// const area = function(radius) {
//     return Math.PI*radius*radius;
// };

// const calculateArea = function(radius, logic) {
//     const output = [];
//     for (var i = 0; i<radius.length ; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculateArea(radius, area));


//=================================================
// var obj = {
//     name : "Satish",
//     age : 27
// }

// for (key in obj) {
//     console.log(obj[key]);
// }


//================================// Create a method multiplybyTwo(obj) that multiplies all numeric property values of num by 2====================

   
// let nums = {
//     a: 100,
//     b: 200,
//     title: "my nums"
// }
// function multiplybyTwo(obj) {
//     for(key in obj) {
//         if(typeof(obj[key]) == 'number'){
//             obj[key] = obj[key]*2;
//         }
//     }
// }

// multiplybyTwo(nums);
// console.log(nums);



//===================================================

// const a = {}
// const b = {key : 'b'}    // object cannot be converterd into string   "object Object"
// const c = {key : 'c'}

// a[b] = 126;
// a[c] = 456;

// console.log(a[b]);    


//====================================

// console.log([..."Satish"]);

//==============================Nested destructuring over object    ========================================


// let user = {
//     name : "Satish",
//     age : 27,
//     fullName : {
//         first : "Satish",
//         last : "Nayak"
//     }
// }

// const {fullName : {first}} = user;
// console.log(first);


//===============================================

// for( let i = 1 ; i<=2 ; i++) {
//     setTimeout(function() {
//         console.log(i);
//     },100);
// }


//========================var let==============================

// function f1() {
//     if(true) {
//         console.log(a);
//         var a = 10;
//         console.log(a);
//     }
//     console.log(a);
// }
// f1();


//==================================rest parameters=============

const hello = (...rest) => {
    let total = 0;
    let output = [...rest].reduce((total, ele) => {
       return total += ele;
    });
    console.log(output); 
}

hello(1,2,3,4);   // n params     


// ================================remove dupilicate====================

const helllo = (...rest) => {
    let output = [];
    [...rest].forEach((el) => {
       if(!output.includes(el)) {
        output.push(el);
       }
    });
    console.log(output); 
}

helllo(1,2,5,2,1,4);


//=============================================================

let arr2 =[1,2,3,4,5,6];

let obj1 = {...arr2};
console.log(obj1);

//=================================================

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


//==================================================


// let age = "51";
// let validAge = "51";

// age = age+1;
// validAge++;

// console.log(age);
// console.log(validAge);

//=================================

// let arr = ["a","b","c","e","d","f","g","l","k"];

// console.log(arr[arr.length-2]);


//===============


const str = "Satish Kumar Nayak";

const obj = {};
for(let x of str) {
    if(obj[x]){
        obj[x]++;
    }
    else {
        obj[x]=1;
    }
}

console.log(obj);

//==========================================


let age = "51";
let validAge = "51";

age = age+1;
validAge++;

console.log(age);
console.log(validAge);


//========================

var object = {
  name : "Satish",
  age : 27
}

for (key in object) {
  console.log(object[key]);
}


//===========================================

function mul(a) {
  return function (b) {
      return function (c){
          return (a*b*c);
      }

  }
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));


//======================================

function b() {
  console.log(a);
}
var a = 10;
b();


//=========================================

var greeting = "Say hi";
if (true) {
    var greeting =" Say Hello instead"
    console.log(greeting);
}
console.log(greeting);

//===============================================

var arr12 = [1,2,3,4,5,6,7,8];
console.log(arr12.reduce(a,b),a+b)

//=======================================

var employeeDetailsoriginal = {name :"Satish", age : 25, profession: "Soft Dev"};
var employeeDetailDup = {...employeeDetailsoriginal};
employeeDetailDup.name = "NameChange";
console.log(employeeDetailDup);
console.log(employeeDetailsoriginal);

//====================================================

function addon(x){
  return function (y) {
        return x+y;
  }
}
console.log(addon(1));
console.log(addon(1)(3));

//===============Error-==================


// const arr1 = [3,4,0,5,1,2];
// const arr2 = [ 3,4,5 ];

// arr1 = [...arr1, ...arr2];
// console.log(arr1);


//=====================================================

let x = [1,2,3,5];

x.forEach(ele => {
  if(ele < 3 || ele === 5){
    console.log(ele);
  }
});

//=========================================================

var num = 56;

var arr = function() {
   console.log(num);
   var num = 45;
}
arr();