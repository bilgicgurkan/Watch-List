import { Request } from "./request";
import { UI } from "./ui";

const movieName = document.querySelector("#movieName");
const movieDate = document.querySelector("#movieDate");
const movieCategory = document.querySelector("#movieCategory");
const movieDirector = document.querySelector("#movieDirector");
const saveBtn = document.querySelector(".save");
const listArea = document.querySelector(".list-area");
const updateMovieInfo = document.querySelector(".change-save");

const request = new Request("http://localhost:3000/Movie");
const ui = new UI();


eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", showItem);
    saveBtn.addEventListener("click", addNewMovie);
    listArea.addEventListener("click", updateOrDelete);
    updateMovieInfo.addEventListener("click", updateMovieInfos);
}

function showItem() {
    request.get()
        .then(data => {
            ui.showAllMovie(data);
        })
        .catch(err => console.log(err))
};

function addNewMovie() {

    const name = movieName.value.trim();
    const date = movieDate.value.trim();
    const category = movieCategory.value.trim();
    const director = movieDirector.value.trim();

    if (name === "" || date === "" || category === "" || director === "") {
        alert("Lütfen tüm boşlukları doldurunuz!")
    } else {
        request.post({ name: name, since: Number(date), categories: category, director: director })
            .then(data => {
                ui.showAllMovie(data)
            })
            .catch(err => console.log(err))
    }

    ui.clearInput();
}

function updateOrDelete(e) {

    if (e.target.className === "delete") {
        deleteMovie(e.target);
    }
    if (e.target.className === "change") {
        updateMovie(e.target.parentElement.parentElement);
    }

}

function deleteMovie(target) {
    const id = target.parentElement.previousElementSibling.firstElementChild.textContent.trim();
    request.delete(id)
        .then(deleteMovie => {
            ui.deleteMovieFromUI(target.parentElement.parentElement)
        })
        .catch(err => console.log(err))
}

let updateState = null;

function updateMovie(target) {
    ui.changeButtonDisplay(target)

    if (updateState === null) {
        updateState = {
            updateId: target.children[4].textContent.trim(),
            updateParent: target
        }
    } else {
        let updateState = null;
    }
}

function updateMovieInfos() {


    if (updateState) {
        const data = { name: movieName.value.trim(), since: Number(movieDate.value.trim()), categories: movieCategory.value.trim(), director: movieDirector.value.trim() }
        request.put(updateState.updateId, data)
            .then()
            .catch(err => console.log(err))
    }

}