var movieName;
const searchBtn = document.getElementById('btn');

const movieRecommender = new MovieRecommender();
const ui = new UI();

searchBtn.addEventListener('click', e => {
    movieName = document.getElementById('searchUser').value;
    if (movieName !== '') {
        movieName = movieName.replace(/[^0-9A-Z]+/gi, '');
        movieName = movieName.toLowerCase();
        movieRecommender.getMovies(movieName).then(data => {
            var movieInfos = [];
            for (var i = 0; i <= 9; i++) {
                movieInfos.push(data.allMovieInfo[i]);
            }
            ui.showUserProfile(movieInfos);
        });
    } else {
        ui.clearProfile();
    }
});
