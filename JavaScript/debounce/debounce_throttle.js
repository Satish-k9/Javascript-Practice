const btn = document.querySelector(".increment_btn");
const btnpressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedcount = 0;
var triggredcount = 0;

// const debounceCount = _.debounce(()=>{
//     count.innerHTML = ++triggredcount;
// },500);

// btn.addEventListener('click', () => {
//     btnpressed.innerHTML = ++pressedcount;
//     debounceCount();
   
// });



//==============================throttling=======================================

const throttleCount = _.throttle(()=>{
    count.innerHTML = ++triggredcount;
},1000);

btn.addEventListener('click', () => {
    btnpressed.innerHTML = ++pressedcount;
    throttleCount();
   
});



