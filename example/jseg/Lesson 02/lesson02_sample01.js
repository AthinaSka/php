/*var myVariable = 3;
var myVariable2 = myVariable + 2; // 5
var myVariable3 = "The value is: " + myVariable2; // The value is 5

alert(myVariable3);
*/

/*var myName= "Athina Skandalou";

var introduction= "My name is";

alert(introduction +" "+myName);*/


/*var surname = prompt("Surname", "Give your surname");
var name = prompt("Name", "Give your name");

alert (surname + " " + name);*/

var sumUp = function(){
	
var num1 = prompt ("Number 1", "Number input");

var num2 = prompt ("Number 2", "Number input");
var x=Number(num1);
var y=Number(num2);
	
	if (isNaN(x)||isNaN(y))
	{
		return "You did not type numbers";
	
	}
	else{
	return x+y;	
	}
	
};

//sum= sumUp();
alert (sumUp());


