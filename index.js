let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

if (strings[0].includes (",") || strings[0].includes(";") || strings[0].includes(" ")) {
  console.log("Proto1 does");
}
if (strings[1].includes (",") || strings[1].includes(";") || strings[1].includes(" ")) {
  console.log("Proto2 does");
}
if (strings[2].includes (",") || strings[2].includes(";") || strings[2].includes(" ")) {
  console.log("Proto3 does");
}
if (strings[3].includes (",") || strings[3].includes(";") || strings[3].includes(" ")) {
  console.log("Proto4 does");
}

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if (strings[0].includes (",")) {
  let newString1 = strings[0].split(",").reverse().join(",");
  console.log(newString1);
}
if (strings[1].includes (",")) {
  let newString1 = strings[1].split(",").reverse().join(",");
  console.log(newString1);
 
}
if (strings[2].includes (",")) {
  let newString1 = strings[2].split(",").reverse().join(",");
  console.log(newString1);
}
if (strings[3].includes (",")) {
  let newString1 = strings[3].split(",").reverse().join(",");
  console.log(newString1);
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

if (strings[0].includes (";")) {
  let joinedString = strings[0].split(";").sort().join(",");
  console.log(joinedString);
}
if (strings[1].includes (";")) {
  let joinedString = strings[1].split(";").sort().join(",");
  console.log(joinedString);
 
}
if (strings[2].includes (";")) {
  let joinedString = strings[2].split(";").sort().join(",");
  console.log(joinedString);
}
if (strings[3].includes (";")) {
  let joinedString = strings[3].split(";").sort().join(",");
  console.log(joinedString);
}

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

if (strings[0].includes (" ")) {
  let joinedString = strings[0].split(" ").sort().reverse().join(" ");
  console.log(joinedString);
}
if (strings[1].includes (" ")) {
  let joinedString = strings[1].split(" ").sort().reverse().join(" ");
  console.log(joinedString);
 
}
if (strings[2].includes (" ")) {
  let joinedString = strings[2].split(" ").sort().reverse().join(" ");
  console.log(joinedString);
}
if (strings[3].includes (" ")) {
  let joinedString = strings[3].split(" ").sort().reverse().join(" ");
  console.log(joinedString);
}

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (strings[0].includes (", ")) {
  let newString1 = strings[0].split(", ").reverse().join(",").trim();
  console.log(newString1);
}
if (strings[1].includes (", ")) {
  let newString1 = strings[1].split(", ").reverse().join(",").trim();
  console.log(newString1);
 
}
if (strings[2].includes (", ")) {
  let newString1 = strings[2].split(", ").reverse().join(",").trim();
  console.log(newString1);
}
if (strings[3].includes (", ")) {
  let newString1 = strings[3].split(", ").reverse().join(",").trim();
  console.log(newString1);
}