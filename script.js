let a = 5;
let b = 10;
console.log("a+b=",a + b);
console.log("a-b=",a - b);
console.log("a*b=",a * b);
console.log("a/b=",a / b);
console.log("a%b=",a % b);
console.log("a**b=",a ** b);
a++;
console.log("a++ =",a);


if(b > 5){
    console.log("red ");
}
else{
    console.log("blue");

}
 summ=0;
for(let i = 0; i < b; i++){
    summ=summ+i;
    console.log(summ);
}


let student={
    name : "Ram",
    roll : 15,
    address : "Kathmandu"



}
for (let key in student){
    console.log(key, student[key]);
}

console.log(`the roll number of ${student.name} is ${student.roll}`)



let num =[1,2,3,4,5 ];
console.log(num[0]);
console.log(num[1]);

for(let i = 0; i < num.length; i++){
    console.log(num[i]);
};

num.push(6);
num.push(7);
console.log(num);
let deleted = num.pop();
console.log("deleteed",deleted);
console.log(num.slice(2,4));

let num2=[8,9,10];
console.log(num.concat(num2));
num.splice(2,1,100);


function ohyeah(){
    console.log("hey this is a function");
};
ohyeah();

function add(x,y){
    console.log(x+y);

}
add(5,6);


const sum=(p,q)=>{
   console.log( p+q);
} 
sum(5,6);

//callback function
arr=[1,2,3,4,5];
// arr.foreach((i)=>{
//  console.log(i);   
// }
// )



let nums=[6,7,8,9,10];
let newarr = nums.map((i)=>{
    console.log( i);
});
console.log(newarr);

let evenarr= nums.filter((i)=>{
    return i%2==0;
})
console.log(evenarr);

const output= arr.reduce((prev,cur)=>{
    return prev+cur;
})
console.log(output);

window.console.log("hello");


console.dir(document.body);

let heading = document.getElementById("heading");
console.dir(heading);


let headings= document.getElementsByClassName("head1class");
console.dir(headings);
console.log(headings);

let buttons= document.getElementsByTagName("button");
console.dir(buttons);

let elements= document.querySelector("p");
console.dir(elements);

let div=document.querySelector("div");
console.log(div.getAttribute("id"));
let box= document.getElementById("box")
console.dir(box);

let name= div.getAttribute("name");
console.log(name);


div.style.backgroundColor="red";


let newbtn= document.createElement("button");
newbtn.innerText="new button";
box.after(newbtn);


let btn1=document.querySelector("#btn1");

btn1.onclick=(evt)=>{
    console.log("button clicked");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
}

btn1.addEventListener("click",()=>{
    console.log("button clicked-event handler");
})
const handler2= btn1.addEventListener("click",()=>{
    console.log("button clicked-event handler2");
})
btn1.removeEventListener("click",handler2);



let test=document.querySelector(".test");
test.onmouseover=()=>{
    console.log("mouse over");
}


let modebtn= document.querySelector("#mode");
let currmode="light";
modebtn.onclick=()=>{
    if(currmode=="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
   console.log(currmode); 
};







