// var firstName = prompt("First Number: ", "Put first number here");
// var lastName = prompt("Second Number: ","Put first number here");/*
function getGreeting(firstName, lastName){
	return "The sum is: " + (Number(firstName) + Number(lastName));
}
//var result = Number(firstName) + Number(lastName);
//var myVariable = "The sum is: " + result; 


function calculateMoney(){
var yourMoney = prompt("Money you have: ", "Money");
var cost = prompt("Spent ammount: ","Cost");
if (isNaN(yourMoney) || isNaN(cost)) 
	return "Did not provide number data!!";
return "You will be left with " + (Number(yourMoney) - Number(cost) + " money");	
}

function calculateSumThreeTimes(){
	var totalLoops = 0;
	var total = 0;
	for(var i =1; i<=3; i++){
		var storeNum = prompt("Enter your number loop: " + i, "Loop: " + i);
		total = Number(total) + Number(storeNum); 		 
	}
	return "Total Sum: " + total;
}

function checkThreeTimes(){
var counter = 0;
do{
	var yourMoney = prompt("Money you have: ", "Money");
	var cost = prompt("Spent ammount: ","Cost");
    counter++;
    if (!isNaN(yourMoney) && !isNaN(cost)) {
    	return "You will be left with " + (Number(yourMoney) - Number(cost) + " money");
    }        		
}while(counter <= 3)		

return "No other tries!"
}
*/
function askConfirmation(){	
	var firstName;
	var lastName;
	do{
		firstName = prompt("First name: ", "F");
		lastName = prompt("Last name: ","L");		var response = confirm("Are you sure you first name is: " + firstName + ", and your last name is: " + lastName);
	}while(!response);
		//return "ok";
		return "Your name is" + firstName + " " + lastName;
}

function calculateMoney(){
	var yourMoney = prompt("Money you have: ", "Money");
	var cost = prompt("Spent ammount: ","Cost");
	if (isNaN(yourMoney) || isNaN(cost)) 
		return "Did not provide number data!!";
	else{
		var result = Number(yourMoney) - Number(cost);		
		return "You will be left with " + result.toFixed(2) + " money";		
	}
		
}

//askConfirmation();
alert(calculateMoney());

//alert(calculateMoney());

