// DOM Events
// Mouse Events
//click
const boxOne = document.querySelector("#box1");
function alertBtn() {
  alert("You clicked Box 1.");
}
// boxOne.addEventListener("click", alertBtn);
boxOne.addEventListener("click", alertBtn);

// //dblclick
const boxTwo = document.querySelector("#box2");
function alertBtn2() {
  alert("You double clicked Box 2.");
}
boxTwo.addEventListener("dblclick", alertBtn2);

const boxThree = document.querySelector("#box3");
function alertBtn3() {
  alert("You moved your mouse in Box 3.");
}
boxThree.addEventListener("mouseover", alertBtn3);

const boxFour = document.querySelector("#box4");
function alertBtn4() {
  alert("You moved out of the Box 4.");
}
boxFour.addEventListener("mouseout", alertBtn4);

const boxFive = document.querySelector("#box5");
function alertBtn5() {
  alert("You moved your mouse in Box 5.");
}
boxFive.addEventListener("mousemover", alertBtn5);


// }