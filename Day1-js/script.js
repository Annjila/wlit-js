//let x=15;
//console.log(x);
//console.log(typeof(x));

//console.log(typeof typeof(x));

//let y=true
//console.log(y)
//console.log(typeof(y));

//let a=null
//console.log(a);
//console.log(b);

//learn about scope and hoisting 

//let x=75;
//console.log(x>54 ? "A" : "B"); //ternary operator

//let y=50;
//console.log(y>54 ? "A" : "B");

/*let grade=10;
if (grade>=90){
    console.log("Grade A");
}
else if (grade>=70){

    console.log("Grade B");
}
else if (grade>=50){
    console.log("Pass");
}
else if (grade<50){
    console.log("Fail");
}
*/

/*let x=2
switch(x){
    case(1):
    console.log("Printed 1");
    break;
     case(2):
    console.log("Printed 2");
    break;
     case(3):
    console.log("Printed 3");
    break;
     case(4):
    console.log("Printed 4");
    break;
     case(5):
    console.log("Printed 5");
    default:
        console.log("number not found")
    break;

} */

/* function doSomething(){
    console.log("this function does something");
}
doSomething();
*/

/* function multiply(x,y)
{
    return x*y;
}
console.log(multiply(4,5))

*/

//Arrow functions
//used for shorter syntax
var doSomething=() => {console.log("This function does something")}

//accepts no as parameter and check positive and negative

function check(num){
    if (num>=0)
    {
        return "Positive"
    }
    else{
        return "Negative"
    }
}
console.log(check(-3))


//find larest num through arrow function
/*x=[4,5,6,78,50];
let a=x[0];

var largest=(x) => {  
    for (i=0;i< x.length;i++ ){ //mistake was forgetting let
    if (x[i]>a)
    {
        a=x[i];
    }
    }
    console.log(a);


};


largest();*/



/*let x = [4, 5, 6, 78, 50];
let a = x[0];

var largest = (x) => {
    for (let i = 0; i < x.length; i++) {
        if (x[i] > a) {
            a = x[i];
        }
    }
    console.log(a);
};

largest(x);
*/

//read spreadsheet

//object
let person={

    name: "Anjila",
    address: "Lalitpur",
    isStudent: true,

};
console.log(person);

person.age="20";
console.log(person);

//find area of square and rectangle
let properties={
    length:5,
    breadth:2,
    area: function(){
        if (this.length==this.breadth)
        return this.length*this.length;

        else
        return this.length*this.breadth;
    }

};
console.log(properties.area())



