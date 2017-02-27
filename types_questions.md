//Q1
"Hello" is of the type string

//Q2
{hello : 1} is an object with a string key and integer value

//Q3
[1,2,3] is an array with three integer values

//Q4
[{hello : 1}, {hello : 1}] is an array containing objects, with string keys and integer values.

//Q5
{
  cats: [{name: 'tiddles', breed: 'persian'}, {name: 'happy', breed: 'burmese'}],
  dogs: [{name: 'Chester', breed: 'labrador'}, {name: 'happy', breed: 'corgi'}]
}

The object above contains two properties with the string keys of cats and dogs. Each property has an array value, containing two objects which in turn contain two string key and value pairs.

//Q6
The lodash _.map function accepts a collection (array or object) as its first argument and a function as its second. It then passes each item in the collection as an argument to the function and stores the resulting value in a new array.

//Q7
The lodash _.filter fucntion accepts a collection (array or object) as its first argument and a predicate function, array or object as a second argument. Each item in the collection is tested to see if it returns truthy for the second arguement, and returns an array of these truthy values.
