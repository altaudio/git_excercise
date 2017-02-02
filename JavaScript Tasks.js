//Question 1
//Declare first and last name variables as Richard and Gill
var firstName = "Richard";
var lastName = "Gill";

//Concatenate the two strings and orint to the console log
console.log(firstName + " " + lastName);


//Question 2
//Concatenate first and last names in that order.
function firstNameLastName(firstName, lastName) {
	//concate two strings
	return firstName + " " + lastName;
}
//Print result to console log
console.log(firstNameLastName("Richard", "Gill"));


//Question 3
//Concatenate first and last names and in reverse order.
function lastNameFirstName(firstName, lastName) {
	//concate two strings
	return lastName + ", " + firstName;
}
//Print result to console log
console.log(lastNameFirstName("Richard", "Gill"));

//Question 4
//Print the length of the first name string
console.log("The string " + firstName + " is " + firstName.length + " characters long.");


//Question 5
// Print names from a array
var people = ["Jack", "John", "James"];
console.log(people[0] + "\n" + people[1] + "\n" + people[2]);

//Question 6
//Return name without first character
console.log(firstName.slice(1, firstName.length));

//Question 7
//Remove first letter of string if it begins with J and last four if the it starts with R
if (firstName.charAt(0) == "j" || firstName.charAt(0) == "J") {
	console.log(firstName.slice(1, firstName.length));
} else if (firstName.charAt(0) == "r" || firstName.charAt(0) == "R") {
	console.log(firstName.slice(0, firstName.length - 4));
} else {
	console.log(firstName);
}




