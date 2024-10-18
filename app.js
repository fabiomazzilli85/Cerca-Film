function cercaFilm() {
    const film = document.getElementById('film').value;
    const apiKey = '8ace0fff523a317c94b868afc016abba';

    fetch(`https://api.themoviedb.org/3/search/movie?query=${film}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const movie = data.results[0];
                const movieCard = `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm bg-card">
                            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                            <div class="card-body">
                                <h5 class="card-title text-center"><strong>Titolo: </strong>${movie.title}</h5>
                                <p class="card-text text-center"><strong>Voto del pubblico</strong>: ${movie.vote_average.toFixed(0)}</p>
                                <p class="card-text text-center"><strong>Trama</strong>: ${movie.overview}</p>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById('movies-container').insertAdjacentHTML('beforeend', movieCard);
            } else {
                console.log(`Nessun risultato trovato per ${film}`);
            }
        })
        .catch(error => {
            console.error(`Errore nel recuperare i dati per ${film}:`, error);
        });
}
