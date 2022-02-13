const base_api_url = "https://api.themoviedb.org/3/";
const api_key = "e3aa3fd07e53003deed34e59636e3970";
const homeCarouselImagePath = "https://image.tmdb.org/t/p/1280";
const mainMoviesLink = "https://image.tmdb.org/t/p/w300";
const top_Rated = base_api_url + `movie/top_rated?api_key=${api_key}`;
const popular = base_api_url + `movie/popular?api_key=${api_key}`;
const apiConfig = base_api_url + `configuration?api_key=${api_key}`;
const topRatedTv = base_api_url + `tv/top_rated?api_key=${api_key}`;
const upcomingMovies = base_api_url + `movie/upcoming?api_key=${api_key}`;
const container = document.querySelector(".container");
const inputWrapper=document.querySelector('.input-wrapper')
const burgerMenu=inputWrapper.querySelector(':nth-child(2)')
const sideMenu=document.getElementsByClassName('side-menu')
console.log(burgerMenu)
let main=document.querySelector('.content')
let homeCarousel=document.getElementsByClassName('homeCarousel')
let search=document.getElementsByClassName('search-field')
let popularMovieWrapper = document.querySelector(".popular-movie-slider");
let topRatedMovieWrapper = document.querySelector(".top_rated-movie-slider");
let upcoming_Movie_Wrapper = document.querySelector(
  ".upcoming_movie-movie-slider"
);
let topRatedTvWrapper = document.querySelector(".top_rated-tv-slider");
let swiperUpcomingMovie =
  upcoming_Movie_Wrapper.querySelector(".swiper-wrapper");
let swiperTop_Rated_Movie =
  topRatedMovieWrapper.querySelector(".swiper-wrapper");
let swiperTop_Rated_Tv = topRatedTvWrapper.querySelector(".swiper-wrapper");
let swiperMovie = popularMovieWrapper.querySelector(".swiper-wrapper");
let activePage = 0;
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
getPopularMovies();
getTopRatedMovies();
getUpcomingMovies();
getTopRatedTv();
function getTopRatedMovies() {
  fetch(top_Rated)
    .then((res) => res.json())
    .then((data) => {
      let list = data.results;
      list.forEach((movie) => {
        const { title, poster_path, vote_average, id, release_date } = movie;
        let year = release_date.slice(0, 4);
        let movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie");
        movieWrapper.innerHTML = `
        <div class="movie-img">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}">
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
    </div>
        `;
        let swiper_Slide = document.createElement("div");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="movie.html" onclick="movieSelected('${id}')">
          ${title}
        </a>
      </h2>
        `;
        movieWrapper.append(movieTitle);
        swiper_Slide.classList.add("swiper-slide");
        swiper_Slide.append(movieWrapper);
        swiperTop_Rated_Movie.append(swiper_Slide);
      });
      console.log(list);
    });
}

function getTopRatedTv() {
  fetch(topRatedTv)
    .then((res) => res.json())
    .then((data) => {
      let list = data.results;
      list.forEach((movie) => {
        const { name, poster_path, vote_average, id, first_air_date } = movie;
        let year = first_air_date.slice(0, 4);
        let movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie");
        movieWrapper.innerHTML = `
        <div class="movie-img">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}">
        <div class="play">
            <a href="tv.html" onclick="tvSelected('${id}')">
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
    </div>
        `;
        let swiper_Slide = document.createElement("div");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="tv.html" onclick="tvSelected('${id}')">
          ${name}
        </a>
      </h2>
        `;
        movieWrapper.append(movieTitle);
        swiper_Slide.classList.add("swiper-slide");
        swiper_Slide.append(movieWrapper);
        swiperTop_Rated_Tv.append(swiper_Slide);
      });
      console.log(list);
    });
}

function getPopularMovies() {
  fetch(popular)
    .then((res) => res.json())
    .then((data) => {
      let list = data.results;
      list.forEach((movie) => {
        const { title, poster_path, vote_average, id, release_date } = movie;
        let year = release_date.slice(0, 4);
        let movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie");
        movieWrapper.innerHTML = `
        <div class="movie-img">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}">
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
    </div>
        `;
        let swiper_Slide = document.createElement("div");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="movie.html" onclick="movieSelected('${id}')">
          ${title}
        </a>
      </h2>
        `;
        movieWrapper.append(movieTitle);
        swiper_Slide.classList.add("swiper-slide");
        swiper_Slide.append(movieWrapper);
        swiperMovie.append(swiper_Slide);
      });
      console.log(list);
    });
}
function getConfig() {
  fetch(apiConfig)
    .then((res) => res.json())
    .then((data) => {
      let list = data;
      console.log(data);
    });
}

function getUpcomingMovies() {
  fetch(upcomingMovies)
    .then((res) => res.json())
    .then((data) => {
      let list = data.results;
      list.forEach((movie) => {
        const { title, poster_path, vote_average, id, release_date } = movie;
        let year = release_date.slice(0, 4);
        let movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie");
        movieWrapper.innerHTML = `
        <div class="movie-img">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}">
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
    </div>
        `;
        let swiper_Slide = document.createElement("div");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="movie.html" onclick="movieSelected('${id}')">
          ${title}
        </a>
      </h2>
        `;
        movieWrapper.append(movieTitle);
        swiper_Slide.classList.add("swiper-slide");
        swiper_Slide.append(movieWrapper);
        swiperUpcomingMovie.append(swiper_Slide);
      });
      console.log(list);
    });
}

