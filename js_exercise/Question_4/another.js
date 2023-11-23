
const postsContainer = document.getElementById('posts-container');

//fetching posts
async function fetchPosts(){
    {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        
        if(!response.ok){
            throw new Error('HTTP error! status : ${response.status}')
        }
        else{
            const posts = await response.json();
            console.log('fetched posts');
            console.log(posts.slice(0,10));
            return posts.slice(0, 10);
        }
    }
   
}

//displaying posts
function displayPosts(posts){
    posts.forEach(post=>{
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="toggleComments(${post.id},this)">Show Comments</button>
        <div class="comments" id="comments-${post.id}"  style="display:none; padding-left: 50px;"></div>
        `;
        postsContainer.appendChild(postElement);
    })
}

    
//fetching comments
async function fetchCommentsForPost(postId,commentContainer){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    const filtercomments = comments.slice(0,5);
    displayComments(filtercomments, commentContainer);   
    commentContainer.setAttribute('data-fetched','true');
    console.log(postId);
}

 //displaying comments
function displayComments(comments, commentContainer){
    comments.forEach(comment =>{
        const commentElement = document.createElement('p');
        commentElement.textContent =`${comment.email} : ${comment.body}`;
        commentContainer.appendChild(commentElement);
    })
        
        
}


//toggling button
function toggleComments(postId,btn){
    const response = fetchCommentsForPost(postId)
    console.log(btn);
    const commentContainer = document.getElementById(`comments-${postId}`);
    const isDataFetched = commentContainer.hasAttribute('data-fetched')
    const isCommentVisible = commentContainer.style.display === "block";
    commentContainer.style.display = isCommentVisible ? "none" : "block" ;
    btn.textContent = isCommentVisible ?  'Show Comments':'Hide Comments';
    
    if(!isCommentVisible && !isDataFetched ){
        fetchCommentsForPost(postId, commentContainer);
    }
    
    }

//initiate
async function init(){
    try {
        const posts = await fetchPosts();
        displayPosts(posts);
    } catch (error) {
        alert(`error: ${error.message}`);
    }
        
    
    }
    
init();

function logout(){
    localStorage.setItem('isLoggedIn','false');
    window.location ="../final/form.html";
};




          
