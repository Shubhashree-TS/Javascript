


function seterror(id, error){
        element = document.getElementById(id)
        element.textContent = error;

}

function clearErrors(){
    errors = document.getElementById(id);
    for(let item of errors){
        item.innerhtml="";
    }
}

function validateSignUpForm(){
 
    var returnval = true;

    var firstName = document.forms["signUpForm"]["fname"].value;
    console.log(firstName);

    
    if(firstName.length > 20){
        seterror("fnameError","name is too long")
        console.
        returnval = false;
    }
    var lastName = document.forms["signUpForm"]["lname"].value;
    console.log(lastName);
    if(lastName.length > 10){
       seterror("lnameError","last name is too long")
        returnval = false;
    }

    var phoneNumber = document.forms["signUpForm"]["fphone"].value;
    if(phoneNumber.length >10){
        seterror("fphoneError","Wrong Phone number")
        returnval = false;
    }
    
    var email = document.forms["signUpForm"]["signUpEmail"].value;
    var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let isValidEmail = regex.test(email);
    if(!isValidEmail){
        seterror("signUpEmailError","email is wrong")
    }

    var confirmPassword = document.forms["signUpForm"]["confirmPassword"].value
    var password = document.forms["signUpForm"]["signUpPassword"].value;
    if(confirmPassword !== password){
        seterror("confirmPasswordError","wrong password");
    }
    
    return returnval;
    

}