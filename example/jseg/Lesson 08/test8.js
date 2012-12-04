function calculateMoney(){
	var yourMoney = prompt("Money you have: ", "Money");
	var cost = prompt("Spent ammount: ","Cost");
	if (isNaN(yourMoney) || isNaN(cost)) 
		return "Did not provide number data!!";
	return "You will be left with " + (Number(yourMoney) - Number(cost) + " money");	
}


function Pocket(){
	this.ammount = Number(0);
	
	this.deposit = function(ammount){
		this.ammount = Number(this.ammount) + Number(ammount);
	};
	
	this.spend = function(ammount){
		this.ammount = Number(this.ammount) - Number(ammount);
	}
}

var pocket = new Pocket();
alert("Your current money is: " + pocket.ammount);
var depositMoney = prompt("Deposit an ammount", "");
pocket.deposit(depositMoney);
alert("Your total Money after depositing is: " + pocket.ammount);
var spendMoney = prompt ("How money will you spend? ", "");
pocket.spend(spendMoney);
alert("Your total Money after spending is: " + pocket.ammount);

if (pocket.ammount < 0){
    var childWindow = open("", "", "height=300");
    
    childWindow.document.write("Hello, new Window!<br/>");
    childWindow.document.write("How are you today?");
	
}

/*
String.prototype.calculateSize = function(){	
	if(this.length > 10)
	{
		this.oversize = new Boolean(true);		
	} 	else{
		this.oversize = new Boolean(false);			
	}	
}  

var b = new String("testing");
b.calculateSize();
alert("The boolean result is: " + b.oversize);
*/
