/*
function getMonthName(index) {
    var months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
        
    return months[index];
}

function getDayName(index){
    var days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
    return days[index];	
}

function abbrName(text) {
	if (text != null)
    return text.substr(0, 3);
}

var date = new Date();

var messageParts = [
    "Hello, ",
    prompt("Please enter your name", "Please enter your name"),
    ". Today is ",
    abbrName(getDayName(date.getDay())),
    " ",
    date.getDate(),
    ", ",
    date.getFullYear()
];

alert(abbrName());*/
//alert( messageParts.join("") );

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
	this.age = age;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    this.greet = function(person) {
        alert("Hello, " + person.getFullName());
    };    
    
    this.getAge = function(){
    	return this.age;
    }
    
    this.setAge = function(age){
    	this.age = age;
    }
}

var person1 = new Person("Jeremy", "McPeak", 30);
var person2 = new Person("John", "Doe", 25);

//person1.greet(person2);
alert("Person 1:" + person1.firstName + " is of age:" + person1.getAge());
person1.setAge(45);
alert("Person 1:"+ person1.firstName + " new age: " + person1.getAge());

