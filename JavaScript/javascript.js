
// var obj1 = {
//     address : 'Mumbai, India', getAddress : function() {
//         console.log(this.address);
//     }
// }
// var getAddress = obj1.getAddress;
// var obj2 = {
//     name:"akshay",
// }
//  var obj3 = obj2.getAddress();
//  console.log(obj3);

///.................................................................

// const number = [1,2,3,4,5];
// for( var i = 0; i< number[1];i++) {
//     setTimeout(function() {
//         console.log(number[i],);   // the loop runs for 2 times and the second time loop is comparing 2 with  num[1] i.e 2] . hence num[i=2] o/p is 3
//     }, 3000);
// }


///...........................................................................

// const cars = ["1", "2", "3", "4", "5", "6"];
// let text = "";
// for (let i = 0; i < cars[3]; i++) {
//   text += cars[i] + "<br>";
// }
// console.log(text);


//...........................................

// console.log ([]==[], []===[]);

//.......................................

// var abc = {"a1":1,"a2" : 2, "an": 456 }
// console.log(abc);
// var object = new Object();
// console.log(Object.keys(abc).length);


//===============================================================================================

// function UserAction() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              alert(this.responseText);
//          }
//     };
//     xhttp.open("POST", "Your Rest URL Here", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send("Your JSON Data Here");
// }



// function UserAction() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(result){
//         if(this.readyState == 4 && this.status == 200) {
//            console.log(JSON.parse(this.responseText));
//         }
//     };
//     xhttp.open("GET", "https://reqres.in/api/users?page=2" , true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send("this is your json value");
// }
// UserAction();

//===============jquery ajax===========================

// $.ajax({
//     url: "hhttps://reqres.in/api/users?page=2",
//     type: "GET",
//     success: function (data) {
//       console.log(data);
//     }
//   });

//==================================================================================


// var x = function () {
//     console.log("Hello World");
//     return;
//   };
//   x = "hello, I am a new value!";
//   console.log(x);

//=====================================================================================

// function chickenWithsideItem(sidedish) {
//     sidedish =sidedish || "whatever";
//         console.log("Chicken with "+ sidedish);

// }
// chickenWithsideItem("biryani");
// chickenWithsideItem();

//==================================================================================

// var a = [1,2,3,4,5,6]
// var index = a.indexOf(3);
// console.log(index);

//===========================================objecct creation : using new OBJECT() syntax ...........................................

// var company = new Object();
// company.name = "META";
// console.log(company);

// company.ceo = new Object();
// company.ceo.fullName = "Satish K Nayak";
// console.log(company);

// company["stock of company"] = "110";
// console.log("stock price is =" + company["stock of company"]);

// var stockPropname = ["stock of company"];
// console.log("stock price is =" + company[stockPropname]);


//======================================Better way object creation : OBject literal................................................................................

// var company = {
//     name: "facebook",
//     ceo : {
//         firstName: "Satish",
//         favColor: "Blue"
//     },
//     ["stock of company"]: 110
// };
// console.log(company.name);
// console.log(company.ceo.firstName + " is the name and "+ company.ceo.favColor + " is the fav Color");
// console.log(company);


//==========================in javascript function is an object and functions are first class data types================

// function multiply(x, y) {
//     return x*y;
// }
// console.log(multiply(5,3));
// console.log(multiply);
// multiply.version = "v.0.1.2";
// console.log(multiply.version);


// function makeMultiplier(multiplier){
//     var myFunc = function(x) {
//         return multiplier*x;
//     }
//     return myFunc;
// }

// var multiplyby3 = makeMultiplier(3);
// console.log(multiplyby3(5));

//============================================= passsing fuctionas arguments =====================================

// function doOperation(x, operation){
//     return operation(x);
// }

// var res = doOperation(5, multiplyby3);
// console.log(res);

//......................................................................


// function makeMultiplier(multiplier) {
//     var myFunFunc = function (x) {
//       return multiplier * x;
//     };
    
//     return myFunFunc;
//   };
  
//   var operation = makeMultiplier(10);
//   console.log(operation(10));



  //=================Pass by referenc =====================   (Pass by value can be applied on primitive data types only)

//   var a = {x:7};
//   var b = a;
//   console.log("a =", a);
//   console.log("b =", b);
//   console.log("b after update");
//   b.x = 5;
//   console.log("a =", a);
//   console.log("b =", b);


//==========================================

// var x = 5;
// var y = x;
// x = 10;
// console.log(y);  /// op is 10



//================== function prototype===================

// function Circle(radius) {
//         this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//     return Math.PI* Math.pow(this.radius,2);
// }

