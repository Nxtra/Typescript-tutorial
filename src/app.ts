
let jsonParser = new JSONParser();
let lib: Library;

jsonParser.getJSON("http://localhost:8080/db", data => {
    lib = Library.fromJSON(data);

    let itemContainer: HTMLElement = document.getElementById("items");
    lib.getAll().forEach(item => item.render(itemContainer));
});


let addMovieButton = document.getElementById("add-movie-button");
addMovieButton.addEventListener("click", (e: Event) => this.lib.addMovie())

let addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", (e: Event) => this.lib.addBook())

