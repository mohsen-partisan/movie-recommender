const searchUser = document.getElementById('searchUser');

const movieRecommender = new MovieRecommender();
const ui = new UI();
searchUser.addEventListener('keyup', e => {
    var movieName = e.target.value;
    if (e.keyCode === 13) {
        if (movieName !== '') {
            movieName = movieName.replace(/[^0-9A-Z]+/gi, '');
            movieName = movieName.toLowerCase();
            movieRecommender.getMovies(movieName).then(data => {
                var movieInfos = [];
                for (var i = 0; i <= 4; i++) {
                    console.log(data.allMovieInfo[i]);
                    movieInfos.push(data.allMovieInfo[i]);
                }
                ui.showUserProfile(movieInfos);
            });
        } else {
            ui.clearProfile();
        }
    }
});
