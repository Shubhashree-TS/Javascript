/* HTML Structure:

Create an HTML form with two inputs: one for a username (<input type="text" id="username">) and one for age (<input type=" number" id=" age">).
Include a submit button (<button type="submit">Submit</button>).
Event Listener:

Add an event listener to the form's submit event to intercept the form submission.
When the form is submitted, prevent the default form submission action using preventDefault.
Validation Function:

Write a function validateForm that gets triggered on form submission.
The function should retrieve the values entered in the username and age fields.
Error Handling:

If the username is empty or the age is not within the range of 1 to 110, throw a custom error.
Catch the error and display an error message to the user within a designated <div id="error-message"></div>.
Success:

If validation passes, log a success message to the console and reset the form fields.*/ 

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack =`${this.name} : ${this.message}`;
}// defining the custom error

function validateForm(){
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    try {
        if(username.trim() == "" && age.trim() == "") {throw new customError("Fill Username and age!")}
        else if(username.trim() == ""  ) {throw new customError("Fill the Usernamefield!");}
        else if(age.trim() == "") {throw new customError("Fill the Age field!")}
        else if (age > 110 || age < 1) {throw new customError("The age should be in the range of 1 and 110");}
        else {
            document.getElementById("error-message").innerHTML = "";
            document.getElementById("success-message").innerHTML ="Form submitted successfully!";
            document.getElementById("form").reset();}
    }
    catch(err){
        document.getElementById("error-message").innerHTML = err.message;
        
    }
} //validate form


var submit=document.getElementById("submit")
submit.addEventListener("click",validateForm,false);  //event listener
