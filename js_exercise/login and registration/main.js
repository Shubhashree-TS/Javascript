function ShowLoginForm(){
	
	SetTitle("Login");
	ShowHideForm("LoginFrom","Show");
	ShowHideForm("RegistrationFrom","Hide");
	ActiveInactiveBtn("ShowLoginBtn","Active");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");

};

function ShowRegistrationForm(){

	SetTitle("Registration");
	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");


};


//setting the form title
function SetTitle(Title){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = Title;
}


//showing and hiding form
function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

//active and inactive the button
function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

enableordisablebtn();

function enableordisablebtn() {
	const lbtn = document.getElementById("LoginBtn");
	lbtn.disabled= true;
	if(lbtn.disabled){
		lbtn.style.filter = "blur(1px)"
	}

	const rbtn = document.getElementById("RegistrationBtn");
	rbtn.disabled= true;
	if(rbtn.disabled){
		rbtn.style.filter = "blur(1px)"
	}
}

const userObj = {
	name : 'abc',
	age : '18',
	location : 'Banglore',
};

for (const key in userObj) {
	if (Object.hasOwnProperty.call(userObj, key)) {
		const element = userObj[key];
		console.log(element);
	}
}

Object.values(userObj);


