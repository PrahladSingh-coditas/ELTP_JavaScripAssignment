/*
Theme: The below program is created with refernce to Employee realated Data a comapany.
*/

//1. Declare four variables without assigning values
let joiningDate;
let employeeSalary;
let employeeSeatNumber;
let employeeAssetID;
//Note: We can't use const because it has to be assigned some data at the same line and var is depricated.


//2.Declare four variables with assigned values

const employeeID = 8966;
const employeeAccount = 'XXXX9078';
let employeeDomain = "DevOps";
var employeeBuddy = "XYZ";  //Not recommended to use var 

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName;
let lastName;
let maritalStatus;
let country;
let age;
//Note: We can't use const as we need to to assign value at the same line.
//Note: var allows redeclaration of variables. We cant redeclare a let or const variable.


//4. Declare variables to store your father name, mother name, and fatherAge in a single line

var fatherName, motherName, fatherAge;
//Note: Redecalaration is not allowed in let and const.


//5. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
const myAge = 21;
const yourAge = 22;

console.log("My age: "+myAge);
console.log("Your Age: "+ yourAge);
