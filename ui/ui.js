class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showUserProfile(movie_poster_urls) {
        this.profile.innerHTML = `
           

        <div class="row">
            <div class="column">
                
                    <img class="img-fluid mb-2" src="${movie_poster_urls[0]}">
                
                
                    <img class="img-fluid mb-2" src="${movie_poster_urls[1]}">
                
                
                    <img class="img-fluid mb-2" src="${movie_poster_urls[2]}">
                 
            </div>

            <div class="column">
                
                    <img class="img-fluid mb-2" src="${movie_poster_urls[3]}">
                
                
                    <img class="img-fluid mb-2" src="${movie_poster_urls[4]}">
            

            </div>

        </div>








      `;
    }

    showAlert(message, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}
