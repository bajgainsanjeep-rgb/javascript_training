
//prototype in js
const employee = {
    caltax(){
        console.log("tax is 10%");
    },

};

const ram={
    salary:100000,
}

ram.__proto__=employee;

//ram.caltax() gives tax is 10%



class car{

    constructor(){
        console.log("this is a constructor");
    }
    start(){
        console.log("car is started");
    }

    stop(){
        console.log("car is stopped");
    }

    setbrand(brand){
        this.brandname=brand;
    }
}

let fortuner= new car();
fortuner.setbrand("toyota");


//inheritance in js

class person{
    constructor(){
        console.log("this is a constructor");
    }
    name(){
    console.log("ram ");
    }
}
class child extends person{

    constructor(){
        super();
        console.log("this is a child constructor");
    }
    roll(){
        console.log(15);
    }
}
let obj= new child();