// var circle = new Circle(10);
// console.log(circle.getArea());
// console.log(circle);


// ==============literal prototype=====================================

// var literalObject = {
//     radius : 10,

//     getArea : function() {
//         var self = this;
//         console.log(this);

//         var increaseArea = function() {
//             self.radius = 20;
//         };
//         increaseArea();
//         console.log(this.radius);

//         return Math.PI* Math.pow(this.radius,2);
//     },
// };
// console.log(literalObject.getArea());


//-------------------------------

// function UserAction() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if(this.readyState == 4 && this.status == 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   }
//   xhttp.open("GET", 'https://reqres.in/api/users?page=2' , true);
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.send("This is the response Json");
// }


//===============================

// function UserAction() {
//   fetch('https://reqres.in/api/users/2').then(response => return response.json())
//   .then(data => {
//     console.log(data);
//   })
// }

//====================jQUERY=================

// $(document).ready(function(){
//   $.ajax({
//     url : 'https://reqres.in/api/users/2',
//     type : 'GET',
//     success : function(result) {
//       console.log(result)
//     },
//     error : function(error) {
//       console.log (error);
//     }
//   })
// })


//============Finding out the unique element in an arry============



// function x() {
//   var sel = ['a','d','e','e','e','f','r','r','b'];
//  console.log(sel.indexOf('e'));
//  console.log(sel.lastIndexOf('e'));

//  if (sel.indexOf('e') === sel.lastIndexOf('e')) {
//   console.log("Is unique");
//  } else {
//      console.log(" Its not Unique");
//  }
// };
// x()

//========================button in html file for printing odd numner===========================


// function Submit() {
//   var fetch = document.getElementById("oddNum").value;
//   console.log(fetch);
//   for (var i=1; i <= fetch ; i++) {
//    if(i % 2 == 1) {
//     console.log(i);
//    }
//   }
// };


//=====================String to integer ===============================

// var str = "28"
// var int = parseInt(str)
// console.log(int);



//================object creation =============

// var obj = {
//   name : "Sat",
//   age : 28
// }
// console.log(obj);

// var obje = new Object();
// obje.name = 'Satish'
// obje.age = 65;

// console.log(obje);


//======================array creation======================


// var arr = [1,2,3,4,5];
// console.log(arr);

//======================This keyword======and CALL() and Apply()===========================

// const person1 = {
//   fullName : function() {
//     return this.firstName +" "+ this.lastName;
//   }
// }

// const person2 = {
//   firstName : " Satish",
//   lastName : "Nayak"
// }

// console.log(person1.fullName.apply(person2));
// console.log(person1.fullName.call(person2));

//==============================BIND()========================

// const person3 = {
//   fName : "Satish",
//   sName : " Nayak",
//   fullN : function() {
//     return this.fName +" " + this.sName;
//   }
// };

// const person4 = {
//   fName : "Sabya",
//   sName : " Das"
// };

// console.log(person3.fullN.bind(person4));

//==============================Calling one page from another page=====================================

// function Click() {
//   window.location.href = "./index2.html"

// }


//====================   MAP Polyfill ==================

// let myArr = [1,2,3,4,5,6,7,8,9,10];

// let squareMap = myArr.map(function (x) {
//     return x*x;
// });

// console.log(myArr);
// console.log(squareMap);

// Custom Map polyfill

// function mypolyfillMap(arr, cb){
//     let newArr = [];
//     for (let i = 0; i< myArr.length; i++){
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// function square(x) {
//     return x*x;
// }

// console.log(mypolyfillMap(myArr,square));

// =================================filter Polyfill========================== 

// let myArr = [1,2,3,4,5,6,7,8,9,10];
// let numb = myArr.filter(res => res >= 5);

// console.log(numb);


// //Custom polyfills

// function myFilter(arr, cb){
//     let filteredArr = [];
//     for(let i = 0; i< arr.length;i++){
//         if(cb([arr[i]])){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// function newArr(y) {
//     if(y >= 5) {
//         return y;
//     }
// }

// console.log(myFilter(myArr, newArr));


//============================== reduce ===========================

// let myArr = [1,2,3,4,5,6,7,8,9,10];

// let reducedVAl = myArr.reduce((acc, ind) => {
//   acc += ind;
// },0);

// console.log(reducedVAl);


//================================== count of the charecters===============================

// const str = "Satish Kumar Nayak";

// const obj = {};
// for(let x of str) {
//     if(obj[x]){
//         obj[x]++;
//     }
//     else {
//         obj[x]=1;
//     }
// }

// console.log(obj);


