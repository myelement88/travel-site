var $ = require('jquery');
var Person = require('./modules/Person');

alert("Testing 12321 ABC");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();
