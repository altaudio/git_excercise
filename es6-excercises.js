//ES6 Features Excercise

//Template Strings Examples

let tempStrings = ["good", "great", "fantastic", "the best thing since sliced bread"];
let stringUsage = _.random(1, 100);

console.log(
	`Template strings are ${tempStrings[_.random(0,_.size(tempStrings) - 1)]}!

	They take into account newlines.

	I use template strings ${stringUsage} times a day.
	Thats ${stringUsage * 7} times a week, ${stringUsage * 28} times a month and ${stringUsage * 365.2422} times a year!`
	);


//Const example calculate wavelength based on frequency

let freq = 20;
function waveLengthCalc(freq) {

	const SPEED_OF_SOUND = 340;
	return [SPEED_OF_SOUND / freq, (SPEED_OF_SOUND / freq) * 100];
}

if (freq > 340) {
	console.log(`
	The wavelength of a ${freq}Hz tone is ${waveLengthCalc(freq)[1]} centimeters.`);

} else {
	console.log(`
	The wavelength of a ${freq}Hz tone is ${waveLengthCalc(freq)[0]} meters.`);
}

//Object Initiliazer and Destructuring Shorthand

function catAges (birthYear){
	let age = 2017 - birthYear;
	let humanAge;
	
	if (age < 1) {
		humanAge = age * 15;
	} else if (age > 1 && age < 2) {
		humanAge = (age - 1) * 24;
	} else {
		humanAge = 24 + ((age - 2) * 4);
	}

	//Initiliaze object
	return {birthYear, age, humanAge};	
}

//Destructure object
let {birthYear, age, humanAge} = catAges(2010);

console.log(`A cat born in ${birthYear} would be ${age} years old in cat years, and ${humanAge} in human years.`);


/* Rest and spread

var enemyType = ["Giant Squid", "Four-headed Piranha", "7ft Duck",  "Robotic Sloth", "Death-claw", "Zombie-Pigman"];
var weaponType = ["Tooth-pick", "Water-Gun", "the Eye of Sauron", "tourettes", "Searing Shish-kebab", "a handful of rocks"]

function createEnemyGroup(groupName,...members) {
	for (let i in members) {
		console.log(`${members[i]} is a ${enemyType[_.random(0, (enemyType - 1))]} yielding ${weaponType[_.random(0, (weaponType - 1))]}`);
	}
}

createEnemyGroup("The Dans", "Dan", "Danise", "Jordon Holt");

*/