import { Request } from "./request";
import { UI } from "./ui";

const movieName = document.querySelector("#movieName");
const movieDate = document.querySelector("#movieDate");
const movieCategory = document.querySelector("#movieCategory");
const movieDirector = document.querySelector("#movieDirector");
const saveBtn = document.querySelector(".save")

const request = new Request("http://localhost:3000/Movie");
const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", showItem);
    saveBtn.addEventListener("click", addNewMovie);
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