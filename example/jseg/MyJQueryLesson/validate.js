$(document).ready(function(){
	//global vars
	var form = $("#theForm");
	var name = $("#txtName");
	var nameInfo = $("#nameInfo");
	var age = $("#txtAge");
	var ageInfo = $("#ageInfo");	
	var email = $("#txtEmail");
	var emailInfo = $("#emailInfo");
	var pass1 = $("#txtPassword1");
	var pass1Info = $("#pass1Info");
	var pass2 = $("#txtPassword2");
	var pass2Info = $("#pass2Info");

	
	//On blur
	name.blur(validateName); //assign the function do not execute
	email.blur(validateEmail);
	pass1.blur(validatePass1);
	pass2.blur(validatePass2);
	age.blur(validateAge);
	//On key press
	name.keyup(validateName);
	pass1.keyup(validatePass1);
	pass2.keyup(validatePass2);

	//On Submitting
	form.submit(function(event){
		
		/* Now when the form is submitted our function is called. This happens prior to the actual submission, 
		 * so we can cancel the submit action by calling .preventDefault() on the event object or by returning false from our handler. 
		 */
		
		if(validateName() & validateEmail() & validatePass1() & validatePass2() & validateAge())
			return true;
		else
			return false;
			//event.preventDefault();
	});
	
	//validation functions
	function validateEmail(){
		//if it's valid email
		if(email.val().indexOf("@") > 0){
			email.removeClass("nok");
			emailInfo.text("Valid E-mail please!");
			emailInfo.removeClass("nok");
			return true;
		}
		//if it's NOT valid
		else{
			email.addClass("nok");
			emailInfo.text("Type a valid e-mail please :P");
			emailInfo.addClass("nok");
			return false;
		}
	}
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 3){
			name.addClass("nok");
			nameInfo.text("We want names with more than 3 letters!");
			nameInfo.addClass("nok");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("nok");
			nameInfo.text("What's your name?");
			nameInfo.removeClass("nok");
			return true;
		}
	}
	function validatePass1(){
		var a = $("#password1");
		var b = $("#password2");

		//it's NOT valid
		if(pass1.val().length <1 ){
			pass1.addClass("nok");
			pass1Info.text("Enter password'");
			pass1Info.addClass("nok");
			return false;
		}
		//it's valid
		else{			
			pass1.removeClass("nok");
			pass1Info.text("At least 1 character");
			pass1Info.removeClass("nok");
			validatePass2();
			return true;
		}
	}
	function validatePass2(){
		var a = $("#password1");
		var b = $("#password2");
		//are NOT valid
		if( pass1.val() != pass2.val() ){
			pass2.addClass("nok");
			pass2Info.text("Passwords doesn't match!");
			pass2Info.addClass("nok");
			return false;
		}
		//are valid
		else{
			pass2.removeClass("nok");
			pass2Info.text("Confirm password");
			pass2Info.removeClass("nok");
			return true;
		}
	}
	function validateAge(){

		var ageValue = parseInt(age.val());
		//it's NOT valid
		if(isNaN(ageValue) || ageValue <= 0){
			age.addClass("nok");
			ageInfo.text("Age must be a number greater than 0");
			ageInfo.addClass("nok");
			return false;
		}
		//it's valid
		else{			
			age.removeClass("nok");
			ageInfo.text("What's your age?");
			ageInfo.removeClass("nok");
			return true;
		}
	}
});