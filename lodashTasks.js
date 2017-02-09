//Lodash tasks

//Declare the Gill family
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];



//Q1- Write the code to produce an array of the names of the gill family. e.g ['john', 'daniel' ... etc.]
//Map each name of the Gill family
var firstNames = _.map(gillFamily, 'name');
console.log("First Names: " + firstNames);

//Q2- Write the code to produce an array of the names of the gill family including surnames
//Map firstNames array with add gill function
var firstAndLastNames = _.map(gillFamily, function(value){
	return " " + value.name + " gill";

});
console.log("First and last names: " + firstAndLastNames);

//Q3 Sum age of the gill family
//Get array of Gill family ages

var collectiveAge =_.sum( _.map(gillFamily, 'age'));
console.log("The collective age of the Gill family is " + collectiveAge);

//Q4 Mean age of the Gill family
//Mean = sum of map 'age' and size of Gill family array
var meanAge = (_.sum( _.map(gillFamily, 'age')) / _.size(gillFamily));
console.log("The mean age of the Gill family is " + meanAge);

//Q5 Family members under 50.

var under50s = [];
_.map(gillFamily, function (value) {
	if (value.age < 50) {
		under50s.push(value.name);
	}
});
console.log("The under fifties in the Gill family are " + under50s);

//Q6 Number of members in the Gill family
console.log("There are " + _.size(gillFamily) + " people in the Gill family!");

//Q7 

var under50s = [];
_.map(gillFamily, function (value) {
	if (value.age < 50) {
		under50s.push(value.name);
	}
});
console.log(_.size(under50s) + " members of the Gill family are under 50.");

//Q8 list the members of the family under 50
var under50s = [];
_.map(gillFamily, function (value) {
	if (value.age < 50) {
		under50s.push(" " + value.name + " gill");
	}
});
console.log("The under fifties in the Gill family are " + under50s);

//Q9 Generate a HTML table with name and age headings
//TO FINISH

//Q10 Drop age of family member over 26 
_.map(gillFamily, function (value) {
	if (value.age > 26) {
		delete value.age;
	}
})
console.log("Ages Hidden: ");
console.log(gillFamily[0], gillFamily[1], gillFamily[2], gillFamily[3], gillFamily[4]);

//Re-declare Gill family as has been modified
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age: 25}, {name: 'robin', age: 60}];

//Q11 Sort family members by age
console.log("Sorted by age: ");
var ageSorted = _.sortBy(gillFamily, ['age']);
console.log(ageSorted[0], ageSorted[1], ageSorted[2], ageSorted[3], ageSorted[4]);

//Q12 Find the Gill family members who's names start with D
var dNames = [];

_.map(gillFamily, function(value){
	if (value.name.charAt(0) == 'd') {
		dNames.push(value.name);
	}
});

console.log("Family names beginning with d:");
console.log(dNames);

//Q13 Group the family members whose names start with different letters ()
