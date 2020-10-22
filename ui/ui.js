class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showUserProfile(movieInfos) {
        this.profile.innerHTML = `
           

        <div class="row">
            <div class="column">
                
                
                ${this.createTable(movieInfos[0])}
                ${this.createTable(movieInfos[1])}
                ${this.createTable(movieInfos[2])}
                
                    
                 
            </div>

            <div class="column">
                
                    
                ${this.createTable(movieInfos[3])}
                <div>
                    
                    ${this.createTable(movieInfos[4])}
                </div>
            

            </div>

        </div>
`;
    }
    createTable(movieInfo) {
        return `
        <div>
                    
                    
                    <table style="width:auto; margin-top:4px; border:1px solid black">
                        <tr>
                            <th>Poster: </th>
                            <th><img class="img-fluid mb-2" src="${movieInfo.Poster}" alt='Image Not Found!'></th> 
                        </tr>

                        <tr>
                            <th>Information</th>
                            <th>Description</th> 
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>${movieInfo.Title}</td>
                        </tr>
                        <tr>
                            <td>Actors</td>
                            <td>${movieInfo.Actors}</td>
                        </tr>
                        <tr>
                            <td>Director</td>
                            <td>${movieInfo.Director}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>${movieInfo.Country}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>${movieInfo.Year}</td>
                        </tr>
                        <tr>
                            <td>Summary</td>
                            <td>${movieInfo.Plot}</td>
                        </tr>
                        <tr>
                            <td>Awards</td>
                            <td>${movieInfo.Awards}</td>
                        </tr>
                        <tr>
                            <td>Box Office</td>
                            <td>${movieInfo.BoxOffice}</td>
                        </tr>
                        <tr>
                            <td>IMDB</td>
                            <td>${movieInfo.imdbRating}</td>
                        </tr>
                        <tr>
                            <td>Meta Score</td>
                            <td>${movieInfo.Metascore}</td>
                        </tr>
                    </table>

                </div>`;
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
        }, 9000);
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
