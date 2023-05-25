export class UI {
    constructor() {
        this.listArea = document.querySelector(".list-area");
        this.movieName = document.querySelector("#movieName");
        this.movieDate = document.querySelector("#movieDate");
        this.movieCategory = document.querySelector("#movieCategory");
        this.movieDirector = document.querySelector("#movieDirector");
    }
    showAllMovie(movieData) {
        let result = "";

        movieData.forEach(movie => {
            result +=
                `
            <div class="movie-card">
                <div class="movie-info">
                    <div class="title">
                        Ad
                    </div>
                    <div class="data">
                        ${movie.name}
                    </div>
                </div>

                <div class="movie-info">
                    <div class="title">
                        Yıl
                    </div>
                    <div class="data">
                    ${movie.since}
                    </div>
                </div>

                <div class="movie-info">
                    <div class="title">
                        Kategori
                    </div>
                    <div class="data">
                    ${movie.categories}
                    </div>
                </div>

                <div class="movie-info">
                    <div class="title">
                        Yönetmen
                    </div>
                    <div class="data">
                    ${movie.director}
                    </div>
                </div>

                <div class="button-area">
                    <button class="change">Düzenle</button>
                </div>

            </div>
            `
        });

        this.listArea.innerHTML = result;
    }
    clearInput(){
        this.movieName.value = "";
        this.movieDate.value = "";
        this.movieCategory.value = "";
        this.movieDirector.value = "";
    }
}