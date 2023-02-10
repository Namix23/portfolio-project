let database = [
  {
    id: 1,
    name: "weather app",
    desc: "html, css, javascript",
    img: "../images/weather app.png",
  },
];

//Select Elements
let searchResults = document.querySelector(".search-results"),
  searchInput = document.querySelector(".search-input");

function filter() {
  for (let i = 0; i < database.length; i++) {
    searchResults.innerHTML += `
      <div class="box">
        <div class="box-left">
        <h2>${database[i].name}</h2>
        <p>${database[i].desc}</p>
        </div>
        <div class="img-right">
        <img src="${database[i].img}">
        </div>
        </div>
         `;
  }
}
