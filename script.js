// Função para abrir o trailer em uma nova aba
document.querySelectorAll('.trailer').forEach(button => {
    button.addEventListener('click', function() {
        const trailerUrl = this.getAttribute('data-trailer');
        window.open(trailerUrl, '_blank');
    });
});

// Função para enviar comentários
document.querySelectorAll('.submit-comment').forEach(button => {
    button.addEventListener('click', function() {
        const commentInput = this.previousElementSibling;
        const commentText = commentInput.value;

        if (commentText) {
            const commentList = this.closest('.comments').querySelector('.comment-list');
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            commentInput.value = ''; // Limpar o campo de input
        }
    });
});

// Função para buscar filmes
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        const description = movie.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});

// Função para adicionar filmes a favoritos
const favoriteMovies = [];

document.querySelectorAll('.watch-now').forEach(button => {
    button.addEventListener('click', function() {
        const movieElement = this.closest('.movie');
        const movieTitle = movieElement.querySelector('h3').textContent;

        if (!favoriteMovies.includes(movieTitle)) {
            favoriteMovies.push(movieTitle);
            alert(`${movieTitle} adicionado aos favoritos!`);
        } else {
            alert(`${movieTitle} já está nos seus favoritos.`);
        }
    });
});

// Função para exibir os filmes favoritos
function displayFavorites() {
    const favoriteSection = document.getElementById('favorites');
    favoriteSection.innerHTML = '<h2>Filmes Favoritos</h2>';

    if (favoriteMovies.length === 0) {
        favoriteSection.innerHTML += '<p>Nenhum filme favorito ainda.</p>';
        return;
    }

    favoriteMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.textContent = movie;
        favoriteSection.appendChild(movieElement);
    });
}

// Adicionar um botão de "Ver Favoritos" no footer
const footer = document.querySelector('footer');
const favoritesButton = document.createElement('button');
favoritesButton.textContent = 'Ver Favoritos';
favoritesButton.addEventListener('click', displayFavorites);
footer.appendChild(favoritesButton);

// Criar uma seção de favoritos no HTML
const favoritesSection = document.createElement('section');
favoritesSection.id = 'favorites';
document.body.appendChild(favoritesSection);
