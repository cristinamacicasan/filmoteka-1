// Obține elementele de navigare
const homeLink = document.getElementById("home-link");
const moviesLink = document.getElementById("movies-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

// Adaugă ascultători de evenimente pentru fiecare element de navigare
homeLink.addEventListener("click", () => {
  // Navighează către pagina de acasă
  window.location.href = "index.html";
});

moviesLink.addEventListener("click", () => {
  // Navighează către pagina cu filme
  window.location.href = "movies.html";
});

aboutLink.addEventListener("click", () => {
  // Navighează către pagina despre
  window.location.href = "about.html";
});

contactLink.addEventListener("click", () => {
  // Navighează către pagina de contact
  window.location.href = "contact.html";
});



// Obține elementele navbar și modal
const navbar = document.getElementById("navbar");
const modal = document.getElementById("modal");

// Obține link-ul de contact
const contactLink = document.getElementById("contact-link");

// Atașează un ascultător de eveniment pentru link-ul de contact
contactLink.addEventListener("click", () => {
  // Afișează fereastra modală la click pe link
  modal.style.display = "block";
});

// Obține elementul de închidere a ferestrei modale
const closeBtn = document.getElementsByClassName("close")[0];

// Atașează un ascultător de eveniment pentru închiderea ferestrei modale
closeBtn.addEventListener("click", () => {
  // Ascunde fereastra modală la click pe butonul de închidere
  modal.style.display = "none";
});

// Afișează formularul de înregistrare la click pe link-ul de înregistrare
document.getElementById("register-link").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

// Afișează formularul de autentificare la click pe link-ul de autentificare
document.getElementById("login-link").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
});




const API_KEY = 'a738536a30adb33883bdab9503ea3cb4';
const API_URL = 'https://api.themoviedb.org/3';


// Funcție pentru a obține lista de filme populare de la TMDb
async function getPopularMovies() {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returnează lista de filme populare
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Funcție pentru a afișa lista de filme în galerie
async function displayMovies() {
  const movies = await getPopularMovies();
  const gallery = document.querySelector('.gallery');

  if (movies && gallery) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
      `;
      gallery.appendChild(movieElement);
    });
  } else {
    console.error('Failed to fetch popular movies or gallery element not found.');
  }
}

// Apelează funcția pentru a afișa lista de filme în galerie
displayMovies();

const API_KEY = 'a738536a30adb33883bdab9503ea3';
const API_URL = 'https://api.themoviedb.org/3';

// Funcție pentru a obține lista de filme populare de la TMDb
async function getPopularMovies() {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returnează lista de filme populare
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Funcție pentru a afișa lista de filme în galerie
async function displayMovies() {
  const movies = await getPopularMovies();
  const gallery = document.querySelector('.gallery');

  if (movies && gallery) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
      `;
      gallery.appendChild(movieElement);
    });
  } else {
    console.error('Failed to fetch popular movies or gallery element not found.');
  }
}

// Apelează funcția pentru a afișa lista de filme în galerie
displayMovies();

