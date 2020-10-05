const searchUser = document.getElementById('searchUser');

const movieRecommender = new MovieRecommender();
const ui = new UI();
searchUser.addEventListener('keyup', e => {
    const movieName = e.target.value;
    if (e.keyCode === 13) {
        if (movieName !== '') {
            movieRecommender.getMovies(movieName).then(data => {
                var posters = [];
                for (var i = 0; i <= 4; i++) {
                    if (data.allMovieInfo[i].Poster === 'N/A') {
                        // Show Alert
                        ui.showAlert('Movie Poster Not Found!', 'alert alert-danger');
                    } else {
                        console.log(data.allMovieInfo[i].Poster);
                        posters.push(data.allMovieInfo[i].Poster);
                        ui.showUserProfile(posters);
                    }
                }
            });
        } else {
            ui.clearProfile();
        }
    }
});
