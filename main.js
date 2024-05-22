
const apiKey = '6e5f13ee';
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    displayResults(data.Search);
                } else {
                    searchResults.innerHTML = `<p class="text-center">${data.Error}</p>`;
                }
            });
    } else {
        searchResults.innerHTML = '';
    }
});

function displayResults(movies) {
    searchResults.innerHTML = movies.map(movie => `
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                </div>
                <div>
                    <button class="btn btn-primary" onclick="viewDetails('${movie.imdbID}')">View Details</button>
                    <button class="btn btn-warning" onclick="addToFavourites('${movie.imdbID}', '${movie.Title}', '${movie.Year}', '${movie.Poster}')">Add to Favourites</button>
                </div>
            </div>
        </div>
    `).join('');
}

function viewDetails(imdbID) {
    window.location.href = `movie.html?id=${imdbID}`;
}

function addToFavourites(id, title, year, poster) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    favourites.push({ id, title, year, poster });
    localStorage.setItem('favourites', JSON.stringify(favourites));
    alert('Added to favourites!');
}
