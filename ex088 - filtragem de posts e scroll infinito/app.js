let page = 1;
const postsContainer = document.querySelector("#posts-container");

const getPosts = async () => {
  let url = `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`;
  const response = await fetch(url);
  return response.json();
};

const addPostsIntoDOM = async () => {
  const posts = await getPosts();
  const postsTemplate = posts
    .map(
      ({ id, title, body }) => `
<div class="post">
    <div class="number">${id}</div>
    <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p>${body}</p>
    </div>
</div>
  `
    )
    .join("");
  postsContainer.innerHTML += postsTemplate;
};

addPostsIntoDOM();
