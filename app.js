// DOM elements
const jokeBtn = document.querySelector(".joke-btn");
const searchBtn = document.querySelector(".search-btn");
const inputEl = document.querySelector(".input-el");

// URLs
const URL = "https://api.chucknorris.io/jokes/random";

// stores DATA
let jokesData = [];

// fetches DATA from URL
const getJokesData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    jokesData = data;
    console.log(jokesData);
  } catch (err) {
    console.log(`Error ${err}occured!`);
  }
};

// Fetches jokes from categories
const getJokeQuery = async () => {
  try {
    if (inputEl.value) {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${inputEl.value}`
      );
      const data = await response.json();
      console.log(data);
    } else {
      alert("Enter categorie");
    }
  } catch (err) {
    console.log(`Error ${err} occured!`);
  }
};

// Eventlisteners
jokeBtn.addEventListener("click", getJokesData);
searchBtn.addEventListener("click", getJokeQuery);
