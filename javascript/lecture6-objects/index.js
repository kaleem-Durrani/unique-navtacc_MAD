// // let myObject = {
// //   email: "John@gmail.com",
// //   name: "John",
// //   job: "Developer",
// //   age: 57,
// //   favouriteMovies: ["a", "b", 1, 2, 3],
// //   isStudent: false,
// //   adress: {
// //     street: "123",
// //     country: "xyz",
// //   },
// // };

// // console.log(myObject.name);
// // console.log(myObject.email);
// // console.log(myObject.job);
// // console.log(myObject.age);

// // console.log("-------------------");

// // let key;

// // console.log(myObject[key]);

// // console.log(myObject[key]);

// // console.log(myObject);

// // console.log(myObject);

// // // console.log(myObject.email);

// // // myObject.email = "john@yahoo.com";

// // // console.log(myObject);

// // console.log(myObject["email"]);

// // myObject["email"] = "john@yahoo2.com";
// // console.log(myObject);

// // let key = "aasdfasdf";

// // console.log(myObject[key]);

// let myString = "Abcd";

// // legnth gives us the legnth of the string
// console.log(myString.length);

// // at method gives us the character at that index
// console.log(myString.at(0));

// // uppercase changes a string or character to uppercase
// console.log("abc".toUpperCase());

// // lowercase changes a string or character to lowercase
// console.log("XYZ".toLowerCase());

// // concat makes one single srtring out of one or a group of strings
// console.log(myString.concat("efg", "asdfasdff", "asdfasdf", 1232));

// // endsWith checks if the last characters of a string match
// console.log(myString.endsWith("bcd"));

// checks if a search string exists atleast one time
// console.log(myString.includes(""));

// myString = "0123456789";

// // slices a string into a substring
// console.log(myString.slice(0, 2));

let myString = "a quick brown fox jumps over a lazy dog a";



// console.log(myString.lastIndexOf("a"));

// console.log(myString.trimEnd());

let specialCharacters = ["!", "@", "$"];

let includesSpecialCharacter = false;

for (let i = 0; i < specialCharacters.length; i += 1) {
  for (let j = 0; j < myString.length; j += 1) {
    console.log("comparing", specialCharacters[i], " with ", myString.at(j));
    if (specialCharacters[i] === myString.at(j)) {
      includesSpecialCharacter = true;
      break;
    }
  }
}
