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

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log("data", dataid);
            resolve("success");
            if (getnewdata) {
                getnewdata();
            }
        }, 3000)
    });
};

const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is a promise");
        resolve("success");
        // reject("error");
    })

}
let promise = getpromise();
promise.then((res) => {
    console.log("promise resolved", res);
})
promise.catch((err) => {
    console.log("promise rejected", err);
})





const asyncfunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000)
    })
}

console.log("fetching data1");
let p1 = asyncfunction();
p1.then((res) => {
    console.log(res);
})



//promise chain
function getdata(dataid) {
    return new Promise((resolve, reject) => {
        
    
    setTimeout(() => {
        console.log("wow", dataid);
        resolve("success")
      
    }, 2000)
})
}

getdata(1).then((res) => {
    return getdata(2);
}).then((res) => {
    console.log(res);
})


//async await
function getdata(dataid) {
    return new Promise((resolve, reject) => {
        
    
    setTimeout(() => {
        console.log("wow", dataid);
        resolve("success")
      
    }, 2000)
})
}
async function getdataasync() {
    await getdata(1);
    await getdata(2);
}

//IIFE   automatically call the function
(async function getdataasync() {
    await getdata(1);
    await getdata(2);
})();