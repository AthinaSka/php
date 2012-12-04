/**
 * @author User
 */

function Pocket() {
	this.asset = Number(0);
	
	this.add = function(asset) {
		this.asset = this.asset + asset;
	};

	this.deduct = function(expenses) {
		this.asset = this.asset - expenses;
	};

}


for ( i = 0; i < 3; i++) {

	var asset = prompt("Initial asset", "Give your asset");
	var expenses = prompt("Expenses", "Give your expenses");
	if (isNaN(asset) || isNaN(expenses)) {
		var times = i + 1;
		alert("Give a new asset or expenses. Chars not acceptable.You can try 3 times. You have tried " + times + " times");

	} else {
		alert("Press Ok to see the money left");
		break;
	}

}

x = Number(asset);
y = Number(expenses);

if (x > 0 || y > 0) {
	w = x - y;

	if (isNaN(w)) {
		alert("Wrong typing");
	} else {
		z = Number(w).toFixed(2);
		if (z == 0) {
			alert("No money left");
		} else if (z < 0) {
			alert("Not able to spend this amount of money")
		} else {
			alert("You have finally" + z);
		}
	}

} else {
	alert("Negative number as an input");
}

pocket1= new Pocket();

pocket1.add(asset);
pocket1.deduct(expenses);
//den to ekana pote swsta!!!
