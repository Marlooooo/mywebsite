
const helloTextContainer = document.getElementById("helloText");
const imTextContainer = document.getElementById("imText");
const nameContainer = document.getElementById("name");
const itCourseContainer = document.getElementById("itCourse");
const frontEndTextContainer = document.getElementById("frontEndText");

const helloText = "Hello!";
const imText = "I'm";
const myName = "Marlo Navarro";
const itCourse = "Information Technology Student";
const frontEndText = "Frontend Developer";
const backEndText = "Backend Developer";

var i = 0;
var j = 0;

function TypingAnimation (){
    helloTextContainer.textContent = helloText.substring (0, i); 
    if (i < helloText.length) { i++
        setTimeout(TypingAnimation, 100)   
    } else {
        i = 0;
        setTimeout(imTypingAnimation, 100);
    }
}

function imTypingAnimation(){
    imTextContainer.textContent = imText.substring(0, i);
    if (i < imText.length) {
        i++;
        setTimeout(imTypingAnimation, 100);
    } else {
        i = 0;
    setTimeout(nameTypingAnimation, 100); 
  }
}

function nameTypingAnimation(){
    nameContainer.textContent = myName.substring(0, i);
    if (i < myName.length) {
        i++;
        setTimeout(nameTypingAnimation, 100);
    } else {
        i = 0;
        setTimeout (courseTypingAnimation, 100)
    }
}

function courseTypingAnimation(){
    itCourseContainer.textContent = itCourse.substring(0, i);
    if (i <itCourse.length){
        i++;
        setTimeout(courseTypingAnimation, 100)
    } else {
        i = 0;
        setTimeout (frontEndTextTypingAnimation,100)
    }
}

function frontEndTextTypingAnimation(){
    frontEndTextContainer.textContent =  frontEndText.substring(0,i);
    if(i < frontEndText.length){ 
        i++;
        setTimeout(frontEndTextTypingAnimation,100)
    } else{
        setTimeout(frontEndTextTypingDeletion,100)
    }
}
function frontEndTextTypingDeletion (){
    if(i > j){
        i--;
        frontEndTextContainer.textContent = frontEndText.substring(j,i) 
        setTimeout(frontEndTextTypingDeletion,100)
    }   else {
        setTimeout (backEndTextTypingAnimation,100)
    }
}

function backEndTextTypingAnimation(){
    frontEndTextContainer.textContent = backEndText.substring(0,i);
    if (i <backEndText.length){
        i++;
        setTimeout(backEndTextTypingAnimation,100)
    } else {
        setTimeout(backEndTextTypingDeletion,100)
    }
}
function backEndTextTypingDeletion () {
    if (i > j){
        i--;
        frontEndTextContainer.textContent = backEndText.substring(j,i);
        setTimeout(backEndTextTypingDeletion,100)
    } else {
        setTimeout(frontEndTextTypingAnimation,100)
    }
}


TypingAnimation();
