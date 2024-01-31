//1. Create a file and declare variables and assign string, boolean, undefined and null data types.


//Strings Datatype
const internFirstName  = "Prahlad";
const internLastName = "Singh";

//Boolean Datatype
const checkIn = true;
const checkOut = false;

//Undefined Datatype
const randomNumber = undefined;

//Null datatype
const defaultValue = null;



//2. Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

//Primitive Datatype:
const employeeName = "Sanket";  //String
const employeeAge = 27;         //Number (Integer)
const employeeSalary = 600000.25;  //Number  (float)
const employeeActive = true;        //Boolean
const employeeMaritalStatus = undefined;  //Undefined
const employeeData = null;             //Null
const employee1UniqueID = Symbol("Employee 1");    //Symbol
const employee2UniqueID = Symbol("Employee 2");     //Symbol
const employeeActiveMinutes = 5632898989n;      //BigInt

console.log(typeof(employeeName));
console.log(typeof(employeeAge));
console.log(typeof(employeeSalary));
console.log(typeof(employeeActive));
console.log(typeof(employeeMaritalStatus));
console.log(typeof(employeeData));
console.log(typeof(employee1UniqueID));
console.log(typeof(employeeActiveMinutes));



//Non-Primitive Datatypes
const mySampleArray = [67, 77, 54];  //Array
const myObject = {                      //Object
    employee1UniqueID: "UID1",          
    employee2UniqueID: "UID2"
};
const sampleFunction = function myFunction() {}; //Function

console.log(typeof(mySampleArray));
console.log(typeof(myObject));
console.log(typeof(sampleFunction));



