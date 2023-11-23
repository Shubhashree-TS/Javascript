function checkValidation(){

	RemoveAllErrorMessage();

	var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	var PasswordValidationMessage;
	var	emailValidationMessage;

	var lEmailValidation = document.getElementById("loginEmail");
	lEmailValidation.addEventListener("change",()=>{
		emailValidationMessage = isValidEmail(LoginEmail);
		if(emailValidationMessage != "valid"){
			ShowErrorMessage('LoginEmail',emailValidationMessage);//return false if the email id is not okay
		}
	})


	var lPassValidation = document.getElementById("loginPassword")
	lPassValidation.addEventListener("change", ()=>{
		PasswordValidationMessage = isValidPassword(LoginPassword);
		if(PasswordValidationMessage != "valid"){
			ShowErrorMessage('LoginPassword',PasswordValidationMessage);
	}})














	


	

	
		//return false if the password id is not okay


		var RegiName = document.getElementById('RegiName').value;
		var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
		var RegiPassword = document.getElementById('RegiPassword').value;
		var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;
	
		var PasswordValidationMessage;
		var ConfirmPasswordMessage;
		var	emailValidationMessage;
	
		//if the name is empty
		if(RegiName == ""){
			ShowErrorMessage('RegiName',"Please fill the filed.");
			return false;
		//if the name length is less than 3 characters or more than 20
		}else if(RegiName.length < 3 || RegiName.length > 20){
			ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
	
			return false;
		}
	
	
		emailValidationMessage = isValidEmail(RegiEmailAddres);
	
	
		if(emailValidationMessage = ""){
			ShowErrorMessage('RegiEmailAddres',emailValidationMessage)
			return false;
		}
		//if mail is not valid
		if(emailValidationMessage != "valid"){
			ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
			return false;
		}
		
		PasswordValidationMessage = isValidPassword(RegiPassword);
		if(PasswordValidationMessage != "valid"){
			ShowErrorMessage('RegiPassword',PasswordValidationMessage);
			return false;
		}
		
		ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
		if(ConfirmPasswordMessage != "valid"){
			ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
			return false;
		}
	
		if(RegiPassword != RegiConfirmPassword){
			ShowErrorMessage('RegiConfirmPassword',"Password not match.");
			return false;
		}
	}
 


var inputClass = document.querySelectorAll(".input-text");
console.log(inputClass)
inputClass.forEach( (input)=>{
	input.addEventListener('change', ()=> {
		checkValidation();
});
	});


	


function ValidateLoginForm() {
	document.forms["Form-login"].reset();
	alert("Login successfull!")
	return true;
}

function ValidateRegistrationForm(){

	RemoveAllErrorMessage();

	

	document.forms["Form-register"].reset();

	alert("Registration successfull!")

	return true;
}


function RemoveAllErrorMessage(){

	var allErrorMessage = document.getElementsByClassName('error-message');
	var allErrorFiled = document.getElementsByClassName('error-input');
	var i;

	for(i=(allErrorMessage.length - 1); i>=0; i--){
		allErrorMessage[i].remove();
	}
	
	for(i=(allErrorFiled.length-1);i>=0;i--){
		allErrorFiled[i].classList.remove('error-input');
	}
}

function ShowErrorMessage(InputBoxID,Message){

	var InputBox = document.getElementById(InputBoxID);
	InputBox.classList.add('error-input');
	InputBox.focus();

	//dynamically creating the message element
	var ErrorMessageElement = document.createElement("p");
	ErrorMessageElement.innerHTML = Message;
	ErrorMessageElement.classList.add('error-message');
	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');


	//inserting that message before the next sibling of element
	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
	
}

function isValidEmail(email){
	//condition
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//if email is empty
	// if(email == ""){
	// 	return "the field is empty"
	// }

	//id email doesnt match the regex
	if(emailRegex.test(email) == false){
		return "This is not a valid email.";
	}

	//if everything is okay return valid
	return "valid";
}

function isValidPassword(password) {
	
	const minLength = 8;
	const maxLength = 32;
	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;


	//if password is empty
	// if(password == ""){
	// 	return "Please fill the field."
	// }

	//if password length is below or above the specified range
	if (password.length < minLength || password.length > maxLength) {
		return "Password length should be minimum 8 & maximum 32 characters.";
	}

	//if the password doesnt match the regex.
	if (!letterNumberRegexSpecialChar.test(password)) {
		return "Password should contain alphabetic, numeric and special characters.";
	}

	//if everything is ok return valid
	return "valid";
}







// <form id="myForm">
//   <label for="input1">Input 1:</label>
//   <input type="text" id="input1" name="input1">

//   <label for="input2">Input 2:</label>
//   <input type="text" id="input2" name="input2">

//   <!-- Add more input fields as needed -->

//   <button type="submit">Submit</button>
// </form>


//   document.addEventListener('DOMContentLoaded', function () {
//     var form = document.getElementById('myForm');
//     var inputs = form.querySelectorAll('input');

//     inputs.forEach(function (input) {
//       input.addEventListener('change', function (event) {
//         console.log('Input value changed:', event.target.value);
//         // Add your custom logic here
//       });
//     });
//   });


