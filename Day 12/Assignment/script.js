document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const viewMoviesBtn = document.getElementById("viewMovies");
    const message = document.getElementById("message");
    const moviesContainer = document.getElementById("moviesContainer");
    const backBtn = document.getElementById("back");


    
    // Handle form submission
    if (movieForm) {
        movieForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const description = document.getElementById("description").value.trim();
            const year = document.getElementById("year").value;
            const rating = document.getElementById("rating").value;
            const genre = document.getElementById("genre").value;
            const poster = document.getElementById("poster").value.trim();

            if (!name || !description || !year || !rating || !genre || !poster) {
                message.textContent = "All fields are required!";
                message.style.color = "red";
                return;
            }

            // Create movie object
            const movie = { name, description, year, rating, genre, poster };

            // Save to Local Storage
            let movies = JSON.parse(localStorage.getItem("movies")) || [];
            movies.push(movie);
            localStorage.setItem("movies", JSON.stringify(movies));

            // Show success message
            message.textContent = "Movie added successfully!";
            message.style.color = "green";

            // Clear input fields
            movieForm.reset();
        });

        viewMoviesBtn.addEventListener("click", () => {
            window.location.href = "movie.html";
        });
    }

    // Display movies on movie.html
    if (moviesContainer) {
        const movies = JSON.parse(localStorage.getItem("movies")) || [];

        if (movies.length === 0) {
            moviesContainer.innerHTML = "<p>No movies added yet.</p>";
        } else {
            movies.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.name}" />
                    <h3>${movie.name}</h3>
                    <p><strong>Description:</strong> ${movie.description}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                    <p><strong>IMDb Rating:</strong> ${movie.rating}/10</p>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                `;

                moviesContainer.appendChild(movieCard);
            });
        }

        backBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
