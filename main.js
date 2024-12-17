// const loadingElement = document.querySelector(".loading");
// const userCardsElement = document.querySelector(".user-cards");

// fetch("https://dummyjson.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Tarmoq xatosi: " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     loadingElement.style.display = "none";

//     data.users.forEach((user) => {
//       const userCard = document.createElement("div");
//       userCard.className = "card";
//       userCard.innerHTML = `
//         <img src="${user.image}" alt="${user.firstName}">
//         <div class="card-body">
//           <h2>${user.firstName} ${user.lastName}</h2>

//           <p>Telefon: ${user.phone}</p>
//           <p>Yoshi: ${user.age}</p>
//         </div>
//       `;
//       userCardsElement.appendChild(userCard);
//     });
//   })
//   .catch((error) => {
//     loadingElement.textContent = "Xatolik yuz berdi: " + error.message; // Xatolikni ko'rsatish
//   });

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".product-container");
      data.products.forEach((product) => {
        container.innerHTML += `
                  <div class="card">
                      <img src="${product.thumbnail}" alt="${product.title}" class="card-img">
                      <h3>${product.title}</h3>
                      <p>Price: $${product.price}</p>
                  </div>
              `;
      });
    });
}

function fetchUsers() {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".user-container");
      data.users.forEach((user) => {
        container.innerHTML += `
                  <div class="card">
                      <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="card-img">
                      <h3>${user.firstName} ${user.lastName}</h3>
                      <p>Email: ${user.email}</p>
                  </div>
              `;
      });
    });
}

function fetchPosts() {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".post-container");
      data.posts.forEach((post) => {
        container.innerHTML += `
                  <div class="card">
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                  </div>
              `;
      });
    });
}
