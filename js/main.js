
const name = prompt("What is your name?");
console.log(name);
const lastname = prompt("What is your last name?");
console.log(lastname);
const color = prompt("What's your favourite colour?");
console.log(color);
const number = prompt("What's your lucky number?");
console.log(number);

const password = name + lastname + color + number;

document.getElementById("psw").innerHTML = password;