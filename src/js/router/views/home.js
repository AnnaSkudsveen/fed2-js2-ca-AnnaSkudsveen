import { authGuard } from "../../utilities/authGuard";
import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";
import { onLogout } from "../../ui/auth/logout.js";

const bearerToken = localStorage.getItem("bearerToken");
const postSection = document.querySelector(".postSection");
const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", onLogout);
getPosts();

async function getPosts() {
  if (bearerToken) {
    const options = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "X-Noroff-API-Key": `${API_KEY}`
      }
    };

    const response = await fetch(`${API_SOCIAL_POSTS}`, options);
    const data = await response.json();

    const paginatedPosts = paginate(data.data, 12);
    renderPagination(paginatedPosts);
    console.log(data.data);
    showPosts(paginatedPosts[0]);
  } else {
    authGuard();
  }
}

function showPosts(postData) {
  postData.forEach((post) => {
    postSection.innerHTML += `
    <section class="flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg p-10">
      <a class="post-link-card" href="post/index.html?id=${post.id}">
        <section class="blog-post flex flex-col gap-8 items-center justify-center">
          <div class="p-10">
            <h2>${post.title}</h2>
          </div>
          <button class="bg-blue-600 text-white rounded h-8 w-28">Read</button>
        </section>
      </a>
      <a class="post-link-card" href="post/edit/index.html?id=${post.id}">
        <button class="border border-blue-600 text-blue-600 rounded h-8 w-28">Edit</button>
      </a>
    </section>
    `;
  });
}

function paginate(items, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    const start = i * itemsPerPage;
    const end = start + itemsPerPage;
    pages.push(items.slice(start, end));
  }

  return pages;
}

function renderPagination(paginatedPosts) {
  const pagination = document.querySelector(".navigation");
  pagination.innerHTML = "";
  pagination.className = "border-t flex justify-center";

  paginatedPosts.forEach((page, index) => {
    const button = document.createElement("button");
    button.textContent = index + 1;
    button.className = "p-1 text-lg hover:text-blue-600";
    button.addEventListener("click", () => {
      postSection.innerHTML = "";
      showPosts(page);
    });
    pagination.append(button);
  });
}
