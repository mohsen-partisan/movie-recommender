class MovieRecommender {
    async getMovies(movie_name) {
        var similarMoviesResponse = await fetch(
            `https://smart-movie-recommender.herokuapp.com/movie-recommender/recommended-movies?your_movie=${movie_name}`
        );

        var similarMovies = await similarMoviesResponse.json();
        if (similarMovies.response === 'Movie Not Found') {
            new UI().showAlert('Movie Not Found in DataBase!', 'alert alert-danger');
            new UI().clearProfile();
        } else {
            var moviesList = similarMovies.response;
            console.log(moviesList);

            var allMovieInfo = [];
            for (var i = 0; i <= 9; i++) {
                var titleAndYear = await this.getMovieNameAndYear(moviesList[i]);
                var response = await fetch(`http://omdbapi.com/?apikey=f0c755f5&t=${titleAndYear[0]}&y=${titleAndYear[1]}`);
                var movieInfo = await response.json();
                allMovieInfo.push(movieInfo);
            }
            return { allMovieInfo };
        }
    }

    async getMovieNameAndYear(movie_name) {
        // split movie_name by comma and parenthesis
        var movie_name_splitted = movie_name.split(/[\(),]+/);
        var name = movie_name_splitted[0];
        var index = movie_name_splitted.length - 1;
        var year = 0;
        // search for get 4 digit year from the end of array
        while (index >= 0) {
            if (/^\d{4}$/.test(movie_name_splitted[index])) {
                year = movie_name_splitted[index];
                break;
            }
            index = index - 1;
        }
        return [name, year];
    }
}
