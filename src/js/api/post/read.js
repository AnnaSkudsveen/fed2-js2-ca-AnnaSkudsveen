import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";

export async function readPost(id) {
  const bearerToken = localStorage.getItem("bearerToken");
  const postSection = document.querySelector(".postSection");

  if (bearerToken) {
    const options = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "X-Noroff-API-Key": `${API_KEY}`
      }
    };

    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);
    const data = await response.json();
    console.log(`${API_SOCIAL_POSTS}/${id}`);
    showPost(data.data);
  } else {
    authGuard();
  }

  function showPost(postData) {
    postSection.innerHTML += `
      <section class="blog-post w-3/4 md:w-2/3 lg:w-1/3">
      <div>
      <h2 class="text-3xl">${postData.title}</h2>
      <p>${postData.body}</p>
      </div>
      </section>
        `;
  }
}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
