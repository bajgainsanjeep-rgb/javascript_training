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
sum=0
for(let i = 0; i < b; i++){
    sum=sum+i;
    console.log(sum);
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







