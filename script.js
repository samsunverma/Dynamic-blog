
function loadBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const postsContainer = document.getElementById('new-post');

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title; // Assuming each post has a 'title' property
        postsContainer.appendChild(listItem);
    });
}

//----------------------------------------------------------------------------//


// Function to save a new blog post to local storage
function savePost(title, content, imageUrl) {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const newPost = { title, content, image: imageUrl };
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    alert('Post saved successfully!');
    document.getElementById('post-form').reset(); // Clear the form
}
// Event listener for the form submission
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    saveBlogPost(ti
        tle, content); // Save the new post
    loadBlogPosts(); // Reload the blog posts to display the new one

    document.getElementById('post-form').reset();
});

window.onload = loadBlogPosts;
//---------------------------------------------------------------------------//


window.onload = loadBlogPosts;

// Function to load posts from local storage and display them
function loadPosts() {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get posts from local storage

    postList.innerHTML = '';

    if (posts.length === 0) {
        postList.innerHTML = '<li>No posts available.</li>';
        return;
    }

    posts.forEach((post, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="post.html?id=${index}">View/Edit</a>
        `;
        postList.appendChild(listItem);
    });
}

// Call loadPosts when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);
