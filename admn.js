document.addEventListener("DOMContentLoaded", function () {


const url = `https://solar-poised-salad.glitch.me/umutay`

const titleInput = document.getElementById("titleInput");
const genreInput = document.getElementById("genreInput");
const raitInput = document.getElementById("raitInput");
const langInput = document.getElementById("langInput");


document.querySelector("#saveBtn").onclick = function (event) {
    event.preventDefault();

    const movieCreater = {
        title: titleInput.value,
        genre: genreInput.value,
        raiting: raitInput.value,
        language: langInput.value
    }

    fetch(url, {
        method:"POST",
        body: JSON.stringify(movieCreater),
        headers: {
            "Content-type":"application/json",
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(er => console.error(er))

};

document.querySelector("#get").onclick = function(){
    fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(er => console.error(er))
};

});