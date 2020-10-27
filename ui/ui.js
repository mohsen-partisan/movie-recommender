class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showUserProfile(movieInfos) {
        this.profile.innerHTML = `
           

        <div class="row">
            <div class="column">               
                ${this.createTable(movieInfos[0])}
                ${this.createTable(movieInfos[2])}
                ${this.createTable(movieInfos[4])}
                ${this.createTable(movieInfos[6])}
                ${this.createTable(movieInfos[8])}
                </div>

            <div class="column">
            ${this.createTable(movieInfos[1])}
            ${this.createTable(movieInfos[3])}
            ${this.createTable(movieInfos[5])}
            ${this.createTable(movieInfos[7])}
            ${this.createTable(movieInfos[9])}
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
\
                        <tr>
                            <th><hr><b>Information</b></th>
                            <th><hr>Description</th> 
                        </tr>
                        <tr>
                            <td><hr><b>Name</b></td>
                            <td><hr>${movieInfo.Title}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Actors</b></td>
                            <td><hr>${movieInfo.Actors}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Director</b></td>
                            <td><hr>${movieInfo.Director}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Country</b></td>
                            <td><hr>${movieInfo.Country}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Year</b></td>
                            <td><hr>${movieInfo.Year}</td>
                        </tr>
                        <tr>
                            <td><b>Summary</b></td>
                            <td style="text-align:left"><hr>${movieInfo.Plot}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Awards</b></td>
                            <td><hr>${movieInfo.Awards}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Box Office</b></td>
                            <td><hr>${movieInfo.BoxOffice}</td>
                        </tr>
                        <tr>
                            <td><hr><b>IMDB</b></td>
                            <td><hr>${movieInfo.imdbRating}</td>
                        </tr>
                        <tr>
                            <td><hr><b>Meta Score</b></td>
                            <td><hr>${movieInfo.Metascore}</td>
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
