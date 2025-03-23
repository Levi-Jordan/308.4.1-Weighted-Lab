// Variables
// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ',') {
//     // if char is a comma, do this
//     commas++;
//   } else if (str[i] === '\n') {
//     //If char is a "\n", do this\
//     console.log(cell1, cell2, cell3, cell4);
//     commas = 0;
//     cell1 = ``;
//     cell2 = ``;
//     cell3 = ``;
//     cell4 = ``;

//   } else {
//     // any other char
//     if (commas == 0) {
//       // if 0 commas
//       cell1 += str[i];
//     } else if (commas == 1) {
//       // if 1 commas
//       cell2 += str[i];
//     } else if (commas == 2) {
//       // if 2 commas
//       cell3 += str[i];
//     } else {
//       // if 3 or more
//       cell4 += str[i];
//     }
//   }

//   if(i === str.length - 1) { // if index number is the same as length of string
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

str = str.split(`\n`)

let arr = []

for (i=0; i<str.length; i++){

  let temp = str[i].split(`,`);
  arr.push(temp);
}

console.log (arr)