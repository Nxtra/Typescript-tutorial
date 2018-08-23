
let jsonParser = new JSONParser();
let lib: Library;

jsonParser.getJSON("http://localhost:8080/db", data => {
    lib = Library.fromJSON(data);

    let itemContainer: HTMLElement = document.getElementById("items");
    lib.getAll().forEach(item => item.render(itemContainer));
});


let btn = document.getElementById("add-movie-button");
btn.addEventListener("click", (e: Event) => this.lib.addMovie())

