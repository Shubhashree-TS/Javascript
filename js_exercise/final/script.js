
//as soon as the page DOM has been loaded, without waiting for resources to finish loading.
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const switchBtn = document.getElementById('switch-btn');


//switching forms
  const switchForms = () => {
    const switchbtn = document.getElementById("switch-btn");
    console.log(switchBtn.textContent)
    loginForm.classList.toggle('active');
    // if(switchbtn.textContent = "Sign Up"){
    //   switchbtn.textContent = "Login"
    // }else {
    //   switchbtn.textContent = "Sign Up"
    // }
    signupForm.classList.toggle('active');
    resetForms();
  };

  switchBtn.addEventListener('click', switchForms);

  
  // Validation for Login Form
  const loginEmailInput = document.getElementById('login-email');
  const loginPasswordInput = document.getElementById('login-password');
  const loginButton = document.getElementById('login-button');

  loginEmailInput.addEventListener('input', validateLoginEmail);
  loginPasswordInput.addEventListener('input', validateLoginPassword);


  //login validation
  function validateLoginEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInputValue = loginEmailInput.value;
    const isValidEmail = emailRegex.test(loginEmailInput.value);

    if(emailInputValue===''){
      document.getElementById('login-email-error').textContent = 'Please enter this field'
    }
    else if (!isValidEmail) {
      document.getElementById('login-email-error').textContent = 'Invalid email format';
    } 
    else {
      document.getElementById('login-email-error').textContent = '';
    }

    validateLoginButton();
  }


  //password validation
  function validateLoginPassword() {
    const passwordInputValue = loginPasswordInput.value;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(loginPasswordInput.value);


    if(passwordInputValue===''){
      document.getElementById('login-password-error').textContent =
        'Please enter this field.'
    }
    else if (!isValidPassword) {
      document.getElementById('login-password-error').textContent =
        'Password must contain at least 8 characters, including letters, digits, and special characters.';
    } else {
      document.getElementById('login-password-error').textContent = '';
    }

    validateLoginButton();
  }

  function validateLoginButton() {
    const isValidEmail = validateEmail(loginEmailInput.value);
    const isValidPassword = validatePassword(loginPasswordInput.value);

    loginButton.disabled = !(isValidEmail && isValidPassword);
  }



  // Validation for Signup Form
  const signupNameInput = document.getElementById('signup-name');
  const signupPhoneInput = document.getElementById('signup-phone');
  const signupEmailInput = document.getElementById('signup-email');
  const signupPasswordInput = document.getElementById('signup-password');
  const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
  const signupButton = document.getElementById('signup-button');

  signupNameInput.addEventListener('input', validateSignupName);
  signupPhoneInput.addEventListener('input', validateSignupPhone);
  signupEmailInput.addEventListener('input', validateSignupEmail);
  signupPasswordInput.addEventListener('input', validateSignupPassword);
  signupConfirmPasswordInput.addEventListener('input', validateSignupConfirmPassword);

  function validateSignupName() {
    const name = signupNameInput.value.trim();

    if (name.length < 3) {
      document.getElementById('signup-name-error').textContent = 'Name must be at least 3 characters long.';
    } else if (name.length > 25) {
      document.getElementById('signup-name-error').textContent = 'Name is too long (max 25 characters).';
    } else {
      document.getElementById('signup-name-error').textContent = '';
    }

    validateSignupButton();
  }

  function validateSignupPhone() {
    const phoneRegex = /^\d{10}$/;
    const isValidPhone = phoneRegex.test(signupPhoneInput.value);

    if (!isValidPhone) {
      document.getElementById('signup-phone-error').textContent = 'Invalid phone number (10 digits required).';
    } else {
      document.getElementById('signup-phone-error').textContent = '';
    }

    validateSignupButton();
  }

  function validateSignupEmail() {
    const isValidEmail = validateEmail(signupEmailInput.value);

    if (!isValidEmail) {
      document.getElementById('signup-email-error').textContent = 'Invalid email format';
    } else {
      document.getElementById('signup-email-error').textContent = '';
    }

    validateSignupButton();
  }

  function validateSignupPassword() {
    const isValidPassword = validatePassword(signupPasswordInput.value);

    if (!isValidPassword) {
      document.getElementById('signup-password-error').textContent =
        'Password must contain at least 8 characters, including letters, digits, and special characters.';
    } else {
      document.getElementById('signup-password-error').textContent = '';
    }

    validateSignupButton();
  }

  function validateSignupConfirmPassword() {
    const password = signupPasswordInput.value;
    const confirmPassword = signupConfirmPasswordInput.value;

    if (password !== confirmPassword) {
      document.getElementById('signup-confirm-password-error').textContent = 'Passwords do not match.';
    } else {
      document.getElementById('signup-confirm-password-error').textContent = '';
    }

    validateSignupButton();
  }


  //validating email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  //validating password
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }


  //validating signup button 
  function validateSignupButton() {
    const isValidName = validateName(signupNameInput.value);
    const isValidPhone = validatePhone(signupPhoneInput.value);
    const isValidEmail = validateEmail(signupEmailInput.value);
    const isValidPassword = validatePassword(signupPasswordInput.value);
    const passwordsMatch = signupPasswordInput.value === signupConfirmPasswordInput.value;

    signupButton.disabled = !(isValidName && isValidPhone && isValidEmail && isValidPassword && passwordsMatch);
  }


  //validating name
  function validateName(name) {
    return name.length >= 3 && name.length <= 25;
  }

  //validating phone number
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }


  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

  });

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
  });

  // Function to reset form fields and errors
  function resetForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.reset();
      const errorSpans = form.querySelectorAll('.error');
      errorSpans.forEach(span => {
        span.textContent = '';
      });
    });
  }
});







//storing data in json 
function storingData(){
  var name = document.getElementById('signup-name').value;
  var phoneNumber = document.getElementById('signup-phone').value
  var email = document.getElementById('signup-email').value
  var password = document.getElementById('signup-password').value

 if(localStorage.getItem(email)){
  alert('this email already has an account')
  return;
 }
 localStorage.setItem(email, JSON.stringify({name: name,password: password,phone: phoneNumber}))
 localStorage.setItem('isLoggedIn','true');
 
 alert('signup successfull!');  
 
 retrievingPost();
}




//retrieving the post
function retrievingPost(){
  localStorage.setItem('isLoggedIn','true');
  sessionStorage.setItem('isLoggedIn','true');
  window.location='../Question_4/another.html';
}





//verifying the local storage
function verifyLocalStorage(){
    
    var loginEmail = document.getElementById('login-email').value
    var loginPassword = document.getElementById('login-password').value
    
  if(localStorage.getItem(loginEmail)){
    var storedData = JSON.parse(localStorage.getItem(loginEmail))
    var storedPassword = storedData.password;
    var storedName = storedData.name;
    var storedPhone = storedData.phone;

    if(loginPassword === storedPassword ){
      alert('successfully logged in!!')
      retrievingPost()
    }
    else {
      alert('Incorrect password!!')
    }
  }else{
    alert('This email is not registered!!')
  }
    
}
