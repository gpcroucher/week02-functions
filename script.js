function add3(num1, num2, num3) {
  return num1 + num2 + num3;
}

function greet(name = "Obi-Wan Kenobi") {
  console.log(`Hello there, ${name}!`);
}

function goodbye(language = "English") {
  if (language === "English") {
    console.log("Goodbye!");
  } else if (language === "French") {
    console.log("Au revoir!");
  } else if (language === "Spanish") {
    console.log("Adios!");
  } else {
    console.log("I don't know that language, sorry.");
  }
}
