// const verseChoose = document.querySelector("select");
// const poemDisplay = document.querySelector("pre");

// verseChoose.addEventListener("change", () => {
// const verse = verseChoose.value;
// updateDisplay(verse);
// });


///API request

function displayPost(array){
    for(i=0;i<array.length;i++){
        console.log("1")
        const post = document.createElement('div');
        post.id="postId"
        const title = document.createElement('p')
        title.id ="title"
        const body = document.createElement('p')
        body.id = "body"
        const btn = document.createElement('button')
        btn.id = "button"

        post.textContent= "happening";
    }
   ;
//     userDataDivision.id= "userDataDivision";
//     if(currentUserIndex<Object.keys(users).length){
//         console.log(Object.keys(users)[currentUserIndex]);
//         for(var k in users[Object.keys(users)[currentUserIndex]]){
//             const userDataElement = document.createElement("p");
//             const userData =document.createTextNode(users[Object.keys(users)[currentUserIndex]][k]);
//             userDataElement.appendChild(userData);
//             userDataDivision.appendChild(userDataElement);
//         }
//         document.getElementById("user-details").appendChild(userDataDivision);
//         const deleteUserButton = document.createElement("button");
//         deleteUserButton.textContent = "Delete User";
//         deleteUserButton.id="deleteuser";
//         deleteUserButton.setAttribute('onclick',"deleteUser()");
//         document.getElementById("user-details").appendChild(deleteUserButton);
//         currentUserIndex++;
//     }

}

fetch( 'https://jsonplaceholder.typicode.com/posts', { 
	method: 'get' })
.then( response => response.json() )
.then (response => {
    if(response){
        console.log("got the message");
        const slicedArray = response.slice(0, 10);// taking top 10 elements
        console.log((slicedArray))
        displayPost(slicedArray)
    
        console.log(slicedArray[0].title)
    }
    else{
        console.log("no message");
    }

    
})


// { 

//     if(!response){
//         console.log("Cant Fetch the data");
//     }
//     else{
//         var obj = JSON.parse(response);   // Now you can access the string using the dot notation 
//         console.log( obj);
//     }
//      })
// .catch( function(err) { 
// 	// console.log(err.message);
// });



// function updateDisplay(verse) {
//     verse = verse.replace(" ", "").toLowerCase();
//     const url = `${verse}.txt`;
//     // Call `fetch()`, passing in the URL.
//     fetch(url)
//     // fetch() returns a promise. When we have received a response from the server,
//     // the promise's `then()` handler is called with the response.
//     .then((response) => {
//     // Our handler throws an error if the request did not succeed.
//     if (!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//     }
//     // Otherwise (if the response succeeded), our handler fetches the response
//     // as text by calling response.text(), and immediately returns the promise
//     // returned by `response.text()`.
//     return response.text();
//     })
//     // When response.text() has succeeded, the `then()` handler is called with
//     // the text, and we copy it into the `poemDisplay` box.
//     .then((text) => {
//     poemDisplay.textContent = text;
//     })
//     // Catch any errors that might happen, and display a message
//     // in the `poemDisplay` box.
//     .catch((error) => {
//     poemDisplay.textContent = `Could not fetch verse: ${error}`;
// });
// }
// updateDisplay("Verse 1");
// verseChoose.value = "Verse 1";


// function addUser(){                      //adding user
//     const userDataDivision = document.createElement('div');
//     userDataDivision.id= "userDataDivision";
//     if(currentUserIndex<Object.keys(users).length){
//         console.log(Object.keys(users)[currentUserIndex]);
//         for(var k in users[Object.keys(users)[currentUserIndex]]){
//             const userDataElement = document.createElement("p");
//             const userData =document.createTextNode(users[Object.keys(users)[currentUserIndex]][k]);
//             userDataElement.appendChild(userData);
//             userDataDivision.appendChild(userDataElement);
//         }
//         document.getElementById("user-details").appendChild(userDataDivision);
//         const deleteUserButton = document.createElement("button");
//         deleteUserButton.textContent = "Delete User";
//         deleteUserButton.id="deleteuser";
//         deleteUserButton.setAttribute('onclick',"deleteUser()");
//         document.getElementById("user-details").appendChild(deleteUserButton);
//         currentUserIndex++;
//     }

// } 