const swiper = new Swiper(".homeCarousel", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".fa-long-arrow-alt-right",
    prevEl: ".fa-long-arrow-alt-left",
  },

  // And if we need scrollbar
});

const swiper2 = new Swiper(".popular-movie-slider", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper1-next",
    prevEl: ".swiper1-prev",
  },
  breakpoints:{
    1650:{
      slidesPerView:5
    },

    1024:{
      slidesPerView:4
    },
    768:{
      slidesPerView:3
    },
    425:{
      slidesPerView:2
    },
    375:{
      slidesPerView:2
    },
    320:{
      slidesPerView:2
    }

  }
});
const swiper3 = new Swiper(".top_rated-movie-slider", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper2-next",
    prevEl: ".swiper2-prev",
  },
  breakpoints:{
    1650:{
      slidesPerView:5
    },
    1024:{
      slidesPerView:4
    },

    768:{
      slidesPerView:3
    },
    425:{
      slidesPerView:2
    },
    375:{
      slidesPerView:2
    },
    320:{
      slidesPerView:2
    }

  }

});

const swiper4 = new Swiper(".upcoming_movie-movie-slider", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper3-next",
    prevEl: ".swiper3-prev",
  },
  breakpoints:{
    1650:{
      slidesPerView:5
    },

    1024:{
      slidesPerView:4
    },

    768:{
      slidesPerView:3
    },
    425:{
      slidesPerView:2
    },
    375:{
      slidesPerView:2
    },
    320:{
      slidesPerView:2
    }

  }

});
const swiper5 = new Swiper(".top_rated-tv-slider", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".swiper4-next",
    prevEl: ".swiper4-prev",
  },
  breakpoints:{
    1650:{
      slidesPerView:5
    },

    1024:{
      slidesPerView:4
    },

    768:{
      slidesPerView:3
    },
    425:{
      slidesPerView:2
    },
    375:{
      slidesPerView:2
    },
    320:{
      slidesPerView:2
    }
  }

});

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
}

function tvSelected(id) {
  sessionStorage.setItem("tvId", id);
}

function homeCarouselSpidermanFunc(){
  sessionStorage.setItem("movieId",634649)
}

function homeCarouselEncantoFunc(){
  sessionStorage.setItem("movieId",568124)
}


search[0].addEventListener('keyup',()=>{
  let searchValue=search[0].value
  if(searchValue!==''){
    var searchedMovie=base_api_url+`search/multi?api_key=${api_key}&query=${searchValue}`
    getSearchedMovie()
  }
    if(searchValue==''){
      location.reload()
    }

  function getSearchedMovie(){
  fetch(searchedMovie).then(res=>res.json()).then(data=>{
      let list=data.results
      main.innerHTML=``
      homeCarousel[0].style.display="none"
      let rowSearched=document.createElement('div')
      rowSearched.classList.add('row_searched')
      list.forEach((movie) => {
        const {
          title,
          backdrop_path,
          vote_average,
          id,
          release_date,
          poster_path,
          first_air_date,
          name
        } = movie;
        let year = release_date ? release_date.slice(0,4):first_air_date.slice(0,4);
        let filter_movie = document.createElement("div");
        filter_movie.classList.add("filter-movie","searched-movie");
        let filter_movie_img = document.createElement("div");
        filter_movie_img.classList.add("filter-movie-img");
        let movieTitle = document.createElement("div");
        movieTitle.classList.add("title");
        movieTitle.innerHTML = `
        <h2>
        <a href="movie.html">
          ${title? title:name}
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
        rowSearched.append(filter_movie);
        main.append(rowSearched)
        main.style.margin='0'
        main.style.paddingLeft='100px'
        main.style.paddingRight='10px'
      });
    })
    responsiveBurger.addEventListener('change',()=>{
      if(responsiveBurger.matches){
        main.style.margin='0 auto'
        main.style.padding='0'
      }
      else{
        main.style.margin='0'
        main.style.paddingLeft='100px'
        main.style.paddingRight='10px'
      }
    })
    
  }
})

let responsiveBurger=window.matchMedia("(max-width:1024px) and (min-width:320px)")

function responsiveMenu(responsiveBurger){
    if(responsiveBurger.matches){
    sideMenu[0].style.display='none'
    burgerMenu.className='fal fa-bars'
    burgerMenu.addEventListener('click',menuToggle)
  }
  else{
    burgerMenu.className='fal fa-search'
    burgerMenu.removeEventListener('click',menuToggle)
    sideMenu[0].style.display='flex'
  }
}

responsiveBurger.addEventListener('change',responsiveMenu)
function menuToggle(){
  if(sideMenu[0].style.display==='none'){
    sideMenu[0].style.display='flex';
  }
  else{
    sideMenu[0].style.display='none'
  }
}