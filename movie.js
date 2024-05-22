
const apiKey = '6e5f13ee';
const movieDetailsContainer = document.getElementById('movie-details');

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        });
});

function displayMovieDetails(movie) {
    movieDetailsContainer.innerHTML = `
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Plot}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Year:</strong> ${movie.Year}</li>
                    <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                    <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                    <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                </ul>
                <a href="index.html" class="btn btn-primary mt-3">Back to Search</a>
            </div>
        </div>
    `;
}