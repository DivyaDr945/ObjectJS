// Import stylesheets
import './style.css';

/*bject is an unordered collection of key-value pairs. Each key-value pair is called a property.
The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.

objects are returned as-is
undefined and null throw a TypeError.
Number, String, Boolean, Symbol, BigInt primitives are wrapped into their corresponding object wrappers.
*/
// creating object by object literal
let personobj = {
  firstName: 'John',
  lastName: 'Doe',
};
console.log(personobj.firstName + personobj.lastName);
console.log(personobj['lastName'] + personobj['firstName']);
//Create instace of object var objectname=new Object();
var emp = new Object();
emp.id = 101;
emp.name = 'Ravi Malik';
emp.salary = 50000;
console.log(
  'my ID id is ' +
    emp.id +
    ' and name is ' +
    emp.name +
    ' and my slary is ' +
    emp.salary
);

// Creating object constructor,this refers to the current object
function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  this.changeSalary = changeSalary;

  function changeSalary(otherSalry) {
    this.salary = otherSalry;
  }
}
var e = new employee(103, 'dayana', '34000');
console.log(e.id, e.name, e.salary);
e.changeSalary(20000);
console.log(e.id, e.name, e.salary);

/* Object Constructor 
The Object() constructor turns the input into an object. Its behavior depends on the input's type.
If the value is null or undefined, it creates and returns an empty object. Otherwise, it returns an object of a Type that corresponds to the given value.If the value is an object already, it returns the value.
Object() can be called with or without new. Both create a new object.

*/
const o = new Object();
o.foo = 42;
const o1 = new Object(undefined);
const o2 = new Object(null);

console.log(o);
console.log(o1);
console.log(o2);

/*Object.assign()*/

/*
1.Object.assign()	This method is used to copy enumerable and own properties from a source object to a target object
2	Object.create()	This method is used to create a new object with the specified prototype object and properties.
3	Object.defineProperty()	This method is used to describe some behavioral attributes of the property.
4	Object.defineProperties()	This method is used to create or configure multiple object properties.
5	Object.entries()	This method returns an array with arrays of the key, value pairs.
6	Object.freeze()	This method prevents existing properties from being removed.
7	Object.getOwnPropertyDescriptor()	This method returns a property descriptor for the specified property of the specified object.
8	Object.getOwnPropertyDescriptors()	This method returns all own property descriptors of a given object.
9	Object.getOwnPropertyNames()	This method returns an array of all properties (enumerable or not) found.
10	Object.getOwnPropertySymbols()	This method returns an array of all own symbol key properties.
11	Object.getPrototypeOf()	This method returns the prototype of the specified object.
12	Object.is()	This method determines whether two values are the same value.
13	Object.isExtensible()	This method determines if an object is extensible
14	Object.isFrozen()	This method determines if an object was frozen.
15	Object.isSealed()	This method determines if an object is sealed.
16	Object.keys()	This method returns an array of a given object's own property names.
17	Object.preventExtensions()	This method is used to prevent any extensions of an object.
18	Object.seal()	This method prevents new properties from being added and marks all existing properties as non-configurable.
19	Object.setPrototypeOf()	This method sets the prototype of a specified object to another object.
20	Object.values()	This method returns an array of values.
*/
