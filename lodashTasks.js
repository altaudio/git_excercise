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
	return value.name + "gill";

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
under50s = _.filter(gillFamily, function(user) {
	return user.age < 50;
});
console.log("The under fifties in the Gill family are:");
console.log(JSON.stringify(under50s));

//Q6 Number of members in the Gill family
console.log("There are " + _.size(gillFamily) + " people in the Gill family!");

//Q7 

var under50s = [];
under50s = _.filter(gillFamily, function(user) {
	return user.age < 50;
});
console.log(_.size(under50s) + " members of the Gill family are under 50.");

//Q8 list the members of the family under 50 with surnames
var under50s = [];
under50s = _.filter(gillFamily, function(user) {
	return user.age < 50;
});
console.log("The under fifties in the Gill family are " + under50s[0].name + " gill, " + under50s[1].name + " gill, " + under50s[2].name + " gill.");

//Q9 Generate a HTML table with name and age headings. Double space for readability
var htmlTable = "<table border=\"1\" cellpadding=\"5\" cellspacing=\"5\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n\n";

_.map(gillFamily, function(value) {
	htmlTable += "    <tr>\n";
	htmlTable += "      <td>" + value.name + "</td>\n";
	htmlTable += "      <td>" + value.age + "</td>\n";
	htmlTable += "    </tr>\n\n";
})

htmlTable += "  <tbody>\n</table>";

console.log("HTML table:");
console.log(htmlTable);

//Q10 Drop age of family member over 26 
var ageOmit = _.map(gillFamily, function(value, index) {
	if (value.age > 26) {
		return _.omit(value, 'age');
	} else {
		return value;
	}

});

console.log("Age Ommitted: ");
console.log(JSON.stringify(ageOmit));

//Q11 Sort family members by age
console.log("Sorted by age: ");
var ageSorted = _.sortBy(gillFamily, ['age']);
console.log(JSON.stringify(ageSorted));

//Q12 Find the Gill family members who's names start with D
var dNames = [];

dNames = _.filter(gillFamily, function(value) {
	return value.name.startsWith("d");
});
console.log("Family names beginning with d:");
console.log(JSON.stringify(dNames));

//Q13 Group the family members whose names start with different letters ()

var groupedFamily = _.groupBy(gillFamily, function (value) {
	return value.name[0];
});

console.log("Names grouped by first letter of name: ");
console.log(JSON.stringify(groupedFamily));

//Q14 Return the youngest member of the Gill family.
 var ageSorted = _.sortBy(gillFamily, ['age']);
 console.log("Youngest member of the Gill family: ");
 console.log(ageSorted[0]);

//Q15 Return the members of the Gill family who have an 'a' in their name.
var aNames;
aNames = _.filter(gillFamily, function(value) {
	return _.includes(value.name, "a");
});

console.log("Names with \"a\" in:");
console.log(JSON.stringify(aNames));

//Q16 Return the members of the Gill family but with the first letter of their name capitalized.
var capital = _.map(gillFamily, function(value) {
	return _.capitalize(value.name);
});

console.log("The Gill family capitalized:");
console.log(capital);

//Q17 Find the youngest member of the Gill family with an 'a' in their name. 
var aNames;
aNames = _.filter(gillFamily, function(value) {
	return _.includes(value.name, "a");
});

aNameYoung = _.sortBy(aNames, ['age']);
console.log("The youngest member of the Gill family whose name includes \"a\" is: ");
console.log(aNameYoung[0]);
