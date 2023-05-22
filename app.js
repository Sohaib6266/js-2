
// ===Changing Case===

// let x = "Hello World!";
// x = x.toLowerCase();
// console.log(x); 

// let y = "Hello World!";
// y = y.toUpperCase();
// console.log(y); 


// let originalString = "Hello World!";
// let lowerCaseString = originalString.toLowerCase()

// let stringToUpperCase = "Hello World!";
// alert(stringToUpperCase.toUpperCase());

// let myArray = ["Apple", "Banana", "Orange"];
// let arrayElement = myArray[1]; // Accessing the second element of the array (index 1)
// let lowerCaseArrayElement = arrayElement.toLowerCase();


// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName); // Output: "Karachi"

// //======Strings====//

// var sameWords = "captain";
// var slicedString = sameWords.slice(2, 4);

// console.log(slicedString); // Output: "ap"

// var myString = "Hello World!";
// var characterCount = myString.length;

// console.log(characterCount); // Output: 12

// var animal = "elephant";
// var seg = animal.slice(2, 6);

// console.log(seg); // Output: "epha"

// var myString = "Hello World!";
// var characterCount = myString.length;
// var slicedString = myString.slice(1, characterCount - 3);

// console.log(characterCount); 
// console.log(slicedString); 

// var text = "To be or not to be.";
// var indx = text.indexOf("be");


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// var text = "Let it go, let it go";
// var lastIndexOfGo = text.lastIndexOf("go");
// var indx = text.indexOf("go", lastIndexOfGo);

// var myString = "Hello World!";
// var indexNum = 6;

// if (myString.charAt(indexNum)) {
//   // Segment at indexNum exists in the string
//   console.log("Segment exists at index " + indexNum);
// } else {
//   // Segment at indexNum does not exist in the string
//   console.log("Segment does not exist at index " + indexNum);
// }


// var str = "abcde";
// var character = str.charAt(2);

// console.log(character); // Output: "c"

// var text = "Hello World!";
// var cha = text.charAt(9);

// console.log(cha); // Output: "r"

// var str = "Hello World!";
// var x = str.charAt(str.length - 1);

// console.log(x); // Output: "!"

// var input = "Hello World!";
// var cha = input.charAt(4);

// console.log(cha); 

// var myString = "Hello";
// var specificCharacter = "l";

// if (myString.charAt(2) === specificCharacter) {
  
//   console.log("The 3rd character is " + specificCharacter);
// } else {
//   console.log("The 3rd character is not " + specificCharacter);
// }

// var myString = "Hello";
// var charArray = [];

// for (var i = 0; i < myString.length; i++) {
//   charArray[i] = myString.charAt(i);
// }

// console.log(charArray); 

// var reply = "no, I don't think so. It's a no from me.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply); 

// var reply = "no, I don't think so. It's a no from me.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);

// ====Rounding Number=====
// var num = 3.7;
// var roundedNum = Math.round(num);

// console.log(roundedNum); 

// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);

// console.log(roundNum); 


// var origNum = 3.9;
// var roundNum = Math.floor(origNum);

// console.log(roundNum); 


// var num = 2.5;
// var roundedNum = Math.round(num);

// console.log(roundedNum); 


// var num = 0.5;
// var roundedNum = Math.floor(num);

// console.log(roundedNum); 

// =========Random Numbers==========


// var str = "42";
// var num = parseInt(str);

// console.log(num); 

// function convertStringToInteger(str) {
//   return parseInt(str);
// }

// var result = convertStringToInteger("123");
// console.log(result); 

// var str = "3.14";
// var floatNum = parseFloat(str);

// console.log(floatNum); 

// var str = "42";

// if (!isNaN(str)) {
//   // Conversion is possible
//   var num = parseInt(str);
//   console.log(num);
// } else {
//   // Conversion is not possible
//   console.log("Invalid number");
// }


// var num = 42;
// var str = num.toString();

// console.log(str); 

// =============Date Methods=========

// var dObj = new Date();

// var d = new Date();
// var dStr = d.toString();

// var d = new Date();
// var day = d.getDay();


// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date();
// var day = d.getDay();

// alert(dayNames[day]);

// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();

// var later = new Date(2020, 11, 0);

// var referenceDate = new Date(0);  Beginning of 1970
// var startDate = new Date(1980, 0, 1);  Beginning of 1980

// var millisecondsElapsed = startDate.getTime() - referenceDate.getTime();
// alert(millisecondsElapsed);

// function calculateAge(birthDate) {
//   var currentDate = new Date();
  
//   var birthYear = birthDate.getFullYear();
//   var birthMonth = birthDate.getMonth();
//   var birthDay = birthDate.getDate();
  
//   var currentYear = currentDate.getFullYear();
//   var currentMonth = currentDate.getMonth();
//   var currentDay = currentDate.getDate();
  
//   var age = currentYear - birthYear;
  
//   // Check if the current date is before the birth date
//   if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//     age--;
//   }
  
//   return age;
// }


// var birthDate = new Date(1990, 4, 15);  May 15, 1990
// var age = calculateAge(birthDate);
// console.log(age); 

// ======= (Functions) ==========


// function displayAlert() {
//   // Code goes here
// }

// function askName() {
//   var userName = prompt("Enter name");
//   // Code goes here
// }

// function mainFunction() {
//   // Call function 1
//   functionName1();

//   // Call function 2
//   functionName2();

//   // Code goes here
// }

// function displayAndAlertName() {
//   var name = prompt("Enter name");
//   alert("Your name is: " + name);
// }
// displayAndAlertName();


// function concat(a, b, c) {
//   // Code goes here
// }

// concat("a", "b", "c");

// function multiplyAndAssign(a, b, c) {
//   var result = a * b * c;
//   return result;
// }

// var multipliedValue = multiplyAndAssign(2, 3, 4);
// console.log(multipliedValue); 

// function calculateAverage(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   var average = sum / numbers.length;
//   return average;
// }

// var numbers = [2, 4, 6, 8, 10];
// var average = calculateAverage(numbers);
// console.log(average);  

// function calculateSum(a, b) {
//   var sum = a + b;
//   return sum;
// }

// var result = calculateSum(3, 4);
// console.log(result); 

//  //===(Local vs. Global Variables) ====//

// function demonstrateLocalVariable() {
//   var localVar = "This is a local variable.";
//   console.log(localVar);
// }

// demonstrateLocalVariable(); 

// var globalVar = "This is a global variable.";

// function accessGlobalVariable() {
  
//   console.log(globalVar);
// }

// accessGlobalVariable(); 

// =======(Switch Statements)=======

// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("It's an apple.");
//     break;
//   case "banana":
//     console.log("It's a banana.");
//     break;
//   case "orange":
//     console.log("It's an orange.");
//     break;
//   default:
//     console.log("It's an unknown fruit.");
// }

// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "London":
//     alert("You entered London.");
//     break;
//   case "Paris":
//     alert("You entered Paris.");
//     break;
//   case "Tokyo":
//     alert("You entered Tokyo.");
//     break;
//   default:
//     alert("City not recognized.");
// }

// ======= THE END ======