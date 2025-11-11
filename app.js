// app.js
require("dotenv").config();

function greetUser(name) {
  return `Hello ${name}, your env secret is ${process.env.SECRET_KEY}`;
}

console.log(greetUser("Walker"));
