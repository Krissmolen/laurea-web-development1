//tehtävä 2
const name = "Kristina";
let age = 22;
const favanimal = "Muurahainen";

console.log(name);
console.log(age);
console.log(favanimal);

console.log("Hi! my name is "+name+ " i am "+age+" years old and my favourite animal is "+favanimal+".")

//tehtävä 3
const name1 = prompt("What is your name?")

console.log("Hi " + name1 + "! Welcome to JavaScript!")

//tehtävä 4
let age1 = prompt("How old are you?");

if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18");
}


//tehtävä5

function greetUser(name3) {
    console.log("Hello " + name3 +"!");

}

greetUser ("Kristina")
greetUser ("Juho")

//twhtävä 6
function showMessage() {
    alert("Sain tehtävät valmiiksi!");
}