export class UI {
    constructor() {
        this.listArea = document.querySelector(".list-area");
        this.movieName = document.querySelector("#movieName");
        this.movieDate = document.querySelector("#movieDate");
        this.movieCategory = document.querySelector("#movieCategory");
        this.movieDirector = document.querySelector("#movieDirector");
        this.changeSave = document.querySelector(".change-save");
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

                <div class="movie-info">
                    <div class="id" style="display:none">
                        ${movie.id}
                    </div>
                </div>

                <div class="button-area">
                    <button class="delete">Sil</button>
                    <button class="change">Düzenle</button>
                </div>

            </div>
            `
        });

        this.listArea.innerHTML = result;
    }
    clearInput() {
        this.movieName.value = "";
        this.movieDate.value = "";
        this.movieCategory.value = "";
        this.movieDirector.value = "";
    }
    deleteMovieFromUI(target) {
        target.remove();
    }
    changeButtonDisplay(target) {
        if (this.changeSave.style.display === "none") {
            this.changeSave.style.display = "block"
            this.addMovieInfoToInput(target);
            this.changeButtonHTML(target);
        } else {
            this.changeSave.style.display = "none"
            this.clearInput();
            this.changeButtonHTML(target);
        }
    }
    addMovieInfoToInput(target) {
        const children = target.children;

        this.movieName.value = children[0].lastElementChild.textContent.trim();
        this.movieDate.value = children[1].lastElementChild.textContent.trim();
        this.movieCategory.value = children[2].lastElementChild.textContent.trim();
        this.movieDirector.value = children[3].lastElementChild.textContent.trim();

    }
    changeButtonHTML(e) {
        if (this.changeSave.style.display === "block") {
            e.lastElementChild.lastElementChild.innerHTML = "Geri Al"
        }
        else if (this.changeSave.style.display === "none") {
            e.lastElementChild.lastElementChild.innerHTML = "Düzenle"
        }
    }
}
