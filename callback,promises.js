console.log("one");
function hello() {
    console.log("hello");
};
setTimeout(hello, 1000);
console.log("two");



//nesting
let age = 19;
if (age >= 18) {
    if (age >= 21) {
        console.log("you can drink");
    }
    else {
        console.log("you cant drink");
    }
} else {
    console.log("you can  only eat");
}



//callback hell
// function getdata(dataid, getnewdata) {
//     setTimeout(() => {
//         console.log("data", dataid);
//         if (getnewdata) {
//             getnewdata();
//         }
//     }, 2000)
// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3)
//     })
// });



//promise

function getdata(dataid, getnewdata) {
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            console.log("data", dataid);
            resolve("success");
            if (getnewdata) {
                getnewdata();
            }
        }, 3000)
    });
};
