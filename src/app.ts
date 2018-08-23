
let jsonParser = new JSONParser();

jsonParser.getJSON("http://localhost:8080/db", data => {
    let library:Library = Library.fromJSON(data);

    let itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));
});

class AdminTS{
    constructor(){
        let btn = document.getElementById("add-movie-button");
        btn.addEventListener("click", (e:Event) => )
    }
}
