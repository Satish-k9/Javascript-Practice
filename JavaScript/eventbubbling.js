// Event bubbling

const div = document.querySelector('.div');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

// div.addEventListener('click', func);
// form.addEventListener('click', func);
// btn.addEventListener('click', func);

// function func(event) {
//     alert("current Target = " + event.currentTarget.tagName +  
//     "   target = "+ event.target.tagName +
//     "  this = " + this.tagName)
// }


// event capturing---------------------


// btn.addEventListener('click', function() {
//     alert("this is the the button")
// },
//     {
//         capture : true
//     }
// );

// div.addEventListener('click', function() {
//     alert("this is the the div")
// },
//     {
//         capture : true
//     }
// );

// form.addEventListener('click', function() {
//     alert("this is the the form")
// },
//     {
//         capture : true
//     }
// );



// event delegation

document.querySelector('.products').addEventListener('click', function(event) {
    // console.log(event.target.closest("SPAN"));
    if(event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }

}); 