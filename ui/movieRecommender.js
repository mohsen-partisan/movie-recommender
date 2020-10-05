class MovieRecommender {
    async getMovies(movie_name) {
        var similarMoviesResponse = await fetch(`http://127.0.0.1:5000/movie-recommender/recommended-movies?your_movie=${movie_name}`);

        var similarMovies = await similarMoviesResponse.json();
        var moviesList = similarMovies.response;

        var allMovieInfo = [];
        for (var i = 0; i <= 4; i++) {
            var titleAndYear = await this.getMovieNameAndYear(moviesList[i]);
            var response = await fetch(`http://omdbapi.com/?apikey=f0c755f5&t=${titleAndYear[0]}&y=${titleAndYear[1]}`);
            console.log(response);
            var movieInfo = await response.json();
            allMovieInfo.push(movieInfo);
        }

        console.log('hello', allMovieInfo);

        return {
            allMovieInfo
        };
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
