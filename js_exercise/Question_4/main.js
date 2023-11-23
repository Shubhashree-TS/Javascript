
///API request
/*Create a simple web page that performs the following actions:

Using the fetch API:

Make a GET request to the JSONPlaceholder fake API for posts: https://jsonplaceholder.typicode.com/posts.
Retrieve the first 10 posts from the response.
Display the title and body of these posts in a nicely formatted list on your web page.
Using the XMLHttpRequest API:

Make a GET request to the same JSONPlaceholder fake API, but this time for comments: https://jsonplaceholder.typicode.com/comments.
Filter the comments to only include those from the first 5 posts.
Display these comments under the corresponding post on your web page.

*/


fetch( 'https://jsonplaceholder.typicode.com/posts', { 
	method: 'get' })
    .then( response => response.json() )
    .then (response => {
        if(response){
            const slicedArray = response.slice(0, 10);// Retrieve the first 10 posts from the response.
            slicedArray.forEach((item,id)=>{
                const post = document.getElementById('post');
                const subPost = document.createElement('div');
                post.appendChild(subPost);
                const element1 = document.createElement('h3');
                element1.id = "element1";
                element1.textContent='';
                const element2 = document.createElement('p');
                element2.id = "element2";
                element2.textContent="";
                const element3 = document.createElement('button');
                element3.id= "button";
                element3.textContent = "Show Comment";
                const element4 = document.createElement('hr');
                element3.addEventListener("click",fetchingComment(slicedArray,subPost,element3,id))   
                subPost.appendChild(element1);
                subPost.appendChild(element2);
                subPost.appendChild(element3);
                subPost.appendChild(element4);
                element1.textContent=slicedArray[id].title;
                element2.textContent=slicedArray[id].body;
            }) 
        
        }
        else{
            console.log("no message");
        }

})


function fetchingComment(array,subPost,ele,i)  {
    console.log(array);
    console.log(array[i].id);
    fetch( 'https://jsonplaceholder.typicode.com/comments', { 
        method: 'get' })
    .then(result => result.json())
    .then(result=>{
        if(result){
        let output = result.filter(result=> result.postId == array[i].id)
        const commentSection = document.createElement('div');
        subPost.appendChild(commentSection);
        commentSection.textContent='';
        for(j=0;j<output.length;j++){
            const comment = document.createElement('p');
            commentSection.appendChild(comment);
            comment.textContent='';
            comment.textContent += `\t ${output[j].email} : ${output[j].body} \n`
        }
        const commentline = document.createElement('hr');
        commentSection.appendChild(commentline);
                    // ele.addEventListener("click",toggle(commentSection))

                    // function toggle(commentSec){
                    //     var x = commentSec;
                    //     if (x.style.display === "none") {
                    //         x.style.display = "block";
                    //     }
                    //     else {
                    //         x.style.display = "none"
                    //     }
                    // }
        }
        else {
            console.log("no comments")
        }
    })
    
}










