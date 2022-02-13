const api_key = "e3aa3fd07e53003deed34e59636e3970";
const base_api_url = "https://api.themoviedb.org/3/";
const popular = base_api_url + `movie/popular?api_key=${api_key}`;
let row = document.querySelector(".row");
let search = document.getElementsByClassName("search-field");
let main = document.querySelector(".container");
const sideMenu = document.getElementsByClassName("side-menu");
const inputWrapper = document.querySelector(".input-wrapper");
const burgerMenu = inputWrapper.querySelector(":nth-child(2)");
let activePage = 1;
getTopRatedMovies();
const menuLi = document.querySelectorAll(".nav-li");
menuLi.forEach((item, i) => {
  item.addEventListener("click", () => {
    menuLi[activePage].classList.remove("active");
    item.classList.add("active");
    activePage = i;
    let itemWidth = item.clientWidth;
    console.log(itemWidth);
    if (itemWidth > 100) {
      item.style.padding = "12px 4px";
    }
  });
});

async function getTopRatedMovies() {
  fetch(popular)
    .then((res) => res.json())
    .then((data) => {
      let list = data.results;
      list.forEach((movie) => {
        const {
          title,
          backdrop_path,
          vote_average,
          id,
          release_date,
          poster_path,
        } = movie;
        release_date.split(" ");
        let year = release_date.slice(0, 4);
        console.log(year);
        let filter_movie = document.createElement("div");
        filter_movie.classList.add("filter-movie");
        let filter_movie_img = document.createElement("div");
        filter_movie_img.classList.add("filter-movie-img");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="movie.html">
          ${title}
        </a>
      </h2>
        `;
        filter_movie_img.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="">
          <div class="play">
              <a href="movie.html" onclick="movieSelected('${id}')">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 265.4 265.4"
              >
                <style>
                  .a {
                    fill: #fff;
                  }
                </style>
                <path
                  d="M194.2 123.7l-78.1-51.1c-1.9-1.3-4-1.9-6.1-1.9 -5.5 0-9.7 4.5-9.7 10.5v103.2c0 6 4.2 10.5 9.7 10.5 2.1 0 4.2-0.7 6.1-1.9l78.1-51.1c3.3-2.1 5.1-5.4 5.1-9C199.3 129.1 197.4 125.8 194.2 123.7zM115.3 175.4V90l65.3 42.7L115.3 175.4z"
                  class="a"
                ></path>
                <path
                  d="M132.7 0C59.5 0 0 59.5 0 132.7c0 73.2 59.5 132.7 132.7 132.7s132.7-59.5 132.7-132.7C265.4 59.5 205.9 0 132.7 0zM132.7 250.4C67.8 250.4 15 197.6 15 132.7 15 67.8 67.8 15 132.7 15s117.7 52.8 117.7 117.7C250.4 197.6 197.6 250.4 132.7 250.4z"
                  class="a"
                ></path>
              </svg>    
              </a>
          </div>
          <div class="rates">
          <div class="logo_Tmdb">
          <img
            src="../Logo/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          <p>${vote_average}</p>
          </div>
            <div class="date">
              <p>${year} წ</p>
            </div>
          </div>
      </div>
      `;
        filter_movie.append(filter_movie_img);
        filter_movie.append(movieTitle);

        row.append(filter_movie);
      });
    });
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
}

search[0].addEventListener("keyup", () => {
  let searchValue = search[0].value;
  if (searchValue !== "") {
    var searchedMovie =
      base_api_url + `search/multi?api_key=${api_key}&query=${searchValue}`;
    getSearchedMovie();
  }
  if (searchValue == "") {
    location.reload();
  }

  function getSearchedMovie() {
    fetch(searchedMovie)
      .then((res) => res.json())
      .then((data) => {
        let list = data.results;
        main.innerHTML = ``;
        let row = document.createElement("div");
        row.classList.add("row");
        list.forEach((movie) => {
          const {
            title,
            backdrop_path,
            vote_average,
            id,
            release_date,
            poster_path,
            name,
            first_air_date,
          } = movie;
          let year = release_date
            ? release_date.slice(0, 4)
            : first_air_date.slice(0, 4);
          let filter_movie = document.createElement("div");
          filter_movie.classList.add("filter-movie");
          let filter_movie_img = document.createElement("div");
          filter_movie_img.classList.add("filter-movie-img");
          let movieTitle = document.createElement("div");
          movieTitle.classList.add("title");
          movieTitle.innerHTML = `
        <h2>
        <a href="movie.html">
          ${title ? title : name}
        </a>
      </h2>
        `;
          filter_movie_img.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w300${backdrop_path}" alt="">
          <div class="play">
              <a href="movie.html" onclick="movieSelected('${id}')">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 265.4 265.4"
              >
                <style>
                  .a {
                    fill: #fff;
                  }
                </style>
                <path
                  d="M194.2 123.7l-78.1-51.1c-1.9-1.3-4-1.9-6.1-1.9 -5.5 0-9.7 4.5-9.7 10.5v103.2c0 6 4.2 10.5 9.7 10.5 2.1 0 4.2-0.7 6.1-1.9l78.1-51.1c3.3-2.1 5.1-5.4 5.1-9C199.3 129.1 197.4 125.8 194.2 123.7zM115.3 175.4V90l65.3 42.7L115.3 175.4z"
                  class="a"
                ></path>
                <path
                  d="M132.7 0C59.5 0 0 59.5 0 132.7c0 73.2 59.5 132.7 132.7 132.7s132.7-59.5 132.7-132.7C265.4 59.5 205.9 0 132.7 0zM132.7 250.4C67.8 250.4 15 197.6 15 132.7 15 67.8 67.8 15 132.7 15s117.7 52.8 117.7 117.7C250.4 197.6 197.6 250.4 132.7 250.4z"
                  class="a"
                ></path>
              </svg>    
              </a>
          </div>
          <div class="rates">
          <div class="logo_Tmdb">
          <img
            src="../Logo/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          <p>${vote_average}</p>
          </div>
            <div class="date">
              <p>${year} წ</p>
            </div>
          </div>
      </div>
      `;
          filter_movie.append(filter_movie_img);
          filter_movie.append(movieTitle);
          row.append(filter_movie);
          main.append(row);
          console.log(list);
        });
      });
  }
});

let responsiveBurger = window.matchMedia(
  "(max-width:1024px) and (min-width:320px)"
);

function responsiveMenu(responsiveBurger) {
  if (responsiveBurger.matches) {
    sideMenu[0].style.display = "none";
    document.getElementsByClassName("filter-movie-section")[0].style.padding =
      "0px";
    burgerMenu.className = "fas fa-bars";
    burgerMenu.addEventListener("click", menuToggle);
  } else {
    document.getElementsByClassName(
      "filter-movie-section"
    )[0].style.paddingLeft = "90px";
    document.getElementsByClassName(
      "filter-movie-section"
    )[0].style.paddingRight = "10px";
    burgerMenu.className = "fal fa-search";
    burgerMenu.removeEventListener("click", menuToggle);
    sideMenu[0].style.display = "flex";
  }
}

responsiveBurger.addEventListener("change", responsiveMenu);
function menuToggle() {
  if (sideMenu[0].style.display === "none") {
    sideMenu[0].style.display = "flex";
  } else {
    sideMenu[0].style.display = "none";
  }
}
