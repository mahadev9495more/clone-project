
const favouritesList = document.getElementById('favourites-list');

document.addEventListener('DOMContentLoaded', () => {
    displayFavourites();
});

function displayFavourites() {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (favourites.length === 0) {
        favouritesList.innerHTML = '<p class="text-center">No favourite movies added.</p>';
    } else {
        favouritesList.innerHTML = favourites.map(movie => `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.year}</p>
                    </div>
                    <div>
                        <button class="btn btn-danger" onclick="removeFromFavourites('${movie.id}')">Remove from Favourites</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function removeFromFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    favourites = favourites.filter(movie => movie.id !== id);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    displayFavourites();
}